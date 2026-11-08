jest.mock("../../src/components/Header.vue", () => ({
  __esModule: true,
  default: {},
}));

import Form from "../../src/components/Form.vue";

describe("Form.vue checkout step", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("restores step 2 from localStorage", () => {
    localStorage.setItem("checkoutStep", "2");

    expect(Form.data().step).toBe(2);
  });

  it("defaults to step 1 when the saved step is invalid", () => {
    localStorage.setItem("checkoutStep", "3");

    expect(Form.data().step).toBe(1);
  });

  it("restores saved delivery details", () => {
    localStorage.setItem(
      "checkoutOrder",
      JSON.stringify({ firstName: "Jane", state: "Illinois" }),
    );

    const { order } = Form.data();

    expect(order.firstName).toBe("Jane");
    expect(order.state).toBe("Illinois");
    expect(order.lastName).toBe("");
  });

  it("persists delivery details", () => {
    const checkout = {
      order: { firstName: "Jane", state: "Illinois", business: "ignored" },
    };

    Form.methods.saveOrder.call(checkout);

    expect(JSON.parse(localStorage.getItem("checkoutOrder"))).toMatchObject({
      firstName: "Jane",
      state: "Illinois",
    });
  });

  it("persists step changes", () => {
    const checkout = {
      step: 1,
      saveStep: Form.methods.saveStep,
    };

    Form.methods.nextStep.call(checkout);
    expect(localStorage.getItem("checkoutStep")).toBe("2");

    Form.methods.backStep.call(checkout);
    expect(localStorage.getItem("checkoutStep")).toBe("1");
  });
});
