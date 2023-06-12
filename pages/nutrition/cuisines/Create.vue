<template>
  <q-page class="q-pa-md">
    <q-form ref="createCuisineForm">
      <!-- Add Form Fields Here -->
    </q-form>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const createCuisineForm = ref(null);

    return {
      createCuisineForm,
    };
  },
};
</script>
