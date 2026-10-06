<script>
import MyHeader from './Header.vue';
import CartSteps from './CartSteps.vue';
import CartItems from './CartItems.vue';
import PromoCode from './PromoCode.vue';
import DeliveryDetails from './DeliveryDetails.vue';
import OrderSummary from './OrderSummary.vue';
import StoreFooter from './StoreFooter.vue';
export default {
  name: 'Form',
  props: ['cartItemCount'],
  data() {
    let cart = [];

    try {
      const savedCart = localStorage.getItem('cart');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      cart = Array.isArray(parsedCart) ? parsedCart : [];
    } catch {
      cart = [];
    }

    return {
      cart,
      states: {
        DL: 'Dolnośląskie',
        KP: 'Kujawsko-pomorskie',
        LB: 'Lubelskie',
        LU: 'Lubuskie'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home address',
        business: 'Business address',
        home: 'Home address',
        gift: 'Send as a gift',
        sendGift: 'Send as a gift',
        dontSendGift: 'Do not send as a gift'
      },
      madeOrder: false

    }
  },
  computed: {
    subtotal() {
      return this.cart.reduce((sum, product) => sum + Number(product.price || 0), 0);
    }
  },
  components: { MyHeader, CartSteps, CartItems, PromoCode, DeliveryDetails, OrderSummary, StoreFooter },
  methods: {
    submitForm() {
      this.madeOrder = true;
    }
  }
}
</script>

<template>
  <div class="checkout-page">
    <div class="cart-page">
      <my-header :cartItemCount="cartItemCount"></my-header>
      <div class="container">
        <div class="header">
          <button class="go-back">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to shop
          </button>
          <h1 class="title">Your <span class="highlight">cart</span></h1>
          <p class="subtitle" v-if="!cart.length">Your cart is empty</p>
        </div>
      </div>

      <cart-steps></cart-steps>

      <div class="cart-info">
        <cart-items :cart="cart"></cart-items>
        <promo-code></promo-code>
        <delivery-details :order="order" :states="states" @place-order="submitForm"></delivery-details>
        <order-summary :order="order" @place-order="submitForm"></order-summary>
      </div>
    </div>
    <store-footer></store-footer>
  </div>
</template>

<style src="./Form.css"></style>
