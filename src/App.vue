<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-out;

}

.fade-enter,
.fade-leave-to {
  opacity: 0;

}
</style>
