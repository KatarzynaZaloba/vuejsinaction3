import { shallowMount } from "@vue/test-utils";
import CartSteps from "../../src/components/CartSteps.vue";

describe("CartSteps.vue", () => {
  it("marks the first border done at step 2", () => {
    const wrapper = shallowMount(CartSteps, {
      props: { step: 2 },
    });

    expect(wrapper.find(".step-1 .border").classes()).toContain("done");
  });
});
