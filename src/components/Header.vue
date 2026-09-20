<template>
    <header class="mobile">
        <div class="navbar navbar-default">
            <!-- <div class="navbar-header desktop">
                <h1>
                    <router-link :to="{ name: 'Main' }">
                        {{ sitename }}
                    </router-link>
                </h1>
            </div> -->
            <div class="nav navbar-nav cart">
                <div class="navbar-header mobile">
                    <h1>
                        <router-link :to="{ name: 'Main' }">
                            {{ sitename }}
                        </router-link>
                    </h1>
                </div>
                <div class="login-div">
                    <div v-if="!mySession" class="session">
                        <button type="button" class="btn btn-default btn-lg login" @click="signIn">
                            Login
                        </button>
                    </div>
                    <div v-else class="session">
                        <button type="button" class="btn btn-default btn-lg login-out" @click="signOut">
                            <img class="photo" :src="mySession.photoURL" alt="profile" /> Logout
                        </button>
                    </div>
                    <div class="nav navbar-nav navbar-right cart">
                        <router-link active-class="active" tag="button" class="btn btn-default btn-lg cart"
                            :to="{ name: 'Form' }">
                            <span class="glyphicon glyphicon-shopping-cart">
                            </span> Cart
                            <span v-if="cartItemCount > 0" class="cart-items">{{ cartItemCount }}</span>
                        </router-link>
                    </div>
                    <button class="hamburger-menu" @click="showMenu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <nav class="hamburger-menu categories">
                <a href="#" class="link">Shop</a>
                <a href="#" class="link">Breeds</a>
                <a href="#" class="link">Nutrition</a>
                <a href="#" class="link">About</a>
                <a href="#" class="link">Blog</a>
                <div class="login-div">
                    <div v-if="!mySession" class="session">
                        <button type="button" class="btn btn-default btn-lg login" @click="signIn">
                            Login
                        </button>
                    </div>
                    <div v-else class="session">
                        <button type="button" class="btn btn-default btn-lg login-out" @click="signOut">
                            <img class="photo" :src="mySession.photoURL" alt="profile" /> Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <header class="desktop">
        <div class="div">
            <h1>
                <router-link :to="{ name: 'Main' }" class="title">
                    {{ sitename }}
                </router-link>
            </h1>
            <nav class="categories">
                <a href="#" class="category">Shop</a>
                <a href="#" class="category">Breeds</a>
                <a href="#" class="category">Nutrition</a>
                <a href="#" class="category">About</a>
                <a href="#" class="category">Blog</a>
                <div class="login-div">
                    <div v-if="!mySession" class="session">
                        <button type="button" class="category btn btn-default btn-lg login" @click="signIn">
                            Login
                        </button>
                    </div>
                    <div v-else class="session">
                        <button type="button" class="category btn btn-default btn-lg login-out" @click="signOut">
                            <img class="photo" :src="mySession.photoURL" alt="profile" /> Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div class="search-and-cart">
                <button class="category btn btn-default search">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Search
                </button>
                <router-link active-class="active" tag="button" class="btn btn-default btn-lg cart"
                    :to="{ name: 'Form' }">
                    <span class="glyphicon glyphicon-shopping-cart">
                    </span> Cart
                    <span v-if="cartItemCount > 0" class="cart-items">{{ cartItemCount }}</span>
                </router-link>
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
        },
        showMenu() {
            const target = document.querySelector('.hamburger-menu.categories');
            if (target) {
                target.style.display = target.style.display === 'flex' ? 'none' : 'flex';
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
    font-size: 20px;

    @media (max-width: 767px) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0;
    }
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
    font-size: 24px;
}

.photo {
    width: 20px;
    height: 20px;
}

.navbar {
    border: unset;
}

.nav.navbar-nav.navbar-right.cart {
    margin: 0;
}

.navbar.navbar-default::before,
.navbar.navbar-default::after,
.nav.navbar-nav::before,
.nav.navbar-nav::after {
    display: none;
    content: none;
}

.navbar.navbar-default {
    background-color: #faf5f0;
    border: 1px #e8d9c4 solid;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
}

header.mobile {
    @media (min-width: 768px) {
        display: none;
    }
}

header.desktop {
    display: none;

    @media (min-width: 768px) {
        display: block;
        backdrop-filter: blur(8px);
        background-color:
            color-mix(in oklab, #faf6f0 90%, transparent);
        border-bottom: 1px solid #e8d9c4;
        z-index: 50;
        position: sticky;
        top: 0;
    }
}

header.desktop .div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 65px;
    margin-inline: auto;
}

header.desktop .div h1 {
    margin: 0;
    padding: 0;
}

header.desktop .div .title {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: calc(1.75 / 1.25);
    font-style: italic;
    color: #c1552a;
}

header.desktop .div .categories {
    display: flex;
    gap: calc(0.25rem * 10);
    align-items: center;
}

header.desktop .div .categories .category {
    color: #6b4226;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Outfit', system-ui, sans-serif;
    line-height: calc(1.75 / 1.25);
}

header.desktop .div .categories .login-div .category {
    padding: 0;
    border: unset;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
}

header.desktop .div .search-and-cart {
    display: flex;
    justify-content: end;
    gap: 10px;
    align-items: center;
}

header.desktop .div .search-and-cart .cart {
    padding: 10px;
    margin: 0;
    color: #faf6f0;
    background-color: #c1552a;
    font-size: 14px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-weight: 600;
    border: unset;
    border-radius: 10px;
    padding: 8px 16px;
    position: relative;
}

header.desktop .div .search-and-cart .cart .cart-items {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    background-color: #d98c3a;
    color: #3d2414;
    font-weight: 700;
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -6px;
    top: -6px;
}

header.desktop .div .search-and-cart .category.btn.btn-default {
    padding: 0;
    margin-right: 0;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    border: unset;
    background-color: transparent;
}

header.desktop .div .search-and-cart .category.btn.btn-default.search {
    color: #6b4226;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Outfit', system-ui, sans-serif;
    line-height: calc(1.75 / 1.25);
}

header.desktop .div .search-and-cart .category.btn.btn-default svg {
    width: 20px;
    height: 20px;
}


.navbar.navbar-default .hamburger-menu.categories {
    background-color: #faf6f0;
    border-color: #e8d9c4;
    border-top-style: solid;
    border-top-width: 1px;
    gap: 10px;
    flex-direction: column;
    display: none;
    width: 100%;
    padding: 16px 24px;
    padding-bottom: 24px;
}

.navbar.navbar-default .hamburger-menu.categories .link {
    color: #6b4226;
    font-size: 14px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-weight: 500;
}

.navbar.navbar-default .hamburger-menu.categories .login-div .btn {
    color: #6b4226;
    font-size: 14px;
    font-family: 'Outfit', system-ui, sans-serif;
    font-weight: 500;
    border: unset;
    background-color: unset;
    padding: 0;
}

.nav.navbar-nav.cart:not(.navbar-right) {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    padding: 0;
    float: unset;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
}

.nav.navbar-nav.cart .cart {
    padding: 10px;
    margin: 0;
}

.nav.navbar-nav.cart .cart .cart-items {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    background-color: #d98c3a;
    color: #3d2414;
    font-weight: 700;
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -5px;
    top: -5px;
}

.nav.navbar-nav.cart .session {
    display: none;
}

.nav.navbar-nav.cart .hamburger-menu {
    color: #3d2414;
    border: unset;
    width: 35px;
    height: 35px;
    padding-top: 5px;
    background-color: transparent;

    @media (min-width: 768px) {
        display: none;
    }
}

.navbar.navbar-default .navbar-header.desktop {
    @media (max-width: 767px) {
        display: none;
    }
}

.navbar.navbar-default .navbar-header.mobile {
    @media (min-width: 768px) {
        display: none;
    }
}

.navbar.navbar-default .login-div {
    display: flex;
    align-items: center;
    margin-right: 15px;
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
    position: relative;
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
</style>