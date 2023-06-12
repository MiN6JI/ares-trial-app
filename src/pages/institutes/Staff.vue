<template>
  <div>
  <q-expansion-item
  class="shadow-1 overflow-hidden q-ma-md"
  style="border-radius: 10px"
  icon="description"
  label="General"
  header-class="bg-primary text-white"
  expand-icon-class="text-white"
  default-opened>
    <q-card class="q-ma-sm">
      <q-form class="q-gutter-sm">
        <div class="row q-gutter-sm">
          <div class="col">
            <q-input
            dense outlined
            type="text"
            v-model="staffName"
            label="Name"/>
          </div>
          <div class="col">
            <q-input
            dense outlined
            type="text"
            v-model="designation"
            label="Designation"/>
          </div>
          <div class="col">
            <q-select
            dense
            outlined
            v-model="staffType"
            :options="staffTypeOpt"
            option-label="name"
            option-value="id"
            label="Staff Type"
            />
          </div>
        </div>
        <div class="row q-gutter-sm">
          <div class="col">
            <q-input
            outlined dense
            v-model="qualification"
            label="Qualification"
            type="text"
            />
          </div>
        </div>
        <div class="row q-gutter-sm">
          <div class="col">
            <q-input
            dense
            outlined
            type="email"
            v-model="workEmail"
            label="Work Email"
            lazy-rules
            :rules="emailRules"
            />
        </div>
          <div class="col">
            <q-input
            dense
            outlined
            type="email"
            v-model="personalEmail"
            label="Personal Email"
            lazy-rules
            :rules="emailRules"
            />
        </div>
        <div class="col">
          <q-input
          dense
          outlined
          type="tel"
          v-model="mobile"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Mobile Phone Number"
          />
        </div>
        <div class="col">
          <q-input
          dense
          outlined
          type="tel"
          v-model="alternateMobile"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Alternate Mobile Number"
          />
        </div>
        </div>
        </q-form>
    </q-card>
  </q-expansion-item>
  <q-expansion-item
  class="shadow-1 overflow-hidden q-ma-md"
  style="border-radius: 10px"
  icon="password"
  label="Login Credentials"
  header-class="bg-primary text-white"
  expand-icon-class="text-white"
  default-opened>
    <q-card class="q-ma-sm">
      <div class="row">
        <div class="col-4">
          <q-input
      dense outlined
      :type="isPwd ? 'password' : 'text'"
      placeholder="Password"
      hint="john@1234">
      <template v-slot:prepend>
          <q-icon name="lock_open" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
        </div>
      </div>
    </q-card>
  </q-expansion-item>
  <q-expansion-item
  class="shadow-1 overflow-hidden q-ma-md"
  style="border-radius: 10px"
  icon="work"
  label="Assign Role"
  header-class="bg-primary text-white"
  expand-icon-class="text-white"
  default-opened>
    <q-card class="q-ma-sm">
      <div class="row">
        <div class="col">
          <q-option-group
          v-model="roleGroup"
          :options="roleOpt"
          color="primary"
          type="checkbox"
          />
        </div>
      </div>
    </q-card>
  </q-expansion-item>

  <div class="row q-ma-md">
    <q-btn icon="done" label="Save" color="primary"/>
    <q-btn icon="done_all" label="Save and Add New" color="primary"/>
  </div>

  <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/institutes/" />
    </q-page-sticky>

  </div>
</template>

<script>
import { ref } from 'vue';
  export default {
    setup() {
      return{
        staffName: ref(''),
        designation: ref(''),

        staffType: ref(''),
        staffTypeOpt: [
          {
            name: 'Medical',
            id: 1
          },
          {
            name: 'Non-Medical',
            id: 2
          },
        ],

        qualification: ref(''),

        workEmail: ref(''),
        personalEmail: ref(''),

        emailRules: [
        val => !!val || 'Email is required',
        val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Invalid email'
        ],


        mobile: ref(''),
        alternateMobile: ref(''),

        phoneRules: [
        val => val.trim().length > 0 || 'Phone number is required',
        val => /^\d{5} \d{5}$/.test(val) || 'Phone number should have a format of ##### #####'
        ],

        password: ref(''),
        isPwd: ref(true),

        roleGroup: ref(['op1']),

        roleOpt: [
        {
          label: 'Super Admin',
          value: 'op1'
        },
        {
          label: 'Nutritionist',
          value: 'op2'
        },
        {
          label: 'Institute Administrator',
          value: 'op3'
        },
        {
          label: 'Receptionist',
          value: 'op4'
        },
        {
          label: 'Technical Support',
          value: 'op5'
        },
        {
          label: 'Doctor',
          value: 'op6'
        },
        {
          label: 'Support',
          value: 'op7'
        },
        {
          label: 'Editor',
          value: 'op8'
        },
      ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
