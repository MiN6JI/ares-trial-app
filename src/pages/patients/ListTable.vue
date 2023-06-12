  <template>
  <q-card class="q-ma-md">
      The Tabs
      <q-tabs align="left" indicator-color="primary" active-color="primary">
        <q-route-tab class="q-mx-md" to="/app/patients/" label="All" exact />
        <q-route-tab to="/app/patients/trash" label="Trash" exact />
      </q-tabs>
      The tables
      <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      class="no-shadow">
      <template v-slot:body-cell-name="props">
        <q-td key="name" :props="props" v-html="props.row.name"></q-td>
      </template>
      Action Column
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
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </template>

<script>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val, row) => `<a href="/app/patients/${row.id}">${val}</a>`,
    sortable: true,
  },
  {
    name: "email",
    label: "Email",
    field: "email",
    align: "left",
    sortable: true,
  },
  {
    name: "mobile",
    label: "Mobile",
    field: "mobile",
    align: "left",
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    field: "is_active",
    align: "left",
    sortable: true,
  },
  {
    name: "createdby",
    label: "Created By",
    field:  row => row.created_by.name,
    align: "left",
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

    // Fetch data from API
    onMounted(() => {
      Loading.show();
      api.get("/manage/patients").then((response) => {
        rows.value = response.data;
        console.log(rows)
        Loading.hide();
      });
    });

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
