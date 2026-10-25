<script>
import MyHeader from "./Header.vue";
import CartSteps from "./CartSteps.vue";
import CartItems from "./CartItems.vue";
import PromoCode from "./PromoCode.vue";
import DeliveryDetails from "./DeliveryDetails.vue";
import OrderSummary from "./OrderSummary.vue";
import CartRecommender from "./CartRecommender.vue";
import MyFooter from "./Footer.vue";
import PreOrderSummary from "./PreOrderSummary.vue";
export default {
  name: "Form",
  props: ["cartItemCount"],
  data() {
    let cart = [];

    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      cart = Array.isArray(parsedCart) ? parsedCart : [];
      const subtotal = cart.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0,
      );
    } catch {
      cart = [];
    }

    return {
      cart,
      states: {
        DL: "Dolnośląskie",
        KP: "Kujawsko-pomorskie",
        LB: "Lubelskie",
        LU: "Lubuskie",
      },
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        method: "Home address",
        business: "Business address",
        home: "Home address",
        gift: "Send as a gift",
        sendGift: "Send as a gift",
        dontSendGift: "Do not send as a gift",
      },
      madeOrder: false,
    };
  },
  computed: {
    subtotal() {
      return this.cart.reduce(
        (sum, product) => sum + Number(product.price || 0),
        0,
      );
    },
  },
  components: {
    MyHeader,
    CartSteps,
    CartItems,
    PromoCode,
    DeliveryDetails,
    OrderSummary,
    CartRecommender,
    MyFooter,
    PreOrderSummary,
  },
  methods: {
    submitForm() {
      this.madeOrder = true;
      try {
        if (localStorage.getItem("discount") === "PAWSOME20") {
          localStorage.setItem("discountRedeemed", "true");
          localStorage.removeItem("discount");
        }
      } catch {}
    },
    backStep() {
      const stepIndicators = document.querySelectorAll(".step-indicator");
      const elementToHide = document.querySelector(".cart-info-left");
      if (
        stepIndicators.length &&
        stepIndicators[0].classList.contains("active")
      ) {
        this.$router.push({ name: "Main" });
        return;
      }
      const backButton = document.querySelector(".header .go-back");

      stepIndicators.forEach((indicator, index) => {
        if (index === 1) {
          indicator.classList.remove("active");
        }
      });

      stepIndicators.forEach((indicator, index) => {
        if (index === 0) {
          indicator.classList.remove("done");
          indicator.classList.add("active");
        }
      });

      const activeStep = document.querySelector(
        ".step-indicator.active .circle",
      );

      if (activeStep) {
        activeStep.innerHTML = "1";
      }

      const doneStep = document.querySelector(".step-indicator.done .circle");

      if (!doneStep && backButton) {
        backButton.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to shop`;
      }
      if (elementToHide.hasAttribute("style")) {
        elementToHide.style.display = "block";
      }
    },
  },
};
</script>

<template>
  <div class="checkout-page">
    <div class="cart-page">
      <my-header :cartItemCount="cartItemCount"></my-header>
      <div class="container">
        <div class="header">
          <button @click="backStep" class="go-back">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to shop
          </button>
          <h1 class="title">Your <span class="highlight">cart</span></h1>
          <p class="subtitle" v-if="!cart.length">Your cart is empty</p>
        </div>
      </div>

      <cart-steps></cart-steps>

      <div class="cart-info">
        <div class="cart-info-left">
          <cart-items :cart="cart" @clear-cart="cart = []"></cart-items>
          <promo-code></promo-code>
          <cart-recommender></cart-recommender>
        </div>
        <div class="cart-info-right">
          <pre-order-summary
            :order="order"
            :cart="cart"
            @clear-cart="cart = []"
            :subtotal="subtotal"
          ></pre-order-summary>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<style src="./Form.css"></style>
<style></style>
