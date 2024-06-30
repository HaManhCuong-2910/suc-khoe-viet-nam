<template>
  <div class="container-nav hidden lg:block" :class="isShow && 'show'">
    <ul class="flex flex-col space-y-8">
      <li
        v-for="(item, index) in dataPage"
        :key="item.title"
        :class="page === index + 1 && 'active'"
        @click="homeStore.onChangePage(index + 1)"
      >
        <h3 class="text-lg font-bold font-merriweather">
          {{ item.title || item.short_description }}
        </h3>
        <p class="text-sm" v-if="item.title">{{ item.short_description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { dataPage } from "../../home/data/home.datasource";
import { useHomeStore } from "../../home/stores/home.store";
const homeStore = useHomeStore();
const { page } = storeToRefs(homeStore);

const isShow = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      isShow.value = true;
    } else {
      isShow.value = false;
    }
  });
});
</script>

<style scoped lang="scss">
.container-nav {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 68.8px;
  right: 0;
  background: #222;
  padding-top: 2%;
  width: 120px;
  height: calc(100vh - 68.8px);
  transition: 0.3s;

  &.show {
    pointer-events: unset;
    opacity: 1;
  }

  ul {
    li {
      transition: 0.3s;
      &.active {
        border-left: 5px solid #c1295f;

        h3 {
          color: #fff;
        }
      }
      &:hover {
        border-left: 5px solid #c1295f;
        transition: 0.3s;
        h3 {
          color: #fff;
        }
      }
      border-left: 5px solid transparent;
      cursor: pointer;
      padding: 0px 15px 0px 10px;
      h3,
      p {
        color: #949494;
      }
    }
  }
}
</style>
