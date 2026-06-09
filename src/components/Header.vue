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
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut as firebaseSignOut
} from 'firebase/auth';
import { app } from '../firebase';

export default {
    name: 'my-header',
    data() {
        return {
            sitename: 'Skład dla zwierzaków :: Vue.js',
            sessionUser: false,
            unsubscribeAuth: null
        }
    },
    props: ['cartItemCount'],
    created() {
        const auth = getAuth(app);
        this.unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            this.sessionUser = user || false;
            this.$store.commit('SET_SESSION', user || false);
        });
    },
    beforeUnmount() {
        if (typeof this.unsubscribeAuth === 'function') {
            this.unsubscribeAuth();
        }
    },
    methods: {
        showCheckout() {
            this.$router.push({ name: 'Form' });
        },
        async signIn() {
            const auth = getAuth(app);
            const provider = new GoogleAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                this.sessionUser = result.user || false;
                this.$store.commit('SET_SESSION', result.user || false);
                console.log('zalogowano!');
            } catch (error) {
                console.log('błąd' + error)
            }
        },
        async signOut() {
            const auth = getAuth(app);
            try {
                await firebaseSignOut(auth);
                this.sessionUser = false;
                this.$store.commit('SET_SESSION', false);
                console.log('wylogowano!');
            } catch (error) {
                console.log('błąd podczas wylogowywania' + error)
            }
        }
    },
    computed: {
        mySession() {
            return this.sessionUser;
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