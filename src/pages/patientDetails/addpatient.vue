<template>
  <div class="q-ma-md">
    <q-card>
      <q-card-selection>
        <div class="row q-ma-md q-px-sm q-py-lg">
          <div class="col flex inline shadow-box flex-center" v-for="n in 6" :key="n" style="height: 50px;" >
            <div class="col text-center">
              <div class="inline-block q-px-md q-py-sm" style="border-radius: 50%; border: 1px solid grey;">{{ n }}</div>
            <div class="q-ma-md">Basic</div>
            </div>
          </div>
        </div>
        <basicForm />
        <contactForm />
      </q-card-selection>
    </q-card>
  </div>
</template>

<script setup>
import basicForm from '../patientDetails/basic.vue'
import contactForm from '../patientDetails/contact.vue'
</script>

