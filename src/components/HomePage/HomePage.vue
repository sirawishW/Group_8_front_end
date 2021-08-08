<template>
  <v-container>
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      v-model = "dialog"
    >
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >{{ current_dialog.name }}</v-toolbar>
        <v-card-text>
          <youtube :video-id=" current_dialog.videoId " width="100%"/>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="dialog = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-banner max-width height="250" color="grey"></v-banner>
    <v-row class="text-center">
      <v-col cols="12">
        <v-sheet class="mx-auto pt-6" elevation="0" max-width="1500">
          <v-row
            ><v-list class="pt-6 pl-15"
              ><v-list-item>
                <h2>บทเรียน</h2>
                </v-list-item
              ></v-list
            >
          </v-row>
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item v-for="(n,index) in lessons" :key="index">
              <v-card
                :color="'grey lighten-1'"
                class="ma-6"
                height="200"
                width="200"
                @click = "setDialog(n.name,n.videoId); dialog = true;"
              >
                <v-row class="fill-height" align="center" justify="center">
                  {{ n.name }}
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-sheet class="mx-auto pt-0" elevation="0" max-width="1500">
          <v-row
            ><v-list class="pt-6 pl-15"
              ><v-list-item>
                <h2>แบบทดสอบ</h2>
                </v-list-item
              ></v-list
            >
          </v-row>
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-item v-for="(n,index) in exam" :key="index">
              <v-card
                :color="'grey lighten-1'"
                class="ma-6"
                height="100"
                width="200"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <router-link :to="`/${ n.path }`"
                      >{{ n.name }}</router-link
                    >
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
  name: "HomePage",

  data: () => ({
    testData: "",
    model: "",
    dialog: false,
    current_dialog:{},
    exam:[
      {
        name:'แบบทดสอบชุดที่ 1',
        path:'quizz_entrance1'
      },
      {
        name:'แบบทดสอบชุดที่ 2',
        path:'quizz_entrance2'
      }
    ],
    lessons:[
      {
        name:'บทเรียนบลาๆ',
        videoId:'iiADhChRriM'
      }
    ]
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await connectAPI.getAPI("users").then((res) => {
        this.testData = res;

        console.log("function run :");
        console.log(this.testData);
      });
    },
    setDialog(name,videoId){
      this.current_dialog = {
        name : name,
        videoId : videoId
      }
    }
  },
};
</script>
