<template>

<div class="row q-pa-md">

  <div class="col-12">
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="tips_and_updates"
      label="Plan Details"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
      default-opened
      >
      <q-card class="my-card">
        <q-card-section class="q-pa-lg">
            <div class="row">

              <div class="col q-my-md q-mr-md">
                <div class="row">
                  <div class="col">Name *</div>
                  <div class="col text-right">
                    <q-icon name="info_outline" size="1.2rem" style="padding: 5px;" >
                      <q-tooltip
                      anchor="top middle" self="bottom middle"
                      :offset="[10, 10]">
                        Plan name should <br> be unique
                      </q-tooltip>
                    </q-icon>
                  </div>
                </div>
                <q-input
                dense borderless
                :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                placeholder="Meal Plan Name"
                v-model="text"
                />
              </div>

              <div class="col q-my-md q-mr-md">
                <div class="row">
                  <div class="col">Slug *</div>
                  <div class="col text-right">
                    <q-icon name="info_outline" size="1.2rem" style="padding: 5px;" >
                      <q-tooltip
                      anchor="top middle" self="bottom middle"
                      :offset="[10, 10]">
                        Auto generated <br> you can override it
                      </q-tooltip>
                    </q-icon>
                  </div>
                </div>
                <q-input
                dense borderless
                :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                placeholder="Meal Plan Slug"
                v-model="text"
                />
              </div>

            </div>

            <div class="row">

              <div class="col q-my-md q-mr-md">

              <div class="col">Duration</div>
                <q-input
                dense borderless
                :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                color="indigo"
                placeholder="eg. 4 weeks"
                v-model="text"
                />
              </div>

              <div class="col q-my-md q-mr-md">
                <div class="col">Diet Type *</div>
                  <q-select
                  dense borderless
                  :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                  label="Select a Diet Type"
                  color="indigo"
                  v-model="model"
                  :options="options"
                  >
                    <template v-if="model" v-slot:append>
                      <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
                    </template>
                  </q-select>
              </div>

              <div class="col q-my-md q-mr-md">
                <div class="col">Diet Type *</div>
                  <q-select
                  dense borderless
                  :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                  label="Select a Meal Preference"
                  color="indigo"
                  v-model="model"
                  :options="options"
                  >
                    <template v-if="model" v-slot:append>
                      <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
                    </template>
                  </q-select>
              </div>

              <div class="col q-my-md q-mr-md">
                <div class="col">Diet Type *</div>
                  <q-select
                  dense borderless
                  :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
                  label="Select a Cuisine"
                  color="indigo"
                  v-model="model"
                  :options="options"

                  >
                    <template v-if="model" v-slot:append>
                      <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
                    </template>
                  </q-select>
              </div>

            </div>

            <div class="q-my-md q-mr-md">Discription
              <q-input
              dense borderless
              :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
              placeholder="Select a Meal Preference"
              color="indigo"
              v-model="address"
              type="textarea"
              />
            </div>

        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>

  <!-- +++++++++++++++++++++++++++++++++++++++++++ The Division +++++++++++++++++++++++++++++++++++++++++++ -->

  <div class="col-12 q-mt-lg">
    <q-expansion-item
    class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="featured_play_list"
      label="Recommended Dietary Allowance"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
      default-opened
      >
      <q-card class="my-card">
        <q-card-section class="q-pa-lg">

        <div class="row">

        <div class="col q-my-md q-mr-md">
        <div class="col">Energy(Kcal)</div>
          <q-input
          dense borderless
          :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
          placeholder="Energy"
          color="indigo"
          v-model.number="model"
          type="number"
          />
        </div>

        <div class="col q-my-md q-mr-md">
        <div class="col">Protein (grams)*</div>
          <q-input
          dense borderless
          :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
          placeholder="Protein"
          color="indigo"
          v-model.number="model"
          type="number"
          />
        </div>

        <div class="col q-my-md q-mr-md">
        <div class="col">Carbohydrate (grams)*</div>
          <q-input
          dense borderless
          :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
          placeholder="Carbohydrate"
          v-model.number="model"
          type="number"
          />
        </div>

        <div class="col q-my-md q-mr-md">
        <div class="col">Fats (grams)*</div>
          <q-input
          dense borderless
          :style="{ backgroundColor: '#eff1f7', borderRadius: '5px', padding: '0px 10px' }"
          placeholder="Fats"
          v-model.number="model"
          type="number"
          />
        </div>

        </div>

        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>

  <!-- +++++++++++++++++++++++++++++++++++++++++++ The Division +++++++++++++++++++++++++++++++++++++++++++ -->

  <div class="col-12 q-mt-lg">
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      icon="text_snippet"
      label="Instruction / Notes"
      header-class="bg-secondary text-white"
      expand-icon-class="text-white"
      default-opened
      >
      <q-card class="my-card">
        <q-card-section class="q-pa-lg">

          <q-editor v-model="editor"
          toolbar-text="text-h6"
          :toolbar="[
        [{
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          }],

          [{
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          }],

        ['bold', 'italic', 'underline'],
        [{
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          'unordered', 'ordered'],
          ['link', 'removeFormat', 'viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
          />

        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>

  <div class="col-12 q-mt-lg">
    <q-expansion-item
    class="show-1 overflow-hidden"
    style="border-radius: 10px"
    icon="bento"
    label="Meal Plan"
    header-class="bg-secondary text-white"
    expand-icon-class="text-white"
    default-opened
    >
    <q-card class="my-card">
      <q-card-section class="q-pa-lg">
        <div class="row justify-center" Rounded>
          <q-btn
          class="text-white"
          label="+ Meal Plan"
          rounded color="positive"
          >
          </q-btn>
        </div>
      </q-card-section>
    </q-card>

    </q-expansion-item>
  </div>

</div>

</template>

<script>
import {ref} from 'vue'

  export default {
    setup(){
      return{
        model: ref(null),
        options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
        text: ref(''),
        editor: ref('What you see is <b>what</b> you get.')
      }
    }
  }
</script>
