export const useHomeStore = defineStore("HomeStore", () => {
  const page = ref(1);

  const onChangePage = (value: number) => {
    page.value = value;
    window.scrollTo(0, 0);
  };
  return { page, onChangePage };
});
