<template>
  <q-page class="q-pa-md">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="clear_all"
        color="primary"
        to="/app/nutrition/diet-types"
      />
    </q-page-sticky>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {},
};
</script>
