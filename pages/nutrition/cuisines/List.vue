<template>
  <q-page>
    <q-list separator>
      <q-slide-item
        v-for="(cuisine, cuisineIndex) in cuisineList"
        :key="cuisineIndex"
      >
        <q-item>
          <q-item-section>{{ cuisine.name }}</q-item-section>
        </q-item>
      </q-slide-item>
    </q-list>
  </q-page>
</template>
<script>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";
export default {
  setup() {
    const cuisineList = ref([]);

    onMounted(() => {
      Loading.show();
      api.get("/manage/cuisines").then((response) => {
        cuisineList.value = response.data.data;
        Loading.hide();
      });
    });

    return {
      cuisineList,
    };
  },
};
</script>
