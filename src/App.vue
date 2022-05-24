<template>
  <div class="app">
    <h1>这里用来测试动态组件</h1>
    <button @click="index = 0">son1</button>
    <button @click="index = 1">son2</button>
    <button @click="index = 2">son3</button>
    <button @click="index = 3">son4</button>
    <!-- 这里就是bug的来源 -->
    <keep-alive>
      <suspense :key="index">
        <component :is="component[index]"></component>
        <template #fallback>
          <div>Loading-dynamic-components...</div>
        </template>
      </suspense>
    </keep-alive>
    <hr />
    <h1>这里用来测试路由</h1>
    <router-link to="/router1">router1 | </router-link>
    <router-link to="/router2">router2 | </router-link>
    <router-link to="/router3">router3 | </router-link>
    <router-link to="/router4">router4</router-link>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <keep-alive>
          <suspense :key="index">
            <component :is="Component"></component>
            <template #fallback>
              <div>Loading-routers...</div>
            </template>
          </suspense>
        </keep-alive>
      </template>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const son1 = defineAsyncComponent(() => import('./components/son1.vue'))
const son2 = defineAsyncComponent(() => import('./components/son2.vue'))
const son3 = defineAsyncComponent(() => import('./components/son3.vue'))
const son4 = defineAsyncComponent(() => import('./components/son4.vue'))
const component = [son1, son2, son3, son4]
const index = ref(0)
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}
</style>
