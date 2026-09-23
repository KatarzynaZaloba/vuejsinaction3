<template>
  <div class="cart-page">
    <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="container">
      <div class="header">
        <button class="go-back">
          <svg class="" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>Back to shop</button>
        <h1 class="title">Your <span class="highlight">cart</span></h1>
        <p class="subtitle">Your cart is empty</p>
      </div>
    </div>
    <div class="cart-info">
      <div class="cart-status">
        <p class="icon">🛒</p>
        <p class="info">Your cart is empty.</p>
        <button class="go-back">Back to shop</button>
      </div>
      <div class="delivery-details">
        <div class="">
          <div class="delivery-details-header">
            <h2 class="title">Delivery details</h2>
            <p class="subtitle">Tell us where to send your order</p>
          </div>

          <div class="delivery-details-body">
            <div class="form-group1">
              <div class="">
                <strong class="label">First name:</strong>
                <input v-model.trim="order.firstName" placeholder="Jane" class="form-control" />
              </div>
              <div class="">
                <strong class="label">Last name:</strong>
                <input v-model.trim="order.lastName" placeholder="Smith" class="form-control" />
              </div>
            </div>
            <div class="form-group2">
              <div class="">
                <strong class="label">Address:</strong>
              </div>
              <div class="">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group3">
              <div class="">
                <strong class="label">City:</strong>
              </div>
              <div class="">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group4">
              <div class="">
                <strong class="label">State:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value="">State</option>
                  <option v-for="(state, key) in states" v-bind:value="state">
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group5">
              <div class="">
                <strong class="label">Zip code:</strong>
                <input v-model.number="order.zip" class="form-control" type="number" />
              </div>
            </div>

            <div class="form-group6">
              <p class="delivery-options">Delivery options</p>
              <div class="">
                <label class="">
                  <input class="" type="radio" value="home" checked="" name="addressType">🏠 Home
                </label>
                <label class="">
                  <input class="" type="radio" value="business" name="addressType">🏢 Business
                </label>
              </div><label class="">
                <div class="">
                </div>
                <input class="" type="checkbox">
                <span class="">🎁 Send as a gift?</span>
              </label>
            </div>
            <div class="">
              <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
                v-bind:false-value="order.dontSendGift" v-model="order.gift">
              <label class="label" for="gift">Send as a gift?</label>
            </div>
            <div class="form-group7">
              <div class="">
                <input type="radio" id="home" v-bind:value="order.home" v-model="order.method">
                <label class="label" for="home">Home</label>
                <input type="radio" id="business" v-bind:value="order.business" v-model="order.method">
                <label class="label" for="business">Business</label>
              </div>
            </div><!-- koniec form-group-->
            <div class="form-group8">
              <div class="">
                <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">Place order</button>
              </div><!-- koniec col-md-6-->
            </div><!-- koniec form-group-->
            <div class="">
              <pre>
                         First name: {{ order.firstName }}
                     Last name: {{ order.lastName }}
                        Address: {{ order.address }}
                  City: {{ order.city }}
                 Zip code: {{ order.zip }}
                  State: {{ order.state }}
                       Method: {{ order.method }}
                      Gift: {{ order.gift }}
              </pre>
            </div><!-- koniec col-md-12 verify-->
          </div><!-- koniec panel-body-->
        </div><!-- koniec panel panel-info-->


      </div><!-- koniec col-md-10 col-md-offset-1-->
    </div><!-- koniec row-->
  </div>
</template>

<script>
import MyHeader from './Header.vue';
export default {
  name: 'Form',
  props: ['cartItemCount'],
  data() {
    return {
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
        method: 'Adres domowy',
        business: 'Adres firmowy',
        home: 'Adres domowy',
        gift: 'Wyślij jako prezent',
        sendGift: 'Wyślij jako prezent',
        dontSendGift: 'Nie wysyłaj jako prezentu'
      },
      madeOrder: false

    }
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      this.madeOrder = true;
    }
  }
}
</script>

<style scoped>
.cart-page .container {
  background-color: #f2ebe0;
  padding: 3.2rem 2.4rem;
  width: 100%;
  border-bottom: 1px solid #e8d9c4;
}

.cart-page .container .go-back {
  transition-timing-function: var(--tw-ease, cubic-bezier(.4, 0, .2, 1));
  transition-duration: 0.15s;
  color: #6b4226;
  font-size: 1.4rem;
  line-height: calc(1.25 / .875);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  background-color: transparent;
  border: unset;
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.4rem;
  padding: 0;

  &:hover {
    color: #c1552a;
  }
}

.cart-page .container .go-back svg {
  width: calc(0.25rem * 6);
  height: calc(0.25rem * 6);
}

.cart-page .container .title {
  font-size: 3.6rem;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  color: #3d2414;
  margin-bottom: 0;
}

.cart-page .container .title .highlight {
  font-style: italic;
  color: #c1552a;
}

.cart-page .container .subtitle {
  color: #6b4226;
  font-size: 1.4rem;
  margin-top: calc(0.25rem * 1);
  font-family: 'Outfit', system-ui, sans-serif;
}

.cart-page .cart-info {
  background-color: #faf6f0;
  padding: 3.2rem 2.4rem;
}

.cart-page .cart-info .cart-status {
  margin: 0 0 2.4rem;
  padding: calc(0.25rem * 16);
  text-align: center;
  background-color: #fff;
  border: 1px solid #e8d9c4;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.cart-page .cart-info .cart-status .icon {
  font-size: 3.6rem;
  margin-bottom: calc(0.25rem * 4.8);
}

.cart-page .cart-info .cart-status .info {
  color: #6b4226;
  font-size: 1.6rem;
  font-family: 'Outfit', system-ui, sans-serif;
}

.cart-page .cart-info .cart-status .go-back {
  transition-timing-function: var(--tw-ease, cubic-bezier(.4, 0, .2, 1));
  transition-duration: 0.15s;
  color: #c1552a;
  font-size: 1.4rem;
  line-height: calc(1.25 / .875);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);
  background-color: transparent;
  border: unset;
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
}

.cart-page .cart-info .delivery-details {
  background-color: #fff;
  border: 1px solid #e8d9c4;
  border-radius: 1.6rem;
}

.cart-page .cart-info .delivery-details-header {
  border-bottom: 1px solid #e8d9c4;
  padding: 1.6rem 2rem;
}

.cart-page .cart-info .delivery-details-header .title {
  color: #3d2414;
  font-size: 1.8rem;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  margin: 0;
}

.cart-page .cart-info .delivery-details-header .subtitle {
  color: #6b4226;
  font-size: 1.2rem;
  margin-top: calc(0.25rem * 2);
  margin-bottom: 0;
  font-family: 'Outfit', system-ui, sans-serif;
}

.cart-page .cart-info .delivery-details .label {
  color: #6b4226;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;
  letter-spacing: 0.05em;
  margin-bottom: calc(0.25rem * 2);
  padding: 0;
}

.cart-page .cart-info .delivery-details input {
  margin-top: calc(0.25rem * 2);
  color: #3d2414;
  background-color: #faf6f0;
  border: 1px solid #e8d9c4;
  border-radius: 1.4rem;
  padding: 2rem 1.6rem;
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.4rem;
}

.cart-page .cart-info .delivery-details .delivery-details-body .form-group1 {
  display: flex;
  flex-direction: column;
  gap: calc(0.25rem * 6);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.cart-page .cart-info .delivery-details .delivery-details-body .form-group1>div {
  width: 100%;
}

.cart-page .cart-info .delivery-details .delivery-details-body .form-group2,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group3,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group4,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group5,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group6,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group7,
.cart-page .cart-info .delivery-details .delivery-details-body .form-group8 {
  width: 100%;
  margin-bottom: 1.6rem;
}

.form-group6 {
  padding-top: calc(0.25rem * 6.4);
  border-top: 1px solid #e8d9c4;
}

.form-group6 .delivery-options {
  color: #6b4226;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;
  letter-spacing: 0.05em;
  margin-bottom: calc(0.25rem * 4.8);
}

.cart-page .cart-info .delivery-details-body {
  padding: 2rem;
}
</style>
