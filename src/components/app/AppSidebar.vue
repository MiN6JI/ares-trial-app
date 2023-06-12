<template>
  <q-drawer
    v-model="isLeftDrawerOpen"
    show-if-above
    side="left"
    class="sidebar"
  >
    <!-- <div class="row">
      <div class="col-12">
        <app-identity width="64" reverse="true"></app-identity>
      </div>
    </div> -->

    <div class="row q-py-xl">
      <div class="col q-pa-md text-center">
        <div class="profile-avatar">
          GK
          <!-- {{ auth.user.name.replace("Dr", "").match(/[A-Z]/g).join("") }} -->
        </div>
        <div class="q-py-md">
          <p class="q-mb-none text-weight-bold">
            <!-- {{ auth.user.name }} -->
            Ganesh Kanse
          </p>
          <a href="mailto:ganesh@mooltatvam.com">
            <!-- {{ auth.user.email }} -->
            kanseganesh@gmail.com
          </a>
        </div>
      </div>
    </div>
    <app-menu :links="links" />
  </q-drawer>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { useAuthStore } from "stores/auth";
import AppMenu from "components/app/AppMenu.vue";
import AppIdentity from "components/app/AppIdentity.vue";
export default defineComponent({
  name: "AppSidebar",
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      required: false,
    },
  },
  components: {
    AppMenu,
    AppIdentity,
  },
  setup(props) {
    let isLeftDrawerOpen = ref(false);
    const auth = useAuthStore();

    watch(
      () => props.leftDrawerOpen,
      () => {
        isLeftDrawerOpen.value = !isLeftDrawerOpen.value;
      }
    );

    return {
      isLeftDrawerOpen,
      auth,
    };
  },
});
</script>
