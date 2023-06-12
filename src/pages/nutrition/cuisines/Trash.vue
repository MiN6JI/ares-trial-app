<template>
  <q-page>
    <q-card class="q-ma-md">
      <!-- The Tabs -->
      <q-tabs align="left" indicator-color="primary" active-color="primary">
        <q-route-tab class="q-mx-md" to="/app/nutrition/cuisines" label="All" exact />
        <q-route-tab to="/app/nutrition/cuisines/trash" label="Trash" exact />
      </q-tabs>
      <!-- The tables -->
      <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      class="no-shadow"
    >
    <!-- Name Column -->
    <template v-slot:body-cell-name="props">
      <td><a :href="`/app/nutrition/cuisines/${props.row.id}`">{{ props.row.name }}</a></td>
    </template>
    <!-- Action Column -->
    <template v-slot:body-cell-action="props">
        <td>
          <div class="row justify-center items-center">
            <q-btn
              flat round
              size="md"
              icon="edit"
              color="primary"
              class="col-auto q-mx-xs q-pa-sm"
            />
            <q-btn
              flat round
              size="md"
              icon="delete"
              color="negative"
              class="col-auto q-mx-xs q-pa-sm"
            />
          </div>
        </td>
      </template>
    </q-table>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        to="/app/nutrition/diet-types/create"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val, row) => `<a href="/path/to/other/page?id=${row.id}">${val}</a>`,
    sortable: true,
  },
  {
    name: "createdBy",
    label: "Created by",
    field: "name",
    sortable: true,
  },
  {
    name: "action",
    label: "Action",
    field: "action",
    sortable: false,
    align: "center",
    format: (value, row) => {
      return [
        {
          icon: "edit",
          label: "Edit",
          handler: () => {
            // Handle edit action here
          },
        },
        {
          icon: "delete",
          label: "Delete",
          handler: () => {
        },
      },

      ];
    },
  },
];

export default {
  name: "MyTable",
  setup() {
    const selected = ref([]);
    const rows = ref([]);

    return {
      rows,
      columns,
      selected,

      filter: "",
      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },
    };
  },
};
</script>
