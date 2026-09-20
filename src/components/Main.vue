<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <section class="section-main mobile">
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
      <section class="section-main desktop">
        <div class="div-desktop">
          <div class="div-content-desktop">
            <span class="trusted-text-desktop">Trusted by 50,000+ pet owners</span>
            <h1 class="everything-text-desktop">Everything your<br>
              <span class="furry-text-desktop">furry family</span><br>deserves.
            </h1>
            <p class="curated-text-desktop">Curated nutrition, thoughtful toys, and vet-approved accessories — delivered
              to your door with
              love.</p>
            <div class="buttons-desktop">
              <button class="shop-desktop">Shop Now</button>
              <button class="story-desktop">Our Story</button>
            </div>
            <div class="rating-desktop">
              <div>
                <p class="title-desktop">50k+</p>
                <p class="subtitle-desktop">Happy Pets</p>
              </div>
              <div>
                <p class="title-desktop">4.9★</p>
                <p class="subtitle-desktop">Avg Rating</p>
              </div>
              <div>
                <p class="title-desktop">Free</p>
                <p class="subtitle-desktop">Returns</p>
              </div>
            </div>
          </div>
          <div class="image-container">
            <div class="image-overlay"></div>
            <img alt="A dog and cat hugging on grass" class="image"
              src="../../public/images/photo-1450778869180-41d0601e046e.avif">
            <div class="free-delivery">
              <span class="icon">🐾</span>
              <div>
                <p class="title">Free delivery</p>
                <p class="subtitle">On orders over $35</p>
              </div>
            </div>
          </div>
        </div>
        <div class="circle">
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
            <button :class="{ active: selectedCategory === 'All' }" v-on:click="selectCategory('All')">All</button>
            <button :class="{ active: selectedCategory === 'dog food' }" v-on:click="selectCategory('dog food')">Dog
              Food</button>
            <button :class="{ active: selectedCategory === 'cat food' }" v-on:click="selectCategory('cat food')">Cat
              Food</button>
            <button :class="{ active: selectedCategory === 'toys' }" v-on:click="selectCategory('toys')">Toys</button>
            <button :class="{ active: selectedCategory === 'accessories' }"
              v-on:click="selectCategory('accessories')">Accessories</button>
            <button :class="{ active: selectedCategory === 'health' }"
              v-on:click="selectCategory('health')">Health</button>
            <button :class="{ active: selectedCategory === 'sale' }" v-on:click="selectCategory('sale')">Sale</button>
          </div>
        </div>
        <div v-if="!productsLoaded" class="products-spinner" role="status" aria-label="Loading products"></div>
        <p v-else-if="sortedProducts.length === 0" class="no-products-message" role="status">
          No products found in the {{ selectedCategory }} category.
        </p>
        <div v-else v-for="product in sortedProducts" :key="product.id">
          <div class="product">
            <div class="image-div">
              <figure class="figure">
                <img class="" v-bind:src="publicAsset(product?.image)">
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

                <button class="btn addToCart added" v-if="isAdded(product.id)">Added</button>
                <button class="btn addToCart" v-on:click="addToCart(product)" v-else-if="canAddToCart(product)">Add to
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
          <img alt="Dog and cat together" class="image"
            :src="publicAsset('/images/photo-1509205477838-a534e43a849f.avif')">
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

      <section class="section-motto">
        <div class="div">
          <span class="">🚚</span>
          <h3 class="title">Free Shipping</h3>
          <p class="subtitle">On all orders over $35. Express delivery available at
            checkout.</p>
        </div>
        <div class="div">
          <span class="">🔬</span>
          <h3 class="title">Vet Approved</h3>
          <p class="subtitle">Every product is reviewed and approved by our in-house
            veterinary team.</p>
        </div>
        <div class="div"><span class="">♻️</span>
          <h3 class="title">Eco Packaging</h3>
          <p class="subtitle">We use 100% compostable or recycled packaging on every
            shipment.</p>
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
import { publicAsset } from '../utils/publicAsset';

export default {
  name: 'imain',
  firebase: {
    products: productsRef
  },
  components: { MyHeader },
  setup() {
    const store = useStore();
    const cart = ref([]);
    const addedProducts = ref([]);
    const productsVersion = ref(0);
    const selectedCategory = ref('All');

    const productsLoaded = computed(() => Array.isArray(store.state.products) && store.state.products.length > 0);

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
      const filtered = selectedCategory.value === 'All'
        ? productsArray
        : productsArray.filter((product) => product.category === selectedCategory.value);
      return filtered.sort(compare);
    });

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

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
      addedProducts.value.push(aProduct.id);
      setTimeout(() => {
        addedProducts.value = addedProducts.value.filter((id) => id !== aProduct.id);
      }, 2000);
    };

    const isAdded = (id) => addedProducts.value.includes(id);

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
      productsLoaded,
      sortedProducts,
      selectedCategory,
      selectCategory,
      mapGetters,
      mapState,
      mapMutations,
      mapActions,
      formatPrice,
      checkRating,
      addToCart,
      canAddToCart,
      isAdded,
      cartCount,
      publicAsset
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

.products-spinner {
  width: 42px;
  height: 42px;
  margin: 48px auto;
  border: 4px solid rgba(193, 85, 42, 0.2);
  border-top-color: #c1552a;
  border-radius: 50%;
  animation: products-spin 0.8s linear infinite;
}

@keyframes products-spin {
  to {
    transform: rotate(360deg);
  }
}

.section-main {
  background-color: #f2ebe0;
}

.section-main.mobile {
  @media (min-width: 768px) {
    display: none;
  }
}

.section-main.div {
  position: unset;
  padding: unset;
  grid-template-columns: unset;
  display: unset;
  gap: unset;
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
  grid-column: 1;
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

.section-main.desktop {
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: relative;
  }
}

.section-main.desktop .div-desktop {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-block: calc(0.25rem * 44.8);
  padding-inline: calc(0.25rem * 9.6);
  gap: calc(0.25rem * 12);
  align-items: center;
  margin-inline: auto;
  max-width: 80rem;
}

.section-main.desktop .trusted-text-desktop {
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

.section-main.desktop .everything-text-desktop {
  font-family: 'Fraunces', serif;
  font-size: 60px;
  font-weight: 600;
  color: #3d2414;
}

.section-main.desktop .furry-text-desktop {
  font-style: italic;
  color: #c1552a;
}

.section-main.desktop .curated-text-desktop {
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  color: #6b4226;
  line-height: 1.625;
}

.section-main.desktop .buttons-desktop {
  flex-wrap: wrap;
  display: flex;
  gap: calc(0.25rem * 6);
  padding-top: 12px;
}

.section-main.desktop .buttons-desktop .shop-desktop,
.section-main.desktop .buttons-desktop .story-desktop {
  padding-block: calc(0.25rem * 6);
  padding-inline: calc(0.25rem * 12);
  border-radius: 10px;
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.section-main.desktop .buttons-desktop .shop-desktop {
  background-color: #c1552a;
  color: #faf6f0;
  border: unset;
}

.section-main.desktop .buttons-desktop .story-desktop {
  background-color: transparent;
  border: 2px solid #3d2414;
  color: #3d2414;
}

.section-main.desktop .rating-desktop {
  gap: calc(0.25rem * 10);
  align-items: center;
  display: flex;
  margin-top: calc(0.25rem * 12);
}

.section-main.desktop .rating-desktop .title-desktop {
  color: #c1552a;
  font-weight: 700;
  font-size: 2.4rem;
  font-family: "Fraunces", Georgia, serif;
  padding-bottom: 0;
  margin-bottom: 3px;
}

.section-main.desktop .rating-desktop .subtitle-desktop {
  color: #6b4226;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: calc(1 / 1.2);
  font-family: 'Outfit', sans-serif;
}

.section-main.desktop .circle {
  background-color:
    color-mix(in oklab, #d98c3a 10%, transparent);
  border-radius: 3.40282e38px;
  translate: calc(1 / 2 * 100%) calc(calc(1 / 2 * 100%) * -1);
  width: calc(0.25rem * 155);
  height: calc(0.25rem * 155);
  position: absolute;
  right: calc(0.25rem * 0);
  top: calc(0.25rem * 0);
  pointer-events: none;
}

.section-main.desktop .image-container {
  position: relative;
  display: block;
}

.section-main.desktop .image-container .image-overlay {
  border-radius: 40px;
  rotate: 3deg;
  inset: calc(0.25rem * 0);
  position: absolute;
  background-color:
    color-mix(in oklab, #d98c3a 20%, transparent);
}

.section-main.desktop .image-container .image {
  object-fit: cover;
  border-radius: 32px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  max-width: 100%;
  height: auto;
  box-shadow: 2px 13px 40px 14px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 13px 40px 14px rgba(0, 0, 0, 0.25);
}

.section-main.desktop .image-container .free-delivery {
  position: absolute;
  box-shadow: 2px 13px 40px 14px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 13px 40px 14px rgba(0, 0, 0, 0.25);
  padding-block: calc(0.25rem * 6.25);
  padding-inline: calc(0.25rem * 8);
  background-color: #fff;
  border: 1px solid #e8d9c4;
  border-radius: 2rem;
  gap: calc(0.25rem * 3);
  align-items: center;
  display: flex;
  left: calc(0.25rem * -6);
  bottom: calc(0.25rem * -4);
}

.section-main.desktop .image-container .free-delivery .icon {
  font-size: 2.4rem;
}

.section-main.desktop .image-container .free-delivery .title {
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.4rem;
  color: #3d2414;
  font-weight: 600;
  line-height: calc(1.25 / .875);
  padding: 0;
  margin: 0;
}

.section-main.desktop .image-container .free-delivery .subtitle {
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 1.2rem;
  color: #6b4226;
  margin: 0;
}

.section-table {
  background-color: #3d2414;
  padding-block: calc(0.25rem * 16);
}

.section-table .div {
  display: grid;
  margin-inline: auto;
  color: #3d2414;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding-inline: calc(0.25rem * 9.6);
    gap: calc(0.25rem * 6);
    max-width: 80rem;
  }
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
  padding-block: calc(0.25rem * 25.6);
  padding-inline: calc(0.25rem * 9.6);
  background-color: #faf6f0;
}

.section-products .text {
  @media (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row;
    gap: calc(0.25rem * 10);
    justify-content: space-between;
    display: flex;
    margin-bottom: calc(0.25rem * 10);
  }
}

.section-products .title {
  color: #3d2414;
  font-family: 'Fraunces', serif;
  font-size: 3rem;
  font-weight: 600;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
}

.section-products .title-orange {
  color: #c1552a;
  font-style: italic;
}

.section-products .subtitle {
  color: #6b4226;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
}

.section-products .categories {
  overflow-x: auto;
  gap: calc(0.25rem * 3);
  scroll-snap-type: x proximity;
  display: flex;
  margin-inline: -10px;
  padding-top: 10px;
  padding-inline: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
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
  margin-bottom: 20px;
}

.section-products .no-products-message {
  color: #6b4226;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  margin: 0;
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

.section-products .product .description .btn.addToCart.added {
  background-color: #7a8c6e;
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
  padding-bottom: 20px;
}

.section-banner .info .description .code {
  background-color:
    color-mix(in oklab, #fff 10%, transparent);
  border-radius: 5px;
  color: #f0b868;
  padding: 4px 8px;
  font-weight: 600;
}

.section-banner .info .claim-offer {
  color: #c1552a;
  background-color: #faf6f0;
  border: none;
  font-size: 14px;
  font-family: 'Outfit', system-ui, sans-serif;
  padding: 16px 32px;
  border-radius: 10px;
  font-weight: 600;
}

.section-motto {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  display: grid;
  gap: 20px;
  margin: 20px;
  margin-bottom: 60px;
}

.section-motto .div {
  border-radius: 15px;
  padding: 28px;
  background-color: #f2ebe0;
}

.section-motto span {
  font-size: 30px;
}

.section-motto .title {
  font-family: 'Fraunces', Georgia, serif;
  color: #3d2414;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}

.section-motto .subtitle {
  font-family: 'Outfit', system-ui, sans-serif;
  color: #6b4226;
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.625;
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