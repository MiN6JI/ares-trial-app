<template>
  <img
    alt="Ahar Essentials"
    src="~/assets/brand/ahar-essentials-logo-white.png"
    :class="classes"
    :width="width"
    v-if="reverse"
  />
  <img
    alt="Ahar Essentials"
    src="~/assets/brand/ahar-essentials-logo.png"
    :class="classes"
    :width="width"
    v-else
  />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppIdentity",
  props: {
    classes: {
      type: String,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 200,
    },
  },
});
</script>
