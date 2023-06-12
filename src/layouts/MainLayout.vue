<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      drawer: ref(null),
    };
  },
});
</script>
