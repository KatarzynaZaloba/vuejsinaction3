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

const checkoutStepStorageKey = "checkoutStep";

export default {
  name: "Form",
  props: ["cartItemCount"],
  data() {
    let cart = [];
    let step = 1;

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

    try {
      step = Number(localStorage.getItem(checkoutStepStorageKey)) === 2 ? 2 : 1;
    } catch (error) {
      console.error("Error loading checkout step from localStorage:", error);
    }

    return {
      cart,
      states: {
        Alabama: "Alabama",
        Alaska: "Alaska",
        Arizona: "Arizona",
        Arkansas: "Arkansas",
        California: "California",
        Colorado: "Colorado",
        Connecticut: "Connecticut",
        Delaware: "Delaware",
        Florida: "Florida",
        Georgia: "Georgia",
        Hawaii: "Hawaii",
        Idaho: "Idaho",
        Illinois: "Illinois",
        Indiana: "Indiana",
        Iowa: "Iowa",
        Kansas: "Kansas",
        Kentucky: "Kentucky",
        Louisiana: "Louisiana",
        Maine: "Maine",
        Maryland: "Maryland",
        Massachusetts: "Massachusetts",
        Michigan: "Michigan",
        Minnesota: "Minnesota",
        Mississippi: "Mississippi",
        Missouri: "Missouri",
        Montana: "Montana",
        Nebraska: "Nebraska",
        Nevada: "Nevada",
        NewHampshire: "New Hampshire",
        NewJersey: "New Jersey",
        NewMexico: "New Mexico",
        NewYork: "New York",
        NorthCarolina: "North Carolina",
        NorthDakota: "North Dakota",
        Ohio: "Ohio",
        Oklahoma: "Oklahoma",
        Oregon: "Oregon",
        Pennsylvania: "Pennsylvania",
        RhodeIsland: "Rhode Island",
        SouthCarolina: "South Carolina",
        SouthDakota: "South Dakota",
        Tennessee: "Tennessee",
        Texas: "Texas",
        Utah: "Utah",
        Vermont: "Vermont",
        Virginia: "Virginia",
        Washington: "Washington",
        WestVirginia: "West Virginia",
        Wisconsin: "Wisconsin",
        Wyoming: "Wyoming",
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
      step,
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
      if (this.step === 1) {
        this.$router.push({ name: "Main" });
        return;
      }
      this.step -= 1;
      this.saveStep();
    },
    nextStep() {
      if (this.step === 1) {
        this.step = 2;
        this.saveStep();
      }
    },
    saveStep() {
      try {
        localStorage.setItem(checkoutStepStorageKey, String(this.step));
      } catch (error) {
        console.error("Error saving checkout step to localStorage:", error);
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
            {{ step === 1 ? "Back to shop" : "Back" }}
          </button>
          <h1 class="title">Your <span class="highlight">cart</span></h1>
          <p class="subtitle" v-if="!cart.length">Your cart is empty</p>
        </div>
      </div>

      <cart-steps :step="step"></cart-steps>

      <div class="cart-info">
        <div class="cart-info-left">
          <delivery-details
            v-if="step === 2"
            :order="order"
            :states="states"
            @place-order="submitForm"
          ></delivery-details>
          <template v-else>
            <cart-items :cart="cart" @clear-cart="cart = []"></cart-items>
            <promo-code></promo-code>
            <cart-recommender></cart-recommender>
          </template>
        </div>
        <div class="cart-info-right">
          <pre-order-summary
            :order="order"
            :cart="cart"
            @clear-cart="cart = []"
            :subtotal="subtotal"
            @next-step="nextStep"
            :step="step"
          ></pre-order-summary>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<style src="./Form.css"></style>
<style></style>
