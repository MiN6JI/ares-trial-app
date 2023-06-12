<template>
  <div>
    <q-toolbar class="bg-white q-px-lg">
      <q-toolbar-title>
        <div class="row items-center">
          <div class="col">
            <h1 class="text-h5 text-weight-medium">Patients</h1>
          </div>
          <div class="col-auto">
            <q-btn
              rounded
              no-caps
              to="/addPatient"
              color="primary"
              icon="add"
              label="New"
            />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>

    <q-card class="q-ma-md">
      <q-tabs
        v-model="tab"
        dense
        class="q-pa-md"
        active-color="primary"
        indicator-color="primary"
        align="left"
        narrow-indicator
      >
        <q-tab name="all" label="All" />

        <q-tab name="trash" label="Trash" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel style="padding: 0px" name="all">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            v-model:selected="selected"
            :filter="filter"
            no-data-label="I didn't find anything for you"
          >
            <template v-slot:top-left>
              <q-input
                class="q-px-md"
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <template v-slot:top-right>
              <q-btn
                class="q-px-md"
                rounded
                color="secondary"
                icon-right="file_upload"
                label="Export"
                no-caps
                @click="exportTable"
              />
            </template>

            <template v-slot:body-cell-action="props">
              <div class="row justify-center items-center">
                <q-btn
                  flat
                  dense
                  icon="edit"
                  class="col-auto"
                  @click="props.row.action[0].handler()"
                />
                <q-btn
                  flat
                  dense
                  icon="delete"
                  class="col-auto"
                  @click="props.row.action[1].handler()"
                />
              </div>
            </template>
          </q-table>
        </q-tab-panel>
        <q-tab-panel style="padding: 0px" name="trash">
          <cuisineTableTrash />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <div class="q-pa-lg">
      <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
    </div>
    <div></div>
  </div>
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

const rows = [
  {
    name: "Bindu",
    email: "bindu@gmail.com",
    contact: "46383007804",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "edit",
    icon: true,
  },
  {
    name: "CDF",
    email: "cdf@gmail.com",
    contact: "4679054215",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Dr Vishal",
    email: "healthcareprojects@hospertz.com",
    contact: "+91 98208 33149",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "John D",
    email: "johnd@gmail.com",
    contact: "+91 98335 35465",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Madhuri",
    email: "madhuri@gmail.com",
    contact: "283646292",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Marie",
    email: "marie@gmail.com",
    contact: "412387689",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Navin",
    email: "navin@gmail.com",
    contact: "3459023491",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    contact: "6792765280",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Rosa",
    email: "rosa@gmail.com",
    contact: "1234567891",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
  {
    name: "Sarita",
    email: "sarita@gmail.com    ",
    contact: "1349057480",
    city: "Mumbai",
    status: "Active",
    createdBy: "Cristabelle",
    action: "[inprogress]",
  },
];

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

