<template>
  <div>son2</div>
</template>
<script lang="ts">
export default { name: 'son2' }
</script>
<script setup lang="ts">
await new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log(2)
    resolve()
  }, 2000)
})
</script>

<style scoped lang="less"></style>
