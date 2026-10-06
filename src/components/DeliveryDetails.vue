<template>
  <div class="delivery-details">
    <div>
      <div class="delivery-details-header">
        <h2 class="title">Delivery details</h2>
        <p class="subtitle">Tell us where to send your order</p>
      </div>

      <div class="delivery-details-body">
        <div class="form-group1">
          <div>
            <strong class="label">First name:</strong>
            <input v-model.trim="order.firstName" placeholder="Jane" class="form-control">
          </div>
          <div>
            <strong class="label">Last name:</strong>
            <input v-model.trim="order.lastName" placeholder="Smith" class="form-control">
          </div>
        </div>
        <div class="form-group2">
          <div>
            <strong class="label">Address:</strong>
          </div>
          <div>
            <input v-model.trim="order.address" class="form-control" placeholder="123 Maple Street, Apt 4">
          </div>
        </div>
        <div class="form-group3">
          <div>
            <strong class="label">City:</strong>
            <input v-model.trim="order.city" class="form-control" placeholder="New York">
          </div>
          <div>
            <strong class="label">Zip code:</strong>
            <input v-model.number="order.zip" class="form-control" type="number" placeholder="10001">
          </div>
        </div>
        <div class="form-group4">
          <div>
            <strong class="label">State:</strong>
            <select v-model="order.state" class="form-control">
              <option disabled value="">State</option>
              <option v-for="(state, key) in states" :key="key" :value="state">
                {{ key }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group6">
          <p class="delivery-options">Delivery options</p>
          <div class="types">
            <label class="home active">
              <input class="sr-only" type="radio" id="home" :value="order.home" v-model="order.method">🏠
              Home
            </label>
            <label class="business">
              <input class="sr-only" type="radio" id="business" :value="order.business"
                v-model="order.method">🏢
              Business
            </label>
          </div>
          <label class="gift">
            <div class="checkbox"></div>
            <input class="sr-only" type="checkbox" id="gift" value="true" :true-value="order.sendGift"
              :false-value="order.dontSendGift" v-model="order.gift">
            <label class="text" for="gift">🎁 Send as a gift?</label>
          </label>
        </div>
        <div class="form-group8">
          <p class="test-text">TEST</p>
          <div>
            <button type="submit" class="btn btn-primary submit inactive" @click="$emit('place-order')">
              Place order →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryDetails',
  props: {
    order: {
      type: Object,
      required: true
    },
    states: {
      type: Object,
      required: true
    }
  },
  emits: ['place-order']
}
</script>
