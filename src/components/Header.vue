<template>
    <header>
        <div class="navbar navbar-default">
            <div class="navbar-header">
                <h1>
                    <router-link :to="{ name: 'Main' }">
                        {{ sitename }}
                    </router-link>
                </h1>
            </div>
            <div class="nav navbar-nav navbar-right cart">
                <div v-if="!mySession">
                    <button type="button" class="btn btn-default btn-lg" @click="signIn">
                        Logowanie
                    </button>
                </div>
                <div v-else>
                    <button type="button" class="btn btn-default btn-lg" @click="signOut">
                        <img class="photo" :src="mySession.photoURL" alt="profile" /> Wyloguj
                    </button>
                </div>
                <div class="nav navbar-nav navbar-right cart">
                    <router-link active-class="active" tag="button" class="btn btn-default btn-lg"
                        :to="{ name: 'Form' }">
                        <span class="glyphicon glyphicon-shopping-cart">
                            {{ cartItemCount }}
                        </span> Kasa
                    </router-link>
                </div>

            </div>
        </div>
    </header>
</template>
<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';

export default {
    name: 'my-header',
    data() {
        return {
            sitename: 'Skład dla zwierzaków :: Vue.js'
        }
    },
    props: ['cartItemCount'],
    beforeCreate() {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            this.$store.commit('SET_SESSION', user || false);
        });
    },
    methods: {
        showCheckout() {
            this.$router.push({ name: 'Form' });
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: black;
}

.router-link-exact-active {
    color: blue;
}
</style>