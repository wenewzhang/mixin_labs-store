<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs9>
        <v-card white color="primary">
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">Pay EOS by Mixin Messenger</label>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card white color="primary">
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Pay EOS through Deposit </label>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card white color="primary">
          <v-btn color="#ffee00" :to="{ name: 'create_order' }">Pay</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      picked: true
    }
  },
  methods: {
    async pay () {

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
