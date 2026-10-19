import PromoCode from "../src/components/PromoCode.vue";
import PreOrderSummary from "../src/components/PreOrderSummary.vue";

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
