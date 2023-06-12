<template>
  <q-page class="q-pa-md">
    <q-form ref="editCuisineForm">
      <!-- Add Form Fields Here -->
    </q-form>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const editCuisineForm = ref(null);

    return {
      editCuisineForm,
    };
  },
};
</script>
