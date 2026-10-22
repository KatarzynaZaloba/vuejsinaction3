<script>
import { publicAsset } from "../utils/publicAsset";

export default {
  name: "PreOrderSummary",
  props: {
    cart: {
      type: Array,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
  },
  data() {
    let hasDiscount = false;
    try {
      hasDiscount =
        localStorage.getItem("discountRedeemed") !== "true" &&
        localStorage.getItem("discount") === "PAWSOME20";
    } catch {
      hasDiscount = false;
    }

    return {
      hasDiscount,
      discountInterval: null,
    };
  },
  mounted() {
    this.discountInterval = setInterval(() => {
      try {
        this.hasDiscount =
          localStorage.getItem("discountRedeemed") !== "true" &&
          localStorage.getItem("discount") === "PAWSOME20";
      } catch {
        this.hasDiscount = false;
      }
    }, 100);
  },
  beforeUnmount() {
    clearInterval(this.discountInterval);
  },
  methods: {
    publicAsset,
    nextStep() {
      const stepIndicators = document.querySelectorAll(".step-indicator");
      const backButton = document.querySelector(".header .go-back");

      stepIndicators.forEach((indicator, index) => {
        if (index === 1) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });

      stepIndicators.forEach((indicator, index) => {
        if (index === 0) {
          indicator.classList.add("done");
        }
      });

      const doneStep = document.querySelector(".step-indicator.done .circle");

      if (doneStep) {
        doneStep.innerHTML = "✓";
      }

      if (backButton) {
        backButton.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back`;
      }
    },
  },
  computed: {
    uniqueCart() {
      return this.cart.filter(
        (item, index, arr) =>
          arr.findIndex((cartItem) => cartItem.id === item.id) === index,
      );
    },
  },
};
</script>

<template>
  <div class="pre-order-summary">
    <div class="pre-order-summary-header">
      <h2 class="title">Order summary</h2>
      <p class="subtitle">{{ cart.length }} items</p>
    </div>
    <div v-if="cart.length" class="pre-order-summary-body">
      <div
        v-for="item in uniqueCart"
        :key="item.id"
        class="pre-order-summary-item"
      >
        <div class="pre-order-summary-item-image">
          <img :alt="item.name" class="image" :src="publicAsset(item.image)" />
        </div>
        <div class="pre-order-summary-item-details">
          <p class="name">{{ item.title }}</p>
          <p class="quantity">
            × {{ cart.filter((cartItem) => cartItem.id === item.id).length }}
          </p>
        </div>
        <p class="price">
          ${{
            (
              item.price *
              cart.filter((cartItem) => cartItem.id === item.id).length
            ).toFixed(2)
          }}
        </p>
      </div>
    </div>
    <div class="pre-order-summary-footer">
      <div class="subtotal">
        <span class="label">Subtotal</span>
        <span class="value" v-if="cart.length">${{ subtotal.toFixed(2) }}</span>
        <span class="value" v-else>$0.00</span>
      </div>
      <div class="shipping">
        <span class="label">Shipping</span>
        <span class="value" v-if="subtotal > 35">Free 🎉</span>
        <span class="value" v-else>$5.00</span>
      </div>
      <div class="progress-bar">
        <p class="">Add <strong class="">$10.01</strong> for free shipping</p>
        <div class="progress-container">
          <div class="progress"></div>
        </div>
      </div>
      <div class="loyalty-discount">
        <template v-if="hasDiscount">
          <span class="label">PAWSOME20 code (20%)</span>
          <span class="value">−${{ (subtotal * 0.2).toFixed(2) }}</span>
        </template>
        <template v-else>
          <span class="label">Loyalty discount (5%)</span>
          <span class="value">−${{ (subtotal * 0.05).toFixed(2) }}</span>
        </template>
      </div>
      <div class="total">
        <span class="label">Total</span>
        <span class="value"
          >${{
            (
              subtotal +
              (subtotal > 35 ? 0 : 5) -
              (hasDiscount ? subtotal * 0.2 : subtotal * 0.05)
            ).toFixed(2)
          }}</span
        >
      </div>
      <button class="proceed-button" @click="nextStep">
        Proceed to delivery →
      </button>
      <div class="security-eco-returns">
        <span class="label">🔒 SSL secure</span>
        <span class="label">♻️ Eco packing</span>
        <span class="label">↩️ 30-day returns</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
