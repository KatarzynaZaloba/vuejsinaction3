<template>
  <div class="cart-steps">
    <div v-for="(label, index) in labels" :key="label" :class="'step-' + (index + 1)">
      <div
        class="step-indicator"
        :class="{ active: step === index + 1, done: step > index + 1 }"
      >
        <div class="circle">{{ step > index + 1 ? "✓" : index + 1 }}</div>
        <span>{{ label }}</span>
      </div>
      <div v-if="index < labels.length - 1" class="border"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartSteps',
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      labels: ['Cart', 'Delivery', 'Payment', 'Confirm']
    }
  }
}
</script>
