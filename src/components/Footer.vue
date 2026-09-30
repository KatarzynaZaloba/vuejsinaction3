<template>
    <footer class="footer">
        <div class="div">
            <span class="title">{{ sitename }}</span>
            <p class="subtitle">© 2026 {{ sitename }} Pet Supply. All rights reserved.</p>
            <div class="links">
                <a href="#" class="">Privacy</a>
                <a href="#" class="">Terms</a>
                <a href="#" class="">Contact</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'my-footer',
    data() {
        return {
            sitename: 'Pawsome'
        }
    }
}
</script>
<style scoped>
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
</style>
