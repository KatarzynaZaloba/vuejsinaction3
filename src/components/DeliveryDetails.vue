<script>
export default {
  name: "DeliveryDetails",
  props: {
    order: {
      type: Object,
      required: true,
    },
    states: {
      type: Object,
      required: true,
    },
  },
  emits: ["place-order"],
  methods: {
    deliveryOption(event) {
      const selectedOption = event.target.value;
      this.order.method = selectedOption;

      if (!event.target.closest("label").classList.contains("active")) {
        const labels = document.querySelectorAll(".types label");
        labels.forEach((label) => label.classList.remove("active"));
        event.target.closest("label").classList.add("active");
      }
    },
  },
};
</script>

<template>
  <div class="delivery-details">
    <div>
      <div class="delivery-details-header">
        <h2 class="title">Delivery information</h2>
        <p class="subtitle">All fields marked * are required</p>
      </div>

      <div class="delivery-details-body">
        <div class="form-group1">
          <div>
            <label class="label" for="delivery-first-name"
              >First name<span class="">*</span></label
            >
            <input
              id="delivery-first-name"
              v-model.trim="order.firstName"
              placeholder="Jane"
              class="form-control"
            />
          </div>
          <div>
            <label class="label" for="delivery-last-name"
              >Last name<span class="">*</span></label
            >
            <input
              id="delivery-last-name"
              v-model.trim="order.lastName"
              placeholder="Smith"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group2">
          <div>
            <label class="label" for="delivery-email">
              Email address<span>*</span>
            </label>
            <input
              id="delivery-email"
              required=""
              class="form-control"
              placeholder="jane@example.com"
              type="email"
              v-model.trim="order.email"
            />
          </div>
          <div>
            <label class="label" for="delivery-address"
              >Street Address<span class="">*</span></label
            >
          </div>
          <div>
            <input
              id="delivery-address"
              v-model.trim="order.address"
              class="form-control"
              placeholder="123 Maple Street, Apt 4"
            />
          </div>
        </div>
        <div class="form-group3">
          <div>
            <label class="label" for="delivery-city"
              >City<span class="">*</span></label
            >
            <input
              id="delivery-city"
              v-model.trim="order.city"
              class="form-control"
              placeholder="New York"
            />
          </div>
          <div>
            <label class="label" for="delivery-zip"
              >Zip code<span class="">*</span></label
            >
            <input
              id="delivery-zip"
              v-model.number="order.zip"
              class="form-control"
              type="number"
              placeholder="10001"
            />
          </div>
        </div>
        <div class="form-group4">
          <div>
            <label class="label" for="delivery-state"
              >State<span class="">*</span></label
            >
            <select
              id="delivery-state"
              v-model="order.state"
              class="form-control"
            >
              <option disabled value="">Select state...</option>
              <option v-for="(state, key) in states" :key="key" :value="state">
                {{ state }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group6">
          <p class="delivery-options">Address type</p>
          <div class="types">
            <label class="home active" for="home">
              <input
                class="sr-only"
                type="radio"
                id="home"
                @change="deliveryOption"
                :value="'home'"
                v-model="order.method"
              />🏠 Home
            </label>
            <label class="business" for="business">
              <input
                class="sr-only"
                type="radio"
                id="business"
                @change="deliveryOption"
                :value="'business'"
                v-model="order.method"
              />🏢 Business
            </label>
          </div>
          <label class="gift" for="gift">
            <div class="checkbox"></div>
            <input
              class="sr-only"
              type="checkbox"
              id="gift"
              value="true"
              :true-value="order.sendGift"
              :false-value="order.dontSendGift"
              v-model="order.gift"
            />
            <label class="text" for="gift">🎁 Send as a gift</label>
          </label>
        </div>
        <div class="form-group8">
          <!-- <p class="test-text">TEST</p> -->
          <div>
            <!-- <button type="submit" class="btn btn-primary submit inactive" @click="$emit('place-order')">
              Place order →
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
