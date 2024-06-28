<template>
  <div>
    <div class="container mx-auto">
      <p class="text-base text-slate-500 lg:hidden pb-5 pt-1">
        {{ moment().format("DD/MM/YYYY HH:mm") }}
      </p>
    </div>
    <img :src="data?.image" alt="banner" />
    <div
      class="lg:container mx-auto container-content"
      :class="data?.content && 'mt-4'"
      v-html="data?.content"
    ></div>
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

<style scoped lang="scss">
@import "@/assets/scss/responsive.scss";
:deep(.container-content) {
  .max-w-710 {
    max-width: 710px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    margin-bottom: 1rem;
    span {
      font-size: 20px;
      letter-spacing: 0.01em;
      line-height: 170%;
    }
  }
  .image {
    &.image_resized {
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;

      &.image-style-side {
        float: right;
        margin-left: 30px;
        padding-top: 8px;
      }

      figcaption {
        padding-top: 10px;
        text-align: center;
      }
    }
  }
}

@include mediaMobileTo640 {
  :deep(.container-content) {
    .max-w-710 {
      max-width: 590px;
      padding-left: 15px;
      padding-right: 15px;
    }
    p {
      span {
        font-size: 18px;
      }
    }
    .image {
      &.image_resized {
        width: 100% !important;
      }
    }
  }
}
</style>
