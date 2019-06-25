<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <font-awesome-icon icon="user-secret" />
      <font-awesome-icon icon="spinner" />
      <font-awesome-icon icon="align-left" />
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'Home'
        }">
        Mixin Store
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      flat
      dark
      :to="{
        name: 'orders'
      }">
      Orders
    </v-btn>
  </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
