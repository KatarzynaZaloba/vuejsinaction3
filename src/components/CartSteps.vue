<template>
  <div class="cart-steps">
    <div class="step-1">
      <div class="step-indicator active">
        <div class="circle">1</div>
        <span>Cart</span>
      </div>
      <div class="border"></div>
    </div>
    <div class="step-2">
      <div class="step-indicator">
        <div class="circle">2</div>
        <span>Delivery</span>
      </div>
      <div class="border"></div>
    </div>
    <div class="step-3">
      <div class="step-indicator">
        <div class="circle">3</div>
        <span>Payment</span>
      </div>
      <div class="border"></div>
    </div>
    <div class="step-4">
      <div class="step-indicator">
        <div class="circle">4</div>
        <span>Confirm</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartSteps'
}
</script>
