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
          <div class="">Delivery details</div>
          <div class="">
            <div class="form-group">
              <div class="">
                <h4><strong>Tell us where to send your order</strong></h4>
              </div>
            </div>
            <div class="form-group">
              <div class="">
                <strong>First name:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="">
                <strong>Last name:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class=""><strong>Address:</strong></div>
              <div class="">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class=""><strong>City:</strong></div>
              <div class="">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="">
                <strong>State:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value="">State</option>
                  <option v-for="(state, key) in states" v-bind:value="state">
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="">
                <strong>Zip code:</strong>
                <input v-model.number="order.zip" class="form-control" type="number" />
              </div>
            </div>
            <div class="form-group">
              <div class="">
                <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
                  v-bind:false-value="order.dontSendGift" v-model="order.gift">
                <label for="gift">Send as a gift?</label>
              </div>
            </div><!-- koniec form-group -->
            <div class="form-group">
              <div class="">
                <input type="radio" id="home" v-bind:value="order.home" v-model="order.method">
                <label for="home">Home</label>
                <input type="radio" id="business" v-bind:value="order.business" v-model="order.method">
                <label for="business">Business</label>
              </div>
            </div><!-- koniec form-group-->
            <div class="form-group">
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
</style>
