<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-sm">
      <div class="text-h5 text-bold">{{ selectedItem.name }}</div>
    <!-- First Expansion item -->
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="assignment"
      label="Recommended Dietary Allowance (RDA)"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
      default-opened
    >
      <q-card>
        <q-card-section>
          <q-list>
            <q-item horizontal>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ selectedItem.energy }} KCal</q-item-label>
                <q-item-label caption>Energy</q-item-label>
              </q-item-section>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ selectedItem.fats }} gms</q-item-label>
                <q-item-label caption>Fats</q-item-label>
              </q-item-section>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ selectedItem.carbs }} gms</q-item-label>
                <q-item-label caption>Carbs</q-item-label>
              </q-item-section>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ selectedItem.protein }} gms</q-item-label>
                <q-item-label caption>Protein</q-item-label>
              </q-item-section>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ cuisine.name }}</q-item-label>
                <q-item-label caption>Cuisine</q-item-label>
              </q-item-section>
              <q-item-section style="border: 1px dashed grey; border-radius: 10px;" class="q-pa-sm text-center">
                <q-item-label lines="1">{{ mealPreference.name }}</q-item-label>
                <q-item-label caption>Meal Preference</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <!-- Second Expansion item -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="restaurant_menu"
      label="Meal Structure"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
      default-opened
    >
      <q-card>
        <!-- 1st Card -->
        <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="fastfood"
            label="Breakfast"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item>
                    <q-item-section>
                      Multigrain Roti / Bread with Egg White OR Upma/Poha/Lapsi upma
                    </q-item-section>
                    <q-item-section>
                      2 medium or 4 slices, egg (2 whites) OR 1 medium bowl
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
                <q-list>
                  <q-item>
                    <q-item-section>
                      Tea / Coffee (preferably no sugar)
                    </q-item-section>
                    <q-item-section>
                      1 cup
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
        <!-- 2nd Card -->
        <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="tapas"
            label="Mid morning Snack"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
        <!-- 3rd Card -->
        <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="dinner_dining"
            label="Lunch"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
       <!-- 4th Card -->
       <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="tapas"
            label="Evening Snack"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
        <!-- 5th Card -->
        <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="set_meal"
            label="Dinner"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
        <!-- 6th Card -->
        <q-card-section>
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 10px;"
            icon="tapas"
            label="Evening Snack"
            header-class="bg-grey-3"
            default-opened
            >
            <q-card>
              <q-card-section>
                <q-list>
                  <q-item v-if="selectedItem.meal_plan && selectedItem.meal_plan.length > 0">
                    <q-item-section>
                      {{ selectedItem.name}}
                    </q-item-section>
                    <q-item-section>
                      {{ selectedItem.meal_plan.length }}
                    </q-item-section>
                  </q-item>
                  <q-separator style="border-top: 1px dashed grey;"/>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <!-- Third Expansion item -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">{{ counter }}</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <!-- Fourth Expansion Item -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">{{ counter }}</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <!-- Fifth Expansion Item -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="description"
      label="Instructions / Notes"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <div v-if="selectedItem">
            <div v-html="selectedItem.instructions"></div>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    </div>
    <pre>{{ selectedItem }}</pre>
  </q-page>
</template>
<script>
import { api } from 'src/boot/axios'
export default {
  data() {
    return {
      selectedItem: [],
      cuisine: '',
      mealPreference: '',

      mealPlanData: {},

    }
  },
  mounted() {
    const id = this.$route.params.id
    api.get(`/manage/nutrition/meal-plan-templates/${id}`)
    .then(response => {
      this.selectedItem = response.data;
      this.cuisine = this.selectedItem.cuisine;
      this.mealPreference = this.selectedItem.meal_preference;

      this.instructionsData = this.selectedItem.instructionsData;

      this.mealPlanData = this.selectedItem.meal_plan;

    })
    .catch(error => {
      console.log(error)
    })
  },

}
</script>
<!-- <q-list>
  <q-item horizontal>
    <q-item-section>

    </q-item-section>
  </q-item>
</q-list> -->
