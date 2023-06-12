<template>
  <q-page>
    <div>Signing Out</div>
  </q-page>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { LocalStorage } from "quasar";
import { useRouter } from "vue-router";

const $router = useRouter();

onBeforeMount(() => {
  LocalStorage.clear();
  $router.push("/auth/login/");
});
</script>
