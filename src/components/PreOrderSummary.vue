<script>
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
          <img :alt="item.name" class="image" :src="item.image" />
        </div>
        <div class="pre-order-summary-item-details">
          <p class="name">{{ item.title }}</p>
          <p class="quantity">
            × {{ cart.filter((cartItem) => cartItem.id === item.id).length }}
          </p>
        </div>
        <p class="price">{{ item.price }}</p>
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
      <div class="loyalty-discount">
        <span class="label">Loyalty discount (5%)</span>
        <span class="value">−${{ (subtotal * 0.05).toFixed(2) }}</span>
      </div>
      <div class="total">
        <span class="label">Total</span>
        <span class="value">$108.29</span>
      </div>
      <button class="proceed-button">Proceed to delivery →</button>
      <div class="security-eco-returns">
        <span class="label">🔒 SSL secure</span>
        <span class="label">♻️ Eco packing</span>
        <span class="label">↩️ 30-day returns</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
