<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card white color="primary">
          <div class="danger-alert" v-html="error" />
          <p>{{encodedStr}}</p>
          <p>{{decodedStr}}</p>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card white color="primary">
        <v-select v-model="paymentMethod"
          :items="items"
          item-text="value"
          box
          persistent-hint
          return-object
          single-line
          label="Please select one payment method:"
          @change="get_asset_list"
        ></v-select>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="n in assets"
            :key="n.asset"
            :label="`${n.asset + '(' + n.amount + ')'}`"
            :value="n.asset"
          ></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex xs12>
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
      paymentAsset: null,
      decodedStr: null,
      encodedStr: null,
      items: [ {value: 'Pay by Mixin Messenger', source: 'mixin'},
               {value: 'Transfer from my wallet ', source: 'deposit'},
             ],
      error: null,
      assets: [ {asset: 'EOS', amount: '1'} ]
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
        } else {
          this.error = response.status
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async get_asset_list () {
      try {
        const response = await AuthenticationService.asset_list({
          pid: '0'
        })
        if (response.status === 200) {
          this.assets = response.data.data
        } else {
          this.error = response.status
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
