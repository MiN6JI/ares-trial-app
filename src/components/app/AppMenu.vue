<template>
  <template v-for="(link, linkIndex) in links" :key="linkIndex">
    <template v-if="link.hasOwnProperty('items') && link.items.length != 0">
      <q-expansion-item :label="link.title" :icon="link.icon" caption="">
        <app-submenu :links="link.items" />
      </q-expansion-item>
    </template>
    <template v-else>
      <EssentialLink v-bind="link" :key="link.title" />
    </template>
  </template>
</template>
<script>
import { defineComponent } from "vue";
import AppSubmenu from "components/app/AppSubmenu.vue";
import EssentialLink from "components/EssentialLink.vue";
export default defineComponent({
  name: "AppMenu",
  props: {
    links: {
      type: Array,
      required: false,
    },
  },
  components: {
    AppSubmenu,
    EssentialLink,
  },
});
</script>
