<template>
  <v-container>
    <v-banner max-width height="250" color="grey"></v-banner>
        <v-row class="text-center">
      <v-col cols="12">
 <v-sheet
    class="mx-auto pt-6"
    elevation="0"
    max-width="1500"
  >
      <v-row><v-list class="pt-6 pl-15"><v-list-item>
      <h2>บทเรียน</h2>
          <v-btn text class="ml-1 pt-2"><h4 style="color: #182768">ดูเพิ่มเติม >></h4></v-btn></v-list-item></v-list>
        </v-row>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-6"
          height="200"
          width="200"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
 <v-sheet
    class="mx-auto pt-0"
    elevation="0"
    max-width="1500"
  >
      <v-row><v-list class="pt-6 pl-15"><v-list-item>
      <h2>แบบทดสอบ</h2>
          <v-btn text class="ml-1 pt-2"><h4 style="color: #182768">ดูเพิ่มเติม >></h4></v-btn></v-list-item></v-list>
        </v-row>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-6"
          height="200"
          width="200"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import connectAPI from "@/services/connectAPI";
  export default {
    name: 'HomePage',

    data: () => ({
      testData: '',
      model: ''
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
