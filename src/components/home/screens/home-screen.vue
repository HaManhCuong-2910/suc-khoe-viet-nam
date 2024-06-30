<template>
  <div>
    <img src="/images/LỜI MỞ ĐẦU.png" loading="lazy" hidden alt="banner" />
    <img src="/images/COVER CHƯƠNG 1.png" loading="lazy" hidden alt="banner" />
    <img src="/images/COVER CHƯƠNG 2.png" loading="lazy" hidden alt="banner" />
    <img src="/images/CHƯƠNG 3.png" loading="lazy" hidden alt="banner" />
    <img src="/images/CHƯƠNG 4.png" loading="lazy" hidden alt="banner" />
    <div class="container mx-auto">
      <p class="text-base text-slate-500 lg:hidden pb-5 pt-1">
        {{ moment().format("DD/MM/YYYY HH:mm") }}
      </p>
    </div>
    <img :src="data?.image" alt="banner" />
    <div
      class="lg:container mx-auto container-content"
      :class="data?.content && 'mt-10'"
      v-html="data?.content"
    ></div>
    <div v-if="data?.listImage" class="mt-4">
      <light-gallery-component
        :key="page"
        :id="'gallery1'"
        :note="
          page === 5
            ? 'Một cuộc thi bơi được triển khai tại địa bàn Thành phố Vinh, Nghệ An. Nguồn ảnh: NVCC'
            : ''
        "
        :list-image="data.listImage"
      />
    </div>

    <div
      class="lg:container mx-auto container-content mt-4"
      v-if="data?.content2"
      v-html="data?.content2"
    ></div>

    <div v-if="data?.listImage2" class="mt-4">
      <light-gallery-component
        :key="page"
        :id="'gallery2'"
        :list-image="data.listImage2"
      />
    </div>

    <div
      class="lg:container mx-auto container-content mt-4"
      v-if="data?.content3"
      v-html="data?.content3"
    ></div>

    <div v-if="data?.listImage3" class="mt-4">
      <light-gallery-component
        :key="page"
        :id="'gallery3'"
        :list-image="data.listImage3"
      />
    </div>

    <div
      class="lg:container mx-auto container-content mt-4"
      v-if="data?.content4"
      v-html="data?.content4"
    ></div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { dataPage } from "../data/home.datasource";
import { useHomeStore } from "../stores/home.store";

const homeStore = useHomeStore();
const audio = ref<HTMLAudioElement | null>(null);
const { page } = storeToRefs(homeStore);

const data = computed(() => {
  return dataPage.find((item, index) => page.value === index + 1);
});

const onPlayAudio = (srcAudio: string) => {
  audio.value = new Audio(srcAudio);
  setTimeout(() => {
    audio.value?.play();
  }, 1000);
};

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (data.value?.audio) {
      onPlayAudio(data.value?.audio);
    } else {
      audio.value?.pause();
      audio.value?.remove();
      audio.value = null;
    }
  }
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/responsive.scss";
:deep(.container-content) {
  .max-w-710 {
    max-width: 710px;
    margin-left: auto;
    margin-right: auto;
  }
  ul {
    li {
      span {
        font-size: 20px;
        letter-spacing: 0.01em;
        line-height: 170%;

        strong {
          font-size: 20px;
          font-weight: 800;
          font-family: "Roboto", sans-serif;
          font-weight: bold;
        }
      }
    }
  }
  p {
    margin-bottom: 1rem;
    span {
      font-size: 20px;
      letter-spacing: 0.01em;
      line-height: 170%;

      strong {
        font-size: 20px;
        font-weight: 800;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
      }
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
        strong {
          font-size: 17px;
        }
      }
    }

    ul {
      li {
        span {
          font-size: 18px;
          strong {
            font-size: 17px;
          }
        }
      }
    }
    .image {
      &.image_resized {
        width: 100% !important;

        figcaption {
          padding-left: 16px;
          padding-right: 16px;
        }
      }
    }
  }
}
</style>
