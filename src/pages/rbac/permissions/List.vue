<template>
  <q-page>
    <q-list separator>
      <q-slide-item
        v-for="(permission, permissionIndex) in permissions"
        :key="permissionIndex"
      >
        <q-item></q-item>
      </q-slide-item>
    </q-list>
  </q-page>
</template>
<script>
import { ref } from "vue";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
export default {
  setup() {
    const permissions = ref([]);
    const selectedPermissions = ref([]);

    function editPermission() {}

    function deletePermission() {}

    function deletePermissions() {}

    return {
      permissions,
      selectedPermissions,

      editPermission,
      deletePermission,
      deletePermissions,
    };
  },
};
</script>
