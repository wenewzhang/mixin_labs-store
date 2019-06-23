<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs9>
        <v-card white color="primary">
          <div class="danger-alert" v-html="error" />
          <p>{{encodedStr}}</p>
          <p>{{decodedStr}}</p>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card white color="primary">
        <v-select v-model="paymentMethod"
          :items="items"
          item-text="source"
          box
          persistent-hint
          return-object
          single-line
          label="Please select one payment method:"
        ></v-select>
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
      paymentMethod: null,
      decodedStr: null,
      encodedStr: null,
      items: [ {value: 'mixin', source: 'mixin'},
               {value: 'deposit', source: 'deposit'},
             ],
      error: null
    }
  },

  methods: {
    async pay () {
      try {
        // console.log(this.paymentMethod.source)
        const response = await AuthenticationService.pay({
          source: this.paymentMethod.source
        })
        if (response.status === 200) {
          if (response.data.source === 'deposit') {
            this.encodedStr = response.data.pay
            this.decodedStr = atob(response.data.pay)
          } else {
            var decodedStr = atob(response.data.pay)
            window.location.href = decodedStr
          }
        }
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
