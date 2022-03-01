<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.displayName">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ getName() }}</p>
      <small>{{ getRol() }}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img key="onlineImg" src="/images/profile.png" alt="user-img" width="40" height="40"
          class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Cerrar sesión</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    computed: {
      activeUserInfo() {
        return this.$store.state.AppActiveUser
      }
    },
    methods: {
      getName(){
        if(typeof(localStorage.getItem('userInfo'))==="undefined")
          return 'No Logueado';
        else
          return JSON.parse(localStorage.getItem('userInfo')).displayName
      },
      getRol(){
        if(typeof(localStorage.getItem('userInfo'))==="undefined")
          return 'No Logueado';
        else
          return JSON.parse(localStorage.getItem('userInfo')).userRole
      },
      logout() {
        if (localStorage.getItem("accessToken")) {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("userInfo")
          localStorage.removeItem("tokenExpiry")
          localStorage.removeItem("loggedIn")
          localStorage.removeItem("permitKey")
          this.$router.push('/pages/login').catch(() => { })
        }
      },
    }
  }
</script>