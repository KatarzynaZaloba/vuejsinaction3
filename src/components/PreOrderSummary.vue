<script>
export default {
  name: "PreOrderSummary",
  props: {
    cart: {
      type: Array,
      required: true,
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
    <div class="pre-order-summary-body">
      <div class="pre-order-summary-item">
        <div class="pre-order-summary-item-image">
          <img
            alt="Premium Grain-Free Kibble"
            class="image"
            src="https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?w=300&amp;h=300&amp;fit=crop&amp;auto=format"
          />
        </div>
        <div class="pre-order-summary-item-details">
          <p class="name">Premium Grain-Free Kibble</p>
          <p class="quantity">× 1</p>
        </div>
        <p class="price">$42.99</p>
      </div>
      <div class="pre-order-summary-item">
        <div class="pre-order-summary-item-image">
          <img
            alt="Plush Elephant Toy"
            class="image"
            src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=300&amp;h=300&amp;fit=crop&amp;auto=format"
          />
        </div>
        <div class="pre-order-summary-item-details">
          <p class="name">Plush Elephant Toy</p>
          <p class="quantity">× 2</p>
        </div>
        <p class="price">$37.00</p>
      </div>
      <div class="pre-order-summary-item">
        <div class="pre-order-summary-item-image">
          <img
            alt="Adjustable Leather Collar"
            class="image"
            src="https://images.unsplash.com/photo-1589924749359-9697080c3577?w=300&amp;h=300&amp;fit=crop&amp;auto=format"
          />
        </div>
        <div class="pre-order-summary-item-details">
          <p class="name">Adjustable Leather Collar</p>
          <p class="quantity">× 1</p>
        </div>
        <p class="price">$34.00</p>
      </div>
    </div>
    <div class="pre-order-summary-footer">
      <div class="subtotal">
        <span class="label">Subtotal</span>
        <span class="value">$113.99</span>
      </div>
      <div class="shipping">
        <span class="label">Shipping</span>
        <span class="value">Free 🎉</span>
      </div>
      <div class="loyalty-discount">
        <span class="label">Loyalty discount (5%)</span>
        <span class="value">−$5.70</span>
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
