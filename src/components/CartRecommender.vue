<script>
export default {
    name: 'CartRecommender'
}
</script>

<template>
    <div class="cart-recommender">
        <div class="cart-recommender-header">
            <h3 class="title">Frequently bought together</h3>
        </div>
        <div class="cart-recommender-items">
            <div class="cart-recommender-item">
                <img alt="" class="image"
                    src="https://images.unsplash.com/photo-1573435567032-ff5982925350?w=200&amp;h=200&amp;fit=crop&amp;auto=format">
                <div class="cart-recommender-item-details">
                    <p class="category">Health</p>
                    <p class="name">Omega-3 Supplement Drops</p>
                    <p class="price">$29.95</p>
                </div>
            </div>
            <div class="cart-recommender-item">
                <img alt="" class="image"
                    src="https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?w=200&amp;h=200&amp;fit=crop&amp;auto=format">
                <div class="cart-recommender-item-details">
                    <p class="category">Accessories</p>
                    <p class="name">Ceramic Dog Bowl Set</p>
                    <p class="price">$38.00</p>
                </div>
            </div>
            <div class="cart-recommender-item">
                <img alt="" class="image"
                    src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=200&amp;h=200&amp;fit=crop&amp;auto=format">
                <div class="cart-recommender-item-details">
                    <p class="category">Toys</p>
                    <p class="name">Kong Chew Bone</p>
                    <p class="price">$14.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>