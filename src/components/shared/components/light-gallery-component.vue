<template>
  <div class="lg:container lg:mx-auto">
    <div :id="props.id">
      <a
        :href="item"
        v-for="item in props.listImage"
        :key="item"
        onclick="event.preventDefault();"
      >
        <img :alt="props.note || 'Nguồn ảnh: NVCC'" :src="item" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  id: String,
  listImage: Array as PropType<string[]>,
  note: String,
});
onMounted(() => {
  // @ts-ignore
  $(`#${props.id}`).justifiedGallery({
    rowHeight: 200,
    lastRow: "justify",
  });
});
</script>

<style scoped lang="scss"></style>
