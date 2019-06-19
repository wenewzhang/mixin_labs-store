<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <div class="danger-alert" v-html="error" />
      <br>
      <v-flex xs9>
        <v-card white color="primary">
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>mixin</option>
            <option>deposit</option>
          </select>
          <span>Selected: {{ selected }}</span>
        </v-card>
      </v-flex>
        <v-flex xs9>
        <v-card white color="primary">
          <v-btn color="#ffee00" @click="pay">Pay</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      selected: 'mixin'
    }
  },

  methods: {
    async pay () {
      try {
        const response = await AuthenticationService.pay({
          source: this.selected
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.one = true
    }, 2000)
  }
}
</script>

<style scoped>
</style>
