<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <section class="section-main">
        <div class="section-main div">
          <img alt="A dog and cat hugging on grass" class="section-main img"
            src="../../public/images/photo-1450778869180-41d0601e046e.avif">
          <div class=""></div>
        </div>
        <div class="">
          <div><span class="">Trusted
              by 50,000+ pet owners</span>
            <h1 class="">
              Everything your<br><span class="">furry family</span><br>deserves.</h1>
            <p class="">Curated nutrition,
              thoughtful toys, and vet-approved accessories — delivered to your door with love.</p>
            <div class=""><button class="">Shop
                Now</button><button class="">Our
                Story</button></div>
            <div class="">
              <div>
                <p class="">50k+</p>
                <p class="">Happy Pets</p>
              </div>
              <div>
                <p class="">4.9★</p>
                <p class="">Avg Rating</p>
              </div>
              <div>
                <p class="">Free</p>
                <p class="">Returns</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class=""></div><img alt="" class=""
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&amp;h=700&amp;fit=crop&amp;auto=format">
            <div class="">
              <span class="">🐾</span>
              <div>
                <p class="">Free delivery</p>
                <p class="">On orders over $35</p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
        </div>
      </section>
      <div v-for="product in sortedProducts">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" v-bind:src="product.image">
            </figure>
          </div>
          <div class="col-md-6 col-md-offse-0 description">
            <router-link tag='h1' :to="{ name: 'Id', params: { id: product.id } }">{{
              product.title }}</router-link>
            <p v-html="product.description"></p>
            <p class="price">
              {{ formatPrice(product.price) }}
            </p>
            <button class="btn btn-primary btn-lg" v-on:click="addToCart(product)" v-if="canAddToCart(product)">Dodaj do
              koszyka</button>
            <button disabled="true" class="btn btn-primary btn-lg" v-else>Dodaj do koszyka</button>
            <transition>
              <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id) === 0"
                key="0">Brak
                towaru!</span>
              <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id) < 5">Zostało
                tylko {{ product.availableInventory - cartCount(product.id) }}!</span>
              <span class="inventory-message" v-else>Kupuj teraz!</span>
            </transition>

            <div class="rating">
              <span v-bind:class="{ 'rating-active': checkRating(n, product) }" v-for="n in 5">☆</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { computed, onUnmounted, ref } from 'vue';
import { useStore } from 'vuex';
import { productsRef } from '../firebase';

export default {
  name: 'imain',
  firebase: {
    products: productsRef
  },
  components: { MyHeader },
  setup() {
    const store = useStore();
    const cart = ref([]);
    const productsVersion = ref(0);

    const unsubscribe = store.subscribe((mutation) => {
      if (mutation.type === 'SET_STORE') {
        productsVersion.value++;
      }
    });

    onUnmounted(() => {
      unsubscribe();
    });

    const mapGetters = computed(() => {
      return {
        products: store.getters.products,
        session: store.getters.session
      };
    });

    const mapState = computed(() => {
      return {
        products: store.state.products
      };
    });

    const mapMutations = computed(() => {
      return {
        setStore: store.commit('SET_STORE')
      };
    });

    const mapActions = computed(() => {
      return {
        fetchProducts: store.dispatch('fetchProducts')
      };
    });

    const cartItemCount = computed(() => cart.value.length || '');

    const sortedProducts = computed(() => {
      // Keep this dependency so Vue recomputes after Vuex SET_STORE mutations.
      productsVersion.value;
      const productsArray = (store.state.products || []).slice(0);
      function compare(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase())
          return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase())
          return 1;
        return 0;
      }
      return productsArray.sort(compare);
    });

    const formatPrice = (price) => {
      if (!parseInt(price)) {
        return '';
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split('').reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    };

    const checkRating = (n, myProduct) => myProduct.rating - n >= 0;

    const addToCart = (aProduct) => {
      cart.value.push(aProduct.id);
    };

    const cartCount = (id) => {
      let count = 0;
      for (var i = 0; i < cart.value.length; i++) {
        if (cart.value[i] === id) {
          count++;
        }
      }
      return count;
    };

    const canAddToCart = (aProduct) => {
      return aProduct.availableInventory > cartCount(aProduct.id);
    };

    return {
      cartItemCount,
      sortedProducts,
      mapGetters,
      mapState,
      mapMutations,
      mapActions,
      formatPrice,
      checkRating,
      addToCart,
      canAddToCart,
      cartCount
    };
  }
};
</script>

<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {

  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>