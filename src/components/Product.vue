<template>
    <div>
        <my-header></my-header>
        <h1>Identyfikator: {{ $route.params.id }}</h1>
        <div class="row">
            <div class="col-md-5 col-md-offset-0">
                <figure>
                    <img class="product" v-bind:src="product.image">
                </figure>
            </div>
            <div class="col-md-6 col-md-offset-0 description">
                <h1>{{ product.title }}</h1>
                <p v-html="product.description"></p>
                <p class="price">${{ product.price }}</p>
                <button @click="edit">Edytuj produkt</button>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './Header.vue'

export default {
    components: { MyHeader },
    computed: {
        product() {
            return this.$store.getters.products.find(
                product => product.id == this.$route.params.id
            ) || {}
        }
    },
    methods: {
        edit() {
            this.$router.push({ name: 'Edit', params: { id: this.$route.params.id } })
        }
    }
}

</script>