<template>
  <q-layout>
  ...
  <q-page-container>
    <q-page>
      <router-link to="/dashboard">Click me!</router-link>
    </q-page>
  </q-page-container>
  ...
</q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
