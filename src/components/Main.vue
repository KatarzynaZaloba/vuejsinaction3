<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main>
            <div v-for="product in sortedProducts">
                <div class="row">
                    <div class="col-md-5 col-md-offset-0">
                        <figure>
                            <img class="product" v-bind:src="product.image">
                        </figure>
                    </div>
                    <div class="col-md-6 col-md-offse-0 description">
                        <h1 v-text="product.title"></h1>
                        <p v-html="product.description"></p>
                        <p class="price">
                            {{ product.price | formatPrice }}
                        </p>
                        <button class="btn btn-primary btn-lg" v-on:click="addToCart(product)" v-if="canAddToCart(product)">Dodaj do koszyka</button>
                        <button disabled="true" class="btn btn-primary btn-lg" v-else>Dodaj do koszyka</button>
                        <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id) === 0">Brak towaru!</span>
                        <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id) < 5">Zostało tylko {{ product.availableInventory - cartCount(product.id) }}!</span>
                        <span class="inventory-message" v-else>Kupuj teraz!</span>
                        <div class="rating">
                            <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5">☆</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>