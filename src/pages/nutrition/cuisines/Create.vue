<template>
  <q-page>
    <q-form ref="createCuisines" @submit="submit" class="q-pa-md">
      <q-expansion-item
        class="shadow-1 overflow-hidden br-2 q-mb-md"
        icon="tips_and_updates"
        label="General"
        header-class="bg-secondary text-white"
        expand-icon-class="text-white"
        default-opened
      >
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="col-md-6 col-xs-12 q-pa-sm">
                <q-input
                  dense
                  outlined
                  v-model="text"
                  label="Name"
                  />
              </div>

              <div class="col-md-6 col-xs-12 q-pa-sm">
                <q-input
                dense
                outlined
                v-model="text"
                label="Slug"
                />
              </div>
            </div>

            <div class="col-md-12 col-xs-12 q-pa-sm">
              <q-editor
                v-model="editor"
                placeholder="Description"
                :toolbar="[
                  [
                    {
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
                        'size-7',
                      ],
                    },
                  ],

                  [
                    {
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
                        'verdana',
                      ],
                    },
                  ],

                  ['bold', 'italic', 'underline'],
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                    'unordered',
                    'ordered',
                  ],
                  ['link', 'removeFormat', 'viewsource'],
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana',
                }"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden br-2 q-mb-md"
        icon="tips_and_updates"
        label="SEO"
        header-class="bg-secondary text-white"
        expand-icon-class="text-white"
        default-opened
      >
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="col-md-12 col-xs-12 q-pa-sm">
                <q-input dense outlined v-model="text" label="Meta Title" />
              </div>

              <div class="col-md-12 col-xs-12 q-pa-sm">
                <q-input
                  dense
                  outlined
                  v-model="address"
                  type="textarea"
                  label="Meta Description"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <div class="row">
        <div class="q-pa-sm">
          <q-btn
            rounded
            no-caps
            class="q-mr-md"
            color="secondary"
            icon="done"
            label="Save"
          />
          <q-btn
            rounded
            no-caps
            class="q-mr-md"
            color="secondary"
            icon="done"
            label="Save &amp; add"
          />
        </div>
      </div>
    </q-form>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="clear_all"
        color="primary"
        to="/app/nutrition/cuisines/"
      />
    </q-page-sticky>
  </q-page>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      editor: ref(""),
    };
  },
};
</script>
