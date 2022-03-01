<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-2/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col sm:w-full md:w-full lg:w-full d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Bienvenido</h4>
                </div>
                <vs-tabs>
                  <vs-tab label="Credicash">
                <div>
                  <vs-input v-validate="'required'" data-vv-validate-on="blur" name="user" icon-no-border
                    icon="icon icon-user" icon-pack="feather" label-placeholder="Usuario" v-model="user"
                    class="w-full" />
                  <span class="text-danger text-sm">{{ errors.first('user') }}</span>

                  <vs-input data-vv-validate-on="blur" v-validate="'required|min:6'" type="password"
                    name="password" icon-no-border icon="icon icon-lock" icon-pack="feather"
                    label-placeholder="Contraseña" v-model="password" class="w-full mt-6" @keyup.enter="loginJWT" />
                  <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                  <div class="flex flex-wrap justify-between my-5">
                  <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Recuérdame</vs-checkbox>
              </div>
                  <div class="flex flex-wrap justify-between mb-3">
                    <vs-button :disabled="!validateForm" @click="loginJWT">Iniciar sesión</vs-button>
                  </div>
                </div>
                  </vs-tab>
                </vs-tabs>


              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
  import { Validator } from 'vee-validate'
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  Vue.directive('VeeValidate', VeeValidate)
  Vue.use(VeeValidate, {
    inject: true
  })
  const dict = {
    custom: {
      user: {
        required: 'El usuario es requerido',
      },
      password: {
        required: 'La contraseña es requerida',
        min: 'La contraseña debe ser al menos de 6 caracteres'
      }
    }
  };
  Validator.localize('es', dict);
  export default {
    data() {
      return {
        user: '',
        password: '',
        checkbox_remember_me: false
      }
    },
    computed: {
      validateForm() {
        return !this.errors.any() && this.user != '' && this.password != '';
      },
    },
    methods: {
      checkLogin() {
        // If user is already logged in notify
        if (this.$store.state.auth.isUserLoggedIn()) {

          // Close animation if passed as payload
          // this.$vs.loading.close()

          this.$vs.notify({
            title: 'Login Attempt',
            text: 'You are already logged in!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          })

          return false
        }
        return true
      },
      loginJWT() {

        if (!this.checkLogin()) return

        // Loading
        this.$vs.loading()

        const payload = {
          checkbox_remember_me: this.checkbox_remember_me,
          userDetails: {
            user: this.user,
            password: this.password
          }
        }

        this.$store.dispatch('auth/loginJWT', payload)
          .then(() => { this.$vs.loading.close() })
          .catch(error => {
            this.$vs.loading.close()
            this.$vs.notify({
              title: 'Error',
              text: error.message,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
          })
      },
      registerUser() {
        if (!this.checkLogin()) return
        this.$router.push('/pages/register').catch(() => { })
      }
    }
  }

</script>
<style lang="scss">
  .login-tabs-container {
    min-height: 505px;

    .con-tab {
      padding-bottom: 14px;
    }

    .con-slot-tabs {
      margin-top: 1rem;
    }
  }
</style>
