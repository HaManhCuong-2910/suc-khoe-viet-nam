<template>
  <div>
    <div class="container mx-auto">
      <p class="text-base text-slate-500 lg:hidden pb-5 pt-1">
        {{ moment().format("DD/MM/YYYY HH:mm") }}
      </p>
    </div>
    <img :src="data?.image" alt="banner" />
    <div class="container mx-auto" v-html="data?.content"></div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { dataPage } from "../data/home.datasource";
import { useHomeStore } from "../stores/home.store";

const homeStore = useHomeStore();
const { page } = storeToRefs(homeStore);

const data = computed(() => {
  return dataPage.find((item, index) => page.value === index + 1);
});
</script>

<style scoped lang="scss"></style>
