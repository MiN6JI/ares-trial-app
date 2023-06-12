<template>
  <q-page>
    <q-card class="q-ma-md">
      <q-tabs align="left" indicator-color="primary" active-color="primary">
      <q-route-tab class="q-mx-md" to="/app/patients" label="All" exact />
      <q-route-tab to="/app/patients/trash" label="Trash" exact />
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
      class="no-shadow">
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
      <q-btn fab icon="add" color="primary" to="/app/patients/create" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { exportFile, useQuasar } from "quasar";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
    sortable: true,
  },
  {
    name: "contact",
    align: "center",
    label: "Contact",
    field: "contact",
    sortable: true,
  },
  { name: "status", label: "Status", field: "status" },
  {
    name: "createdBy",
    label: "Created by",
    field: "createdBy",
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
            // Handle delete action here
          },
        },
      ];
    },
  },
];

const rows = ref([])

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}

export default {
  setup() {
    const selected = ref([]);

    const $q = useQuasar();

    return {
      tab: ref("all"),

      selected,

      filter: ref(""),

      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },

      exportTable() {
        // naive encoding to csv format
        const content = [columns.map((col) => wrapCsvValue(col.label))]
          .concat(
            rows.map((row) =>
              columns
                .map((col) =>
                  wrapCsvValue(
                    typeof col.field === "function"
                      ? col.field(row)
                      : row[col.field === void 0 ? col.name : col.field],
                    col.format,
                    row
                  )
                )
                .join(",")
            )
          )
          .join("\r\n");

        const status = exportFile("table-export.csv", content, "text/csv");

        if (status !== true) {
          $q.notify({
            message: "Browser denied file download...",
            color: "negative",
            icon: "warning",
          });
        }
      },
    };
  },
};
</script>

