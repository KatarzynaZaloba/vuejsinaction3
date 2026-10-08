<template>
  <div class="order-summary">
    <div class="header">
      <h2 class="title">Order summary</h2>
    </div>
    <div class="body">
      <div class="items">
        <span class="title">Items (0)</span>
        <span class="subtitle">$0.00</span>
      </div>
      <div class="shipping">
        <span class="title">Shipping</span>
        <span class="subtitle">$9.99</span>
      </div>
      <p class="banner">Add <strong>$35.00</strong> more to qualify for free shipping.</p>
      <div class="total">
        <span class="title">Total</span>
        <span class="subtitle">$9.99</span>
      </div>
      <div class="order-details">
        <p class="title">Order details</p>
        <p class="order-detail"><span class="bolder">Name:</span> {{ order.firstName }} {{ order.lastName }}</p>
        <p class="order-detail"><span class="bolder">Address:</span> {{ order.address }}</p>
        <p class="order-detail"><span class="bolder">City:</span> {{ order.address }}</p>
        <p class="order-detail"><span class="bolder">State:</span> {{ order.city }}</p>
        <p class="order-detail"><span class="bolder">Zip code:</span> {{ order.zip }}</p>
        <p class="order-detail"><span class="bolder">Type:</span> {{ order.method }}</p>
        <p class="order-detail"><span class="bolder">Gift:</span> {{ order.gift }}</p>
      </div>
      <div class="second">
        <button type="submit inactive" class="btn btn-primary submit inactive" @click="$emit('place-order')">
          Place order →
        </button>
      </div>
      <p class="info">🔒 Secure payment · Free returns within 30 days</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  emits: ['place-order']
}
</script>
