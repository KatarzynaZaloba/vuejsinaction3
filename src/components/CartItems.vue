<script>
export default {
  name: "CartItems",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearCart() {
      localStorage.removeItem("cart");
      this.$emit("clear-cart");
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
  data() {
    return {
      items: [],
    };
  },
};
</script>

<template>
  <div class="cart-status-wrapper">
    <div v-if="cart.length" class="cart-status">
      <div>
        <div class="items-header">
          <h2 class="title">
            Items <span class="amount">({{ cart.length }})</span>
          </h2>
          <button class="clear-all" @click="clearCart">Clear all</button>
        </div>
        <ul class="items-body">
          <li v-for="item in uniqueCart" :key="item.id" class="item">
            <div class="image-container">
              <img :alt="item.name" class="image" :src="item.image" />
            </div>
            <div class="item-details">
              <p class="category">{{ item.category }}</p>
              <p class="name">{{ item.title }}</p>
              <p class="price">{{ item.unitPrice }}</p>
              <div class="buttons">
                <div class="quantity-controls">
                  <button class="less">−</button>
                  <span class="quantity">{{
                    cart.filter((cartItem) => cartItem.id === item.id).length
                  }}</span>
                  <button class="more">+</button>
                </div>
                <button class="remove">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
            <div class="price-container">
              <p class="price">
                ${{
                  (
                    item.price *
                    cart.filter((cartItem) => cartItem.id === item.id).length
                  ).toFixed(2)
                }}
              </p>
              <p v-if="item.quantity > 1" class="quantity">
                {{ item.quantity }} × {{ item.unitPrice }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="cart-status">
      <div class="empty">
        <p class="icon">🛒</p>
        <p class="info">Your cart is empty.</p>
        <button class="go-back">Back to shop</button>
      </div>
    </div>
  </div>
</template>
