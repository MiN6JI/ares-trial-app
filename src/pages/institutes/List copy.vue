
<template>
  <q-page>
    <q-card class="q-ma-md">
      <!-- The Tabs -->
      <q-tabs align="left" indicator-color="primary" active-color="primary">
        <q-route-tab class="q-ml-md" to="/app/institutes/" label="All" exact />
        <q-route-tab to="/app/institutes/trash" label="Trash" exact />
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
        <!-- Search -->
        <template v-slot:top-left>
          <q-input
            borderless dense
            class="q-px-md"
            v-model="filter"
            :style="{ backgroundColor: '#F5F8FA', borderRadius: '5px'}"
            debounce="300"
            placeholder="Global Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- Delete and Export -->
        <template v-slot:top-right>
          <div class="q-gutter-sm">
            <q-btn
              class="q-px-md"
              unelevated
              outline rounded
              color="negative"
              icon-right="delete"
              label="Delete"
              no-caps
              @click="deleteTheSelected"
            />
            <q-btn
              class="q-px-md"
              unelevated
              rounded
              color="secondary"
              icon-right="file_upload"
              label="Export"
              no-caps
              @click="exportTable"
            />
          </div>
        </template>
        <!-- Contact -->
        <template v-slot:body-cell-contact="props">
          <td>
            <div class="row justify-center items-center">
              <q-icon
                flat round
                size="xs"
                name="email"
                color="primary"
                class="col-auto q-mx-xs q-pa-sm">
                <q-tooltip :content="props.row.email" position="top">{{ props.row.email }}</q-tooltip>
              </q-icon>
              <q-icon
                flat round
                size="xs"
                name="language"
                color="primary"
                class="col-auto q-mx-xs q-pa-sm">
                <q-tooltip :content="props.row.website" position="top">{{ props.row.website }}</q-tooltip>
              </q-icon>
              <q-icon
                flat round
                size="xs"
                name="call"
                color="primary"
                class="col-auto q-mx-xs q-pa-sm">
                <q-tooltip :content="props.row.mobile" position="top">{{ props.row.mobile }}</q-tooltip>
              </q-icon>
            </div>
          </td>
        </template>
        <!-- Action -->
        <template v-slot:body-cell-action="props">
          <td>
            <div class="row justify-center items-center">
              <q-btn
                flat round
                size="md"
                icon="edit"
                color="primary"
                class="col-auto q-mx-xs q-pa-sm"
                @click="editRow(props.row.id)"
              />
              <q-btn
                flat round
                size="md"
                icon="delete"
                color="negative"
                class="col-auto q-mx-xs q-pa-sm"
                @click=""
              />
            </div>
          </td>
        </template>
      </q-table>
      <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/institutes/create" />
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";
import { exportFile, useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();

function editRow(id) {
  router.push(`/app/institutes/edit/${id}`);
}

const filter= ref('')

const rows = ref([]);
const columns = [
  {
    name: "InstituteName",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "contact",
    label: "Contact",
    align: "center",
    sortable: false,
    format: (value, row) => {
      return [
        {
          icon: "email",
          label: "email",
          handler: () => {
            // Handle email action here

          },
        },
        {
          icon: "language",
          label: "Language",
          handler: () => {
            // Handle website action here
          },
        },
        {
          icon: "phone",
          label: "Phone",
          handler: () => {
            // Handle website action here
          },
        },
      ];
    },
  },
  { name: "city", label: "City", field: (row) => row.city.name, sortable: true },
  { name: "createdBy", label: "Created by", field: (row) => row.created_by.name },
  { name: "createdAt", label: "Created at", field: "created_at" },
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
        },
        {
          icon: "delete",
          label: "Delete",
        },
      ];
    },
  },
];
// Fetch data from API
onMounted(() => {
  Loading.show();
    api.get("/manage/institutes").then((response) => {
      rows.value = response.data;
      console.log(rows)
      Loading.hide();
    });
  });

// For Selected
const selected = ref([]);
const getSelectedString = (() => {
  return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
})

// delete Function
async function deleteTheSelected() {
  const cancel = Loading.show({
    spinner: "QSpinnerFacebook",
    message: "Deleting...",
  });
  try {
    // Delete selected rows here
    const deletedRows = await api.delete("deleteSelected", {
      data: { selectedRows: selected },
    });
    // Remove deleted rows from the table
    rows.value = rows.value.filter(
      (row) => !deletedRows.data.some((deletedRow) => deletedRow.id === row.id)
    );
    selected.value = [];
    $q.notify({
      type: "positive",
      message: "Selected rows deleted successfully!",
    });
  } catch (error) {
    $q.notify({
      type: "negative",
      message: "Failed to delete selected rows",
    });
  } finally {
    cancel();
  }
}




// For CSV
const wrapCsvValue = (val, formatFn, row) => {
    let formatted = formatFn !== void 0
      ? formatFn(val, row)
      : val

    formatted = formatted === void 0 || formatted === null
      ? ''
      : String(formatted)

    formatted = formatted.split('"').join('""')
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`
  }

// For Export
const $q = useQuasar();
const exportTable = (() => {
// naive encoding to csv format
const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          rows.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format,
            row
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
    })
}
})
</script>

