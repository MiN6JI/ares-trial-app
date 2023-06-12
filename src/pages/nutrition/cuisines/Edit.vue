<template>
  <q-page class="q-pa-md">
    <q-form ref="editCuisineForm">
      <!-- Add Form Fields Here -->
    </q-form>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="clear_all"
        color="primary"
        to="/app/nutrition/cuisines"
      />
    </q-page-sticky>
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
