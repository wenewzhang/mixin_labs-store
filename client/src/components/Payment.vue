<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs9>
        <v-card white color="primary">
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Pay EOS by Mixin Messenger</option>
            <option>Pay EOS through Deposit</option>
          </select>
          <span>Selected: {{ selected }}</span>
        </v-card>
      </v-flex>
        <v-flex xs9>
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
      selected: 'Pay EOS by Mixin Messenger'
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
