<template>
      <q-toolbar inset class="bg-white">
      <q-toolbar-title>
      <div class="row justify-end q-pa-md">
        <div class="col-10 text-h5 text-weight-medium">Institutes </div>
          <div class="col-2 text-right">
          <q-btn
          to="/meal-create"
          rounded no-caps
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
      dense class="q-pa-md"
      active-color="primary"
      indicator-color="primary"
      align="left"
      narrow-indicator
      >

      <q-tab
        name="all"
        label="All"/>

      <q-tab
        name="trash"
        label="Trash"/>

      </q-tabs>
      <q-separator />
    <q-tab-panels
    v-model="tab"
    animated >
    <q-tab-panel
        style="padding: 0px"
        name="all">
        <cuisineTableAll />
      </q-tab-panel>

      <q-tab-panel
      style="padding: 0px"
        name="trash">
        <cuisineTableTrash />
        </q-tab-panel>
        </q-tab-panels>

  </q-card>

  <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>

</template>

<script>
import { ref } from 'vue'
import cuisineTableAll from 'pages/excess/all.vue'
import cuisineTableTrash from 'pages/excess/trash.vue'

  export default {
    components: {
      cuisineTableAll,
      cuisineTableTrash,
    },
    setup(){
      return{
        tab: ref('all')
      }
    }
  }
</script>
