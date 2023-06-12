<template>
  <q-layout>
  ...
  <q-page-container>
    <q-page>
      <router-link to="/dashboard">Click me!</router-link>
      <br>
      <router-link to="/instituteNew">instituteContent</router-link>
      <br>
      <router-link to="/dashboard_content">Content</router-link>
      <br>
      <router-link to="/institute">institute</router-link>
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
