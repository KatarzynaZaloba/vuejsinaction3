<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <section class="section-main">
        <div class="section-main div">
          <img alt="A dog and cat hugging on grass" class="section-main img"
            src="../../public/images/photo-1450778869180-41d0601e046e.jpg">
          <div class="absolute inset-0 bg-gradient-to-t from-parchment/80 to-transparent"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-28 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div><span
              class="inline-block text-xs font-semibold uppercase tracking-widest text-terracotta bg-terracotta/10 px-3 py-1.5 rounded-full mb-4 md:mb-6">Trusted
              by 50,000+ pet owners</span>
            <h1
              class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-bark leading-[1.05] mb-4 md:mb-6">
              Everything your<br><span class="italic text-terracotta">furry family</span><br>deserves.</h1>
            <p class="text-base sm:text-lg text-bark-light leading-relaxed max-w-md mb-6 md:mb-8">Curated nutrition,
              thoughtful toys, and vet-approved accessories — delivered to your door with love.</p>
            <div class="flex flex-wrap gap-3"><button
                class="bg-terracotta text-cream font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl active:bg-terracotta-dark transition-colors text-sm touch-manipulation">Shop
                Now</button><button
                class="border-2 border-bark text-bark font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-sand transition-colors text-sm touch-manipulation">Our
                Story</button></div>
            <div class="mt-8 md:mt-10 flex items-center gap-6 sm:gap-8">
              <div>
                <p class="font-display text-xl sm:text-2xl font-bold text-terracotta">50k+</p>
                <p class="text-xs text-bark-light font-medium">Happy Pets</p>
              </div>
              <div>
                <p class="font-display text-xl sm:text-2xl font-bold text-terracotta">4.9★</p>
                <p class="text-xs text-bark-light font-medium">Avg Rating</p>
              </div>
              <div>
                <p class="font-display text-xl sm:text-2xl font-bold text-terracotta">Free</p>
                <p class="text-xs text-bark-light font-medium">Returns</p>
              </div>
            </div>
          </div>
          <div class="relative hidden md:block">
            <div class="absolute inset-0 bg-amber/20 rounded-[40px] rotate-3"></div><img
              alt="A dog and cat hugging on grass"
              class="relative rounded-[32px] w-full aspect-square object-cover shadow-2xl"
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&amp;h=700&amp;fit=crop&amp;auto=format">
            <div
              class="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 border border-sand">
              <span class="text-2xl">🐾</span>
              <div>
                <p class="text-sm font-semibold text-bark">Free delivery</p>
                <p class="text-xs text-bark-light">On orders over $35</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-amber/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none">
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