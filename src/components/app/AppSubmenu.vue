<template>
  <q-list class="q-ml-md">
    <template v-for="(link, linkIndex) in links" :key="linkIndex">
      <template v-if="link.hasOwnProperty('items') && link.items.length != 0">
        <q-expansion-item :label="link.title" :icon="link.icon" caption="">
          <app-submenu :links="link.items" />
        </q-expansion-item>
      </template>
      <template v-else>
        <EssentialLink :key="link.title" v-bind="link" v-if="link['link']" />
      </template>
    </template>
  </q-list>
</template>
<script>
import { defineComponent } from "vue";
import EssentialLink from "components/EssentialLink.vue";
export default defineComponent({
  name: "AppSubmenu",
  props: {
    links: {
      type: Array,
      required: false,
    },
  },
  components: {
    EssentialLink,
  },
});
</script>
