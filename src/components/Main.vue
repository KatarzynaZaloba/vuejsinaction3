<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <section class="section-main">
        <div class="section-main div">
          <img alt="A dog and cat hugging on grass" class="section-main img"
            src="../../public/images/photo-1450778869180-41d0601e046e.avif">
          <div class="section-main img-div"></div>
        </div>
        <div class="section-main div-content">
          <div>
            <span class="trusted-text">Trusted
              by 50,000+ pet owners</span>
            <h1 class="everything-text">
              Everything your<br><span class="furry-text">furry family</span><span
                class="deserves-text"><br>deserves.</span></h1>
            <p class="curated-text">Curated nutrition,
              thoughtful toys, and vet-approved accessories — delivered to your door with love.</p>
            <div class="buttons">
              <button class="shop">Shop
                Now</button>
              <button class="story">Our
                Story</button>
            </div>
            <div class="rating">
              <div>
                <p class="title">50k+</p>
                <p class="subtitle">Happy Pets</p>
              </div>
              <div>
                <p class="title">4.9★</p>
                <p class="subtitle">Avg Rating</p>
              </div>
              <div>
                <p class="title">Free</p>
                <p class="subtitle">Returns</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="">

            </div>
            <!-- <img alt="" class=""
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&amp;h=700&amp;fit=crop&amp;auto=format"> -->
            <div class="">
              <!-- <span class="">🐾</span>
              <div>
                <p class="">Free delivery</p>
                <p class="">On orders over $35</p>
              </div> -->
            </div>
          </div>
        </div>
        <div class="">
        </div>
      </section>
      <section class="section-table">
        <div class="div">
          <button class="dogs">
            <span class="">🐕</span>
            <p class="title">Dogs</p>
            <p class="subtitle">340+ products</p>
          </button>
          <button class="cats">
            <span class="">🐈</span>
            <p class="title">Cats</p>
            <p class="subtitle">210+ products</p>
          </button>
          <button class="small-pets">
            <span class="">🐹</span>
            <p class="title">Small Pets</p>
            <p class="subtitle">90+ products</p>
          </button>
          <button class="birds">
            <span class="">🐦</span>
            <p class="title">Birds</p>
            <p class="subtitle">60+ products</p>
          </button>
        </div>
      </section>
      <section class="section-products">
        <div class="text">
          <div>
            <h2 class="title">Shop our <span class="title-orange">favourites</span></h2>
            <p class="subtitle">Hand-picked by our team of pet lovers &amp; vets.</p>
          </div>
          <div class="categories">
            <button class="active">All</button>
            <button class="">Dog Food</button>
            <button class="">Cat Food</button>
            <button class="">Toys</button>
            <button class="">Accessories</button>
            <button class="">Health</button>
          </div>
        </div>
        <div v-for="product in sortedProducts">
          <div class="product">
            <div class="image-div">
              <figure class="figure">
                <img class="" v-bind:src="product?.image">
              </figure>

            </div>
            <span class="label bestseller" v-if="product.labels === 'bestseller'">Best Seller</span>
            <span class="label new" v-if="product.labels === 'new'">New</span>
            <span class="label sale" v-if="product.labels === 'sale'">Sale</span>
            <div class="description">
              <p class="category">{{ (product.category) }}</p>
              <router-link tag='h1' class="title" :to="{ name: 'Id', params: { id: product.id } }">{{
                product.title }}</router-link>
              <p class="product-description" v-html="product.description"></p>
              <div class="stars">
                <svg v-for="n in 5" :key="n" v-bind:class="['star', { filled: n <= Math.ceil(product.rating) }]"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <span class="rating-value">{{ (product.rating).toFixed(1) }}</span>
              </div>
              <p class="reviews">204 reviews</p>
              <div class="addToCart-div">
                <div class="price-div">
                  <p class="price">
                    ${{ (product.price).toFixed(2) }}
                  </p>
                  <span class="priceOld" v-if="product.priceOld">${{ (product.priceOld).toFixed(2) }}</span>
                </div>

                <button class="btn addToCart" v-on:click="addToCart(product)" v-if="canAddToCart(product)">Add
                  to
                  cart</button>
                <button disabled="true" class="btn addToCart" v-else>Add to cart</button>

              </div>
              <transition>
                <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id) === 0"
                  key="0">Out of
                  stock!</span>
                <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id) < 5">Only
                  {{ product.availableInventory - cartCount(product.id) }} left!</span>
                <span class="inventory-message" v-else>Buy now!</span>
              </transition>
            </div>
          </div>
        </div>
      </section>

      <section class="section-banner">
        <div class="background">
          <img alt="Dog and cat together" class="image" src="/images/photo-1509205477838-a534e43a849f.avif">
        </div>
        <div class="info">
          <p class="limited">Limited time offer</p>
          <h2 class="headline">20% off your first order
          </h2>
          <p class="description">Use code <span class="code">PAWSOME20</span> at checkout. New
            customers only.</p>
          <button class="claim-offer">Claim Offer</button>
        </div>
      </section>

      <footer class="footer">
        <div class="div">
          <span class="title">Pawsome</span>
          <p class="subtitle">© 2026 Pawsome Pet Supply. All rights reserved.</p>
          <div class="links">
            <a href="#" class="">Privacy</a>
            <a href="#" class="">Terms</a>
            <a href="#" class="">Contact</a>
          </div>
        </div>
      </footer>
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

.section-main.div {
  position: relative;
}

.section-main.img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  vertical-align: middle;
  opacity: 80%;
  object-fit: cover;
}

.section-main.img-div {
  position: absolute;
  background: linear-gradient(to bottom,
      #f2ebe0,
      transparent);
}

.section-main.div-content {
  padding-top: 40px;
  padding-left: 20px;
  background-color: #f2ebe0;
}

.section-main.div-content .trusted-text {
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c1552a;
  background-color: rgba(193, 85, 42, 0.1);
  padding: 5px 10px;
  border-radius: calc(infinity * 1px)
}

.section-main.div-content .everything-text {
  font-family: 'Fraunces', serif;
  font-size: 36px;
  font-weight: 600;
  color: #3d2414;
}

.section-main.div-content .furry-text {
  font-style: italic;
  color: #c1552a;
}

.section-main.div-content .curated-text {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  color: #6b4226;
  line-height: 1.625;
}

.section-main.div-content .rating {
  align-items: center;
  display: flex;
  gap: calc(0.25rem * 6);
  margin-top: calc(0.25rem * 8);
  width: 100%;
  background-color: #f2ebe0;
  float: unset;
  margin-left: 0;
  padding-bottom: 30px;
}

.section-main.div-content .title {
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 700;
  color: #c1552a;
  margin: unset;
}

.section-main.div-content .subtitle {
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #6b4226;
  margin: unset;
  line-height: calc(1 / 0.75);
}

.section-main .buttons {
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
  padding-top: 12px;
}

.section-main .shop,
.section-main .story {
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.section-main .shop {
  background-color: #c1552a;
  color: #faf6f0;
  border: unset;
}

.section-main .story {
  background-color: transparent;
  border: 2px solid #3d2414;
  color: #3d2414;
}

.section-table {
  background-color: #3d2414;
  padding: 20px;
}

.section-table .div {
  display: grid;
  margin-inline: auto;
  color: #3d2414;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.section-table button {
  background-color: #6b4226;
  text-align: left;
  padding: 10px 20px;
  border: unset;
  background-color: #6b4226;
  border-radius: 20px;
}

.section-table button span {
  font-size: 30px;
}

.section-table button .title {
  color: #faf6f0;
  font-family: 'Fraunces', serif;
  font-size: 16px;
  font-weight: 600;
  padding-top: 5px;
}

.section-table button .subtitle {
  color: #f0b868;
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  padding-bottom: 0;
}

.section-products {
  padding-inline: 20px;
  padding-block: 30px;
  background-color: #faf6f0;
}

.section-products .title {
  color: #3d2414;
  font-family: 'Fraunces', serif;
  font-size: 30px;
  font-weight: 600;
  margin-top: 10px;
}

.section-products .title-orange {
  color: #c1552a;
  font-style: italic;
}

.section-products .subtitle {
  color: #6b4226;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
}

.section-products .categories {
  overflow-x: auto;
  gap: 5px;
  scroll-snap-type: x proximity;
  display: flex;
  margin-inline: -10px;
  padding-top: 10px;
  padding-inline: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.section-products .categories::-webkit-scrollbar {
  display: none;
}

.section-products .categories button {
  flex: 0 0 auto;
  scroll-snap-align: start;
  white-space: nowrap;
  padding: 8px 16px;
}

.section-products .categories button.active {
  color: #faf6f0;
  background-color: #c1552a;
  border: unset;
}

.section-products .categories button {
  border-radius: 15px;
  border: unset;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  color: #6b4226;
  background-color: #e8d9c4;
  font-weight: 500;
}

.section-products .text {
  margin-bottom: 30px;
}

.section-products .product {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  display: grid;
  background-color: #fff;
  border: 1px solid #e8d9c4;
  border-radius: 15px;
}

.section-products .product .label {
  position: absolute;
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 15px;
}

.section-products .product .label.bestseller {
  background-color: #f0b868;
  color: #3d2414;
}

.section-products .product .label.new {
  background-color: #7a8c6e;
  color: #faf6f0;
}

.section-products .product .label.sale {
  background-color: #c1552a;
  color: #faf6f0;
}

.section-products .product .category {
  text-transform: uppercase;
  color: #6b4226;
  font-size: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 0;
}

.section-products .product .description {
  margin: 15px;
}

.section-products .product .description .product-description {
  color: #6b4226;
  line-height: 1.625;
  font-size: 14px;
  font-family: 'Outfit', sans-serif;
  margin-top: 5px;
}

.section-products .product .description .stars {
  display: flex;
  align-items: center;
  gap: 2px;
}

.section-products .product .description .star {
  width: 15px;
  height: 15px;
}

.section-products .product .description .star.filled {
  color: #d98c3a;
}

.section-products .product .description .stars .rating-value {
  color: #6b4226;
  font-weight: 500;
  font-size: 12px;
  font-family: 'Outfit', sans-serif;
  margin-left: 3px;
}

.section-products .product .description .reviews {
  color: #6b4226;
  font-size: 12px;
  font-family: 'Outfit', sans-serif;
}

.section-products .product .description .addToCart-div {
  display: flex;
  justify-content: space-between;
}

.section-products .product .description .price-div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}

.section-products .product .description .price {
  color: #c1552a;
  font-size: 20px;
  font-family: "Fraunces", Georgia, serif;
  font-weight: 700;
  margin: 0;
}

.section-products .product .description .priceOld {
  color: #6b4226;
  font-size: 14px;
  font-family: 'Outfit', sans-serif;
  text-decoration-line: line-through;
}

.section-products .product .description .btn.addToCart {
  color: #faf6f0;
  background-color: #c1552a;
  border: none;
  border-radius: 10px;
  padding-inline: 15px;
  padding-block: 8px;
  font-size: 14px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
}

.section-products .product .description .inventory-message {
  color: #6b4226;
  font-size: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: end;
}

.section-products .product .description .title {
  font-size: 16px;
  font-family: "Fraunces", Georgia, serif;
  font-weight: 600;
  color: #3d2414;
}

.section-products .product .image-div .figure {
  height: calc(0.4rem * 48);
  background-color: #f2ebe0;
  position: relative;
  border-radius: 15px 15px 0 0;
}

.section-products .product .image-div .figure img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 15px 15px 0 0;
}

.section-banner {
  background-color: #c1552a;
  border-radius: 20px;
  margin-bottom: 50px;
  margin-inline: 20px;
  position: relative;
}

.section-banner .background {
  position: absolute;
  inset: calc(0.25rem * 0);
}

.section-banner .background .image {
  mix-blend-mode: overlay;
  opacity: .2;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  display: block;
}

.section-banner .info {
  text-align: center;
  padding: 64px 32px;
  max-width: 80rem;
  position: relative;
}

.section-banner .info .limited {
  color: #f0b868;
  font-size: 14px;
  font-family: 'Outfit', system-ui, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-banner .info .headline {
  color: #faf6f0;
  font-size: 36px;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-style: italic;
}

.section-banner .info .description {
  color:
    color-mix(in oklab, #faf6f0 80%, transparent);
  font-size: 18px;
  font-family: 'Outfit', system-ui, sans-serif;
}


.footer {
  background-color: #3d2414;
  color: #f1ece6;
  padding: 20px 20px;
}

.footer .div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer .title {
  color: #faf6f0;
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  padding-bottom: 20px;
  padding-top: 10px;
}

.footer .subtitle {
  color: #faf6f0;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
}

.footer .links {
  display: flex;
  gap: 12px;
  justify-content: center;
  color: #faf6f0;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  padding-bottom: 10px;
}

.footer .links a {
  color: #faf6f0;
}

@supports (color: color-mix(in oklab, red, red)) {
  .section-main.div-content .trusted {
    background-color: color-mix(in oklab,
        #c1552a 10%,
        transparent);
  }
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