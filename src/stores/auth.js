import { defineStore } from 'pinia'
import { api } from "boot/axios";
import { Notify, LocalStorage, Loading } from "quasar";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    isAuthenticated: false,
  }),

  getters: {
    userData(state) {
      return state.user;
    }
  },

  actions: {
    /**
     * Attempt to login a user
     * @param {string} username
     * @param {string} password
     */

    async login(payload) {
      Loading.show();

      api
        .post("/manage/rbac/login", payload)
        .then((response) => {
          Loading.hide();

          this.user = response.data;
          this.isAuthenticated = true;

          console.log(response.data.meta.token.original.access_token);

          LocalStorage.set("token", response.data.meta.token.original.access_token);

          api.defaults.headers.common.Authorization = "Bearer " + LocalStorage.getItem("token");

          this.router.push("/app/dashboard");
        }).catch((error) =>{
          Loading.hide();

          console.log(error.response)

          var errorMessage = error.response.data.error;

          Notify.create({
            message : errorMessage
          });
        })
    },
  },

  persist: true,
})
