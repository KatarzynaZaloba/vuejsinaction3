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
            <div class="nav navbar-nav cart">
                <div v-if="!mySession">
                    <button type="button" class="btn btn-default btn-lg login" @click="signIn">
                        Logowanie
                    </button>
                </div>
                <div v-else>
                    <button type="button" class="btn btn-default btn-lg login-out" @click="signOut">
                        <img class="photo" :src="mySession.photoURL" alt="profile" /> Wyloguj
                    </button>
                </div>
                <div class="nav navbar-nav navbar-right cart">
                    <router-link active-class="active" tag="button" class="btn btn-default btn-lg cart"
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
            sitename: 'Pawsome',
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
header h1 {
    margin-left: 20px;
}

a {
    text-decoration: none;
    color: black;
}

.router-link-exact-active {
    color: #c1552a;
    font-style: italic;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: calc(1.75 / 1.25);
    font-family: 'Fraunces', Georgia, serif;
}

.photo {
    width: 20px;
    height: 20px;
}

.navbar {
    border: unset;
}

.navbar.navbar-default {
    background-color: #faf5f0;
}

.nav.navbar-nav.cart {
    display: flex;
    flex-direction: row;
    padding: 0;
    float: unset;
    margin: 0;
    justify-content: end;
    margin-right: 20px;
    padding-top: 20px;
    align-items: center;
    margin-bottom: 20px;
}

.nav.navbar-nav.cart .btn.cart {
    background-color: #c1552a;
    color: #faf6f0;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    border-radius: 15px;
    border: none;
    font-weight: 600;
    padding: 10px 20px;
}

.nav.navbar-nav.cart .btn.login-out,
.nav.navbar-nav.cart .btn.login {
    color: #6b4226;
    margin-bottom: unset;
    margin-right: unset;
    border: unset;
    background-color: unset;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.nav.navbar-nav.cart .btn.login-out img {
    margin-right: 5px;
}

span.glyphicon.glyphicon-shopping-cart {
    margin-right: 5px;
}

.btn.btn-default.btn-lg {
    margin-right: 20px;
}

.btn.btn-default.btn-lg.login {
    margin-bottom: 20px;
}
</style>