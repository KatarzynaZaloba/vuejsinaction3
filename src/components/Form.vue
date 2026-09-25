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
                <input v-model.trim="order.address" class="form-control" placeholder="123 Maple Street, Apt 4" />
              </div>
            </div>
            <div class="form-group3">
              <div class="">
                <strong class="label">City:</strong>
              </div>
              <div class="">
                <input v-model.trim="order.city" class="form-control" placeholder="New York" />
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
                <input v-model.number="order.zip" class="form-control" type="number" placeholder="10001" />
              </div>
            </div>

            <div class="form-group6">
              <p class="delivery-options">Delivery options</p>
              <div class="types">
                <label class="home active">
                  <input class="sr-only" type="radio" id="home" v-bind:value="order.home" v-model="order.method">🏠 Home
                </label>
                <label class="business">
                  <input class="sr-only" type="radio" id="business" v-bind:value="order.business"
                    v-model="order.method">🏢
                  Business
                </label>
              </div>
              <label class="gift">
                <div class="checkbox">
                </div>
                <input class="sr-only" type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
                  v-bind:false-value="order.dontSendGift" v-model="order.gift">
                <label class="text" for="gift">🎁 Send as a gift?</label>
              </label>
            </div>
            <div class="form-group8">
              <p data-v-1b5a9218="" class="test-text">TEST</p>
              <div class="">
                <div class="place-order">
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
                </div>
                <button type="submit" class="btn btn-primary submit inactive" v-on:click="submitForm">Place order
                  →</button>
              </div>
            </div>
          </div>
        </div>


      </div>

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
          <p class="banner">Add <strong class="">$35.00</strong> more to qualify for free shipping.</p>
          <div class="total">
            <span class="title">Total</span>
            <span class="subtitle">$9.99</span>
          </div>
          <div class="order-details">
            <p class="title">Order details</p>
            <p class="order-detail"><span class="bolder">Name:</span> Anna Wanna</p>
            <p class="order-detail"><span class="bolder">Address:</span> test</p>
            <p class="order-detail"><span class="bolder">City:</span> test test</p>
            <p class="order-detail"><span class="bolder">State:</span> Alabama</p>
            <p class="order-detail"><span class="bolder">Type:</span> Home address</p>
            <p class="order-detail"><span class="bolder">Gift:</span> Yes 🎁</p>
          </div>
          <p class="info">🔒 Secure payment · Free returns within 30 days</p>
        </div>
      </div>

    </div>
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

.cart-page .cart-info .delivery-details input,
.cart-page .cart-info .delivery-details select {
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

.cart-page .cart-info .delivery-details .place-order {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  margin-bottom: 1.6rem;
}

.cart-page .cart-info .delivery-details .place-order pre {
  width: 100%;
  margin-bottom: 0;
  margin-top: calc(0.25rem * 2);
  color: #555;
  background-color: #faf6f0;
  border: 1px solid #e8d9c4;
  border-radius: 1.4rem;
  padding: 2rem 1.6rem;
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.4rem;
}

.cart-page .cart-info .delivery-details .submit {
  float: unset;
  margin-top: unset;
  width: 100%;
  background-color: #c1552a;
  color: #faf6f0;
  font-weight: 600;
  font-size: 1.4rem;
  font-family: 'Outfit', system-ui, sans-serif;
  border: unset;
  padding-block: calc(0.25rem * 6.4);
  padding-inline: 0;
  border-radius: 1.4rem;
}

.cart-page .cart-info .delivery-details .submit.inactive {
  opacity: 0.4;
}

.cart-page .cart-info .delivery-details .place-order {
  padding: 0;
}

.cart-page .cart-info .order-summary {
  background-color: #fff;
  border: 1px solid #e8d9c4;
  border-radius: 1.6rem;
  margin-top: 2.4rem;
}

.cart-page .cart-info .order-summary .header {
  padding-block: calc(0.25rem * 6.4);
  padding-inline: calc(0.25rem * 8);
  border-bottom: 1px solid #e8d9c4;
  margin: 0;
}

.cart-page .cart-info .order-summary .header .title {
  margin: 0;
  color: #3d2414;
  font-weight: 600;
  font-size: 1.8rem;
  font-family: 'Fraunces', Georgia, sans-serif;
}

.cart-page .cart-info .order-summary .body {
  padding: calc(0.25rem * 8);
}

.cart-page .cart-info .order-summary .body .items,
.cart-page .cart-info .order-summary .body .shipping,
.cart-page .cart-info .order-summary .body .total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  font-family: 'Outfit', system-ui, sans-serif;
}

.cart-page .cart-info .order-summary .body .items span.title,
.cart-page .cart-info .order-summary .body .shipping span.title {
  color: #6b4226;

}

.cart-page .cart-info .order-summary .body .items span.subtitle,
.cart-page .cart-info .order-summary .body .shipping span.subtitle {
  color: #3d2414;
  font-weight: 500;
}

.cart-page .cart-info .order-summary .body .banner {
  background-color: #f2ebe0;
  padding-block: calc(0.25rem * 3.2);
  padding-inline: calc(0.25rem * 4.8);
  border-radius: 0.5rem;
  margin-bottom: 1.2rem;
  color: #6b4226;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;
}

.cart-page .cart-info .order-summary .body .banner strong {
  color: #3d2414;
  font-weight: bolder;
}

.cart-page .cart-info .order-summary .body .total {
  border-top: 1px solid #e8d9c4;
  padding-top: 1.2rem;
  display: flex;
  justify-content: space-between;
}

.cart-page .cart-info .order-summary .body .total .title {
  color: #3d2414;
  font-size: 1.6rem;
  font-family: 'Outfit', system-ui, sans-serif;
  font-weight: 600;
}

.cart-page .cart-info .order-summary .body .info {
  color: #6b4226;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;

}

.cart-page .cart-info .order-summary .body .total .subtitle {
  color: #c1552a;
  font-weight: 700;
  font-size: 2rem;
  font-family: 'Fraunces', Georgia, sans-serif;
}

.cart-page .cart-info .order-summary .body .order-details {
  padding: calc(0.25rem * 4.8);
  color: #6b4226;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;
  background-color: #f2ebe0;
  border: 1px solid #e8d9c4;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
}

.cart-page .cart-info .order-summary .body .order-details .title {
  color: #3d2414;
  text-transform: uppercase;
  font-weight: 600;
}

.cart-page .cart-info .order-summary .body .order-details .order-detail:not(:last-child) {
  margin-bottom: 0.4rem;
}

.cart-page .cart-info .order-summary .body .order-details .order-detail:last-child {
  margin-bottom: 0;
}

.cart-page .cart-info .order-summary .body .order-details .bolder {
  font-weight: 500;
  color: #3d2414;
}

.form-group6 {
  padding-top: calc(0.25rem * 6.4);
  border-top: 1px solid #e8d9c4;
}

.form-group6 .delivery-options,
.form-group8 .test-text {
  color: #6b4226;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Outfit', system-ui, sans-serif;
  letter-spacing: 0.05em;
  margin-bottom: calc(0.25rem * 4.8);
}

.form-group6 .types {
  display: flex;
  gap: calc(0.25rem * 6);
  margin-bottom: 1.6rem;
}

.form-group6 .types .home,
.form-group6 .types .business {
  padding-block: calc(0.25rem * 4.8);
  padding-inline: calc(0.25rem * 6.4);
  margin-bottom: 0;
  font-weight: 500;
  border-radius: 1.4rem;
  font-size: 1.4rem;
  font-family: 'Outfit', system-ui, sans-serif;
  border: 2px solid #e8d9c4;
  color: #6b4226;
}

.form-group6 .types .home.active,
.form-group6 .types .business.active {
  background-color:
    color-mix(in oklab, #c1552a 5%, transparent);
  color: #3d2414;
  border: 2px solid #c1552a;
}

.form-group6 .gift {
  display: flex;
  flex-direction: row;
  gap: calc(0.25rem * 6);
  align-items: center;
}

.form-group6 .gift .checkbox {
  border: 2px solid #e8d9c4;
  border-radius: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(0.25rem * 8);
  height: calc(0.25rem * 8);
  margin: 0;
}

.form-group6 .gift .text {
  color: #6b4226;
  font-size: 1.4rem;
  font-family: 'Outfit', system-ui, sans-serif;
  font-weight: 400;
}

.cart-page .cart-info .delivery-details-body {
  padding: 2rem;
  padding-bottom: 0;
}
</style>
