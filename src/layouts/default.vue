<template>
  <header-default-layout />
  <main class="main">
    <slot> </slot>
  </main>

  <footer-default-layout />
  <pagination-component />
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/scss/responsive.scss";
.main {
  min-height: calc(100vh - 52.8px - 76px);
}

@include mediaMobileTo640 {
  .main {
    min-height: calc(100vh - 51.68px - 76px);
  }
}
</style>
