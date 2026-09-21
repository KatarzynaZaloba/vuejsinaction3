<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="">
      <div class=""><button class=""><svg class="" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>Back to shop</button>
        <h1 class="">Your <span class="">cart</span></h1>
        <p class="">Your cart is empty</p>
      </div>
    </div>
    <div class="">
      <div class="">
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

<style scoped></style>
