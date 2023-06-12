<template>
  <q-page class="q-pa-md">
    <div>
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="today"
      label="General"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
              dense
              outlined
              placeholder="Meal Templates Name"
              type="text"
              v-model="mealTemplateName"
              />
            </div>
            <div class="col">
              <q-input
              dense
              outlined
              placeholder="Meal Templates Name"
              type="text"
              v-model="mealTemplateName"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/nutrition/meal/templates/" />
    </q-page-sticky>
    </q-page>
</template>
<script>
export default {
  setup() {},
};
</script>
