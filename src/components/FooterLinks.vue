<template>
  <div class="flex justify-between text-weight-bold">
    <a v-for="(link, linkIndex) in links" :key="linkIndex" :href="link.to">{{
      link.label
    }}</a>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FooterLinks",
  setup() {
    const links = ref([
      {
        label: "About",
        to: "/#/about/",
      },
      {
        label: "Privacy Policy",
        to: "/#/privacy-policy/",
      },
      {
        label: "Terms & Conditions",
        to: "/#/terms-and-conditions/",
      },
      {
        label: "Contact Us",
        to: "/#/contact-us/",
      },
    ]);

    return {
      links,
    };
  },
});
</script>
