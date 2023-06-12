import { defineStore } from 'pinia'

export const usePatientStore = defineStore({
  id: 'patient',
  state: () => ({
    BasicInfo: {
      name: '',
      gender: '',
      date: '',
    },
    ContactInfo:{
      email: '',
      tel: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      address: '',
    },
    MedicalInfo:{
      disease: [],
      medicalOtherDisease: '',
    },
    FamilyInfo:{
      familydisease: [],
      familyOtherDisease: ''
    },
    LifestyleInfo:{
      exercise: '',
      hours: '',
      eatingFrequency: '',
      alcoholConsumption: '',
      cigarettesPerDay: '',
    }
  }),
  getters: {

  },
  actions:  {

  },
  persist: true,
})
