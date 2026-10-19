import PromoCode from "../src/components/PromoCode.vue";
import PreOrderSummary from "../src/components/PreOrderSummary.vue";
import Form from "../src/components/Form.vue";

describe("discount storage", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it("renders discount components when storage reads are unavailable", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Storage unavailable");
    });

    expect(PromoCode.data().applied).toBe(false);
    expect(PreOrderSummary.data().hasDiscount).toBe(false);
  });

  it("keeps the promo unapplied when saving the discount fails", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage unavailable");
    });
    const promo = { code: "PAWSOME20", applied: false };

    PromoCode.methods.apply.call(promo);

    expect(promo.applied).toBe(false);
  });

  it("does not apply the promo after it has been redeemed", () => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation((key) =>
        key === "discountRedeemed" ? "true" : null,
      );
    const setItem = jest.spyOn(Storage.prototype, "setItem");
    const promo = { code: "PAWSOME20", applied: false };

    PromoCode.methods.apply.call(promo);

    expect(promo.applied).toBe(false);
    expect(setItem).not.toHaveBeenCalled();
  });

  it("does not show the promo discount once it has been redeemed", () => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation((key) =>
        key === "discountRedeemed" ? "true" : "PAWSOME20",
      );

    expect(PreOrderSummary.data().hasDiscount).toBe(false);
  });

  it("records promo redemption when an order is submitted", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("PAWSOME20");
    const setItem = jest.spyOn(Storage.prototype, "setItem");
    const removeItem = jest.spyOn(Storage.prototype, "removeItem");
    const form = { madeOrder: false };

    Form.methods.submitForm.call(form);

    expect(form.madeOrder).toBe(true);
    expect(setItem).toHaveBeenCalledWith("discountRedeemed", "true");
    expect(removeItem).toHaveBeenCalledWith("discount");
  });

  it("falls back to the loyalty discount when a polling read fails", () => {
    jest.useFakeTimers();
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Storage unavailable");
    });
    const summary = { hasDiscount: true, discountInterval: null };

    PreOrderSummary.mounted.call(summary);
    jest.advanceTimersByTime(100);

    expect(summary.hasDiscount).toBe(false);
    clearInterval(summary.discountInterval);
  });
});
