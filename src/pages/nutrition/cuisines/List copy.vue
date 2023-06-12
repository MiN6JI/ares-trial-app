<template>
  <q-page>

    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

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
        to="/app/nutrition/cuisines/create"
      />
    </q-page-sticky>
  </q-page>
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

    // Fetch data from API
    onMounted(() => {
      Loading.show();
      api.get("/manage/nutrition/cuisines/").then((response) => {
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

<!--====================================================================================================================================================================== -->

<!-- <template>
  <q-page>
  <div class="q-ma-lg" style="width: 450px; border: 1px solid black; height: 500px;">
    <q-tabs class="q-mb-sm" indicator-color="primary" active-color="primary">
      <q-route-tab dense name="All" label="All" to="/app/nutrition/cuisiness" exact/>
      <q-route-tab dense name="Trash" label="Trash" to="/app/nutrition/cuisines/trashs" exact/>
    </q-tabs>
    <q-list separator bordered>
      <q-item v-ripple clickable v-for="(cuisine, cuisineIndex) in cuisineList" :key="cuisineIndex">
        <q-item-section>
          <q-item-label>{{ cuisine.name }}</q-item-label>
        </q-item-section>
          <q-item-section side>
            <q-btn dense flat rounded icon="arrow_forward_ios" />
          </q-item-section>
        </q-item>
    </q-list>
  </div>


    <pre>
      {{ cuisineList }}
    </pre>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        to="/app/nutrition/cuisines/create"
      />
    </q-page-sticky>
  </q-page>
</template> -->
<template>
  <q-page>

    <div class="q-ma-md" style="width: 450px; height: 500px; border: 1px solid black;">
      <q-tabs class="q-mb-sm" indicator-color="primary" active-color="primary">
      <q-route-tab dense name="All" label="All" to="/app/nutrition/cuisiness" exact/>
      <q-route-tab dense name="Trash" label="Trash" to="/app/nutrition/cuisines/trashs" exact/>
    </q-tabs>
    <div>
      <!-- <template v-slot:top-right> -->
        <div class="q-mx-md text-h6">Search</div>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" class="q-mx-sm">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      <!-- </template> -->
    </div>

    <q-list separator bordered class="q-my-md">
      <router-link v-for="(cuisine, cuisineIndex) in cuisineList" :key="cuisineIndex" :to="'/app/nutrition/cuisines/' + cuisine.id">
        <q-item v-ripple clickable>
          <q-item-section>
            <q-item-label>{{ cuisine.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn dense flat rounded icon="arrow_forward_ios" />
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <router-link to="/app/nutrition/cuisines/create">
        <q-btn fab icon="add" color="primary" />
      </router-link>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";
import { provide } from 'vue';

export default {
  setup() {
    const cuisineList = ref([]);

    onMounted(() => {
      Loading.show();
      api.get("/manage/nutrition/cuisines/").then((response) => {
        cuisineList.value = response.data;
        Loading.hide();
        provide('cuisineList', cuisineList.value)
      });
    });

    return {
      cuisineList,
    };
  },
};
</script>
