<template>
  <footer class="py-3 bg-[#e5e5e5]">
    <div
      class="container mx-auto flex justify-between"
      v-if="dataPage.length > 1"
    >
      <div>
        <div
          class="prev cursor-pointer flex space-x-2 items-center"
          v-if="page > 1"
          @click="homeStore.onChangePage(page - 1)"
        >
          <img
            class="w-5 h-11"
            src="https://s1.vnecdn.net/vnexpress/restruct/c/v2774/v2_2019/pc/longform/images/icons/Preview.png"
            alt="icon"
          />
          <div class="content">
            <h3 class="text-sm font-medium">
              {{ getDataFromPage(page - 1)?.title }}
            </h3>
            <p class="text-sm">
              {{ getDataFromPage(page - 1)?.short_description }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="next cursor-pointer flex space-x-2 items-center"
          v-if="page < dataPage.length"
          @click="homeStore.onChangePage(page + 1)"
        >
          <div class="content">
            <h3 class="text-sm font-medium">
              {{ getDataFromPage(page + 1)?.title }}
            </h3>
            <p class="text-sm">
              {{ getDataFromPage(page + 1)?.short_description }}
            </p>
          </div>
          <img
            class="w-5 h-11"
            src="https://s1.vnecdn.net/vnexpress/restruct/c/v2774/v2_2019/pc/longform/images/icons/Next.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { dataPage } from "../../home/data/home.datasource";
import { useHomeStore } from "../../home/stores/home.store";

const homeStore = useHomeStore();
const { page } = storeToRefs(homeStore);

const getDataFromPage = (value: number) => {
  return dataPage.find((item, index) => value === index + 1);
};
</script>

<style scoped lang="scss"></style>
