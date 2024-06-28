<template>
  <header class="py-3 header-container">
    <div class="container mx-auto items-center justify-between hidden lg:flex">
      <div class="flex items-center">
        <div class="px-4 border-line-img">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div class="px-4">
          <p class="text-sm">{{ moment().format("DD/MM/YYYY HH:mm") }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <font-awesome-icon
          class="cursor-pointer"
          :icon="['fas', 'magnifying-glass']"
        />
        <div class="flex items-center space-x-2 cursor-pointer">
          <font-awesome-icon :icon="['far', 'user']" />
          <p class="text-base">Đăng nhập</p>
        </div>
        <font-awesome-icon class="cursor-pointer" :icon="['far', 'bell']" />
      </div>
    </div>
    <div class="container mx-auto flex items-center justify-between lg:hidden">
      <font-awesome-icon :icon="['fas', 'bars']" />
      <img src="/images/logo.svg" class="w-36" alt="logo" />
      <div class="flex space-x-4">
        <font-awesome-icon :icon="['far', 'user']" />
        <font-awesome-icon class="cursor-pointer" :icon="['far', 'bell']" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import moment from "moment";
</script>

<style scoped lang="scss">
.border-line-img {
  border-right: 1px solid #e5e5e5;
}
.header-container {
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
}
</style>
