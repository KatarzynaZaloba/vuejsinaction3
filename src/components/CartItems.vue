<template>
  <div class="cart-status-wrapper">
    <div v-if="cart.length" class="cart-status">
      <div>
        <div class="items-header">
          <h2 class="title">Items <span class="amount">(4)</span></h2>
          <button class="clear-all">Clear all</button>
        </div>
        <ul class="items-body">
          <li v-for="item in items" :key="item.name" class="item">
            <div class="image-container">
              <img :alt="item.name" class="image" :src="item.image">
            </div>
            <div class="item-details">
              <p class="category">{{ item.category }}</p>
              <p class="name">{{ item.name }}</p>
              <p class="price">{{ item.unitPrice }}</p>
              <div class="buttons">
                <div class="quantity-controls">
                  <button class="less">−</button>
                  <span class="quantity">{{ item.quantity }}</span>
                  <button class="more">+</button>
                </div>
                <button class="remove">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                    </path>
                  </svg>Remove
                </button>
              </div>
            </div>
            <div class="price-container">
              <p class="price">{{ item.price }}</p>
              <p v-if="item.quantity > 1" class="quantity">{{ item.quantity }} × {{ item.unitPrice }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="cart-status">
      <div class="empty">
        <p class="icon">🛒</p>
        <p class="info">Your cart is empty.</p>
        <button class="go-back">Back to shop</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItems',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          category: 'Dog Food',
          name: 'Premium Grain-Free Kibble',
          image: 'https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?w=300&h=300&fit=crop&auto=format',
          unitPrice: '$42.99',
          price: '$42.99',
          quantity: 1
        },
        {
          category: 'Toys',
          name: 'Plush Elephant Toy',
          image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=300&h=300&fit=crop&auto=format',
          unitPrice: '$18.50',
          price: '$37.00',
          quantity: 2
        },
        {
          category: 'Accessories',
          name: 'Adjustable Leather Collar',
          image: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?w=300&h=300&fit=crop&auto=format',
          unitPrice: '$34.00',
          price: '$34.00',
          quantity: 1
        }
      ]
    }
  }
}
</script>
