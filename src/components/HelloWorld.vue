<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
<div>Test get Data from strapi : {{ this.testData }}</div>
    </v-row>
  </v-container>
</template>

<script>
import connectAPI from "@/services/connectAPI";
  export default {
    name: 'HelloWorld',

    data: () => ({
      testData: '',
    }),
      mounted(){
this.getData()
  },
  methods:{
    async getData(){
      await connectAPI.getAPI("users").then((res) => {
        this.testData = res
        
        console.log("function run :");
        console.log(this.testData);
      })
    }
  }
  }
</script>
