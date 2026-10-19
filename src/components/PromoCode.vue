<template>
  <div class="promo-code-container">
    <h3 class="title">🏷️ Promo code</h3>
    <div v-if="!applied" class="promo-code-input">
      <input
        v-model="code"
        placeholder="Enter code (try PAWSOME20)"
        @keyup.enter="apply"
      />
      <button class="apply-button" @click="apply">Apply</button>
    </div>
    <div v-else class="promo-code-applied">
      <span>✓</span> Code <strong>PAWSOME20</strong> applied — 20% off your
      first order!
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoCode",
  data() {
    return {
      code: "",
      applied: localStorage.getItem("discount") === "PAWSOME20",
    };
  },
  methods: {
    apply() {
      const code = this.code.trim().toUpperCase();
      if (code !== "PAWSOME20") return;
      if (!localStorage.getItem("discount")) {
        localStorage.setItem("discount", code);
      }
      this.applied = true;
    },
  },
};
</script>
