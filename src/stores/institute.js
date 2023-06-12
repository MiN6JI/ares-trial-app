import { defineStore } from 'pinia'

export const useInstituteStore = defineStore({
  id: 'institute',
  state: () => ({
    generalInstiInfo: {
      instituteName: '',
      instituteType: [],
      instituteLogo: '',
    },
    instituteContactInfo: {
      instituteEmail: '',
      institutePhone: '',
      instituteAlternatePhone: '',
      instituteMobile: '',
      instituteAlternateMobile: '',
      instituteWebsite: '',
      instituteCountry: '',
      instituteState: '',
      instituteCity: '',
      institutePincode: '',
      instituteAddress: '',
    },
  }),
  persist: true,
})
