import { defineStore } from 'pinia'

export const useVitalStore = defineStore({
  id: 'vital',
  state: () => ({
    weight: '',
    height: '',
    waistCircumference: '',
    bmi: '',
    bmr: '',
    HBA1C: '',
    fbg: '',
    plbg: '',
    rbg: '',
    cholesterol: '',
    temperature: '',
    pulse: '',
    systolic: '',
    diastolic: '',
    respirationRate: '',
    abos: '',
  }),
  getters: {
    // add getters if required
  },
  actions: {
    // add actions if required
  },
  persist: true,
})
