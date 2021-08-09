<template>
  <v-container>
    <div class="d-flex justify-center">
    <img src="../assets/banner.svg" alt="" width="1400" ></div>
        <v-row class="text-center">
      <v-col cols="12">
 <v-sheet
    class="mx-auto pt-6"
    elevation="0"
    max-width="1500"
  >
      <v-row><v-list class="pt-6 pl-15"><v-list-item>
      <h2>บทเรียน</h2>
          <v-btn text class="ml-1 pt-2" @click="moreLessons()"><h4 style="color: #182768" v-if="!more_lessons">ดูเพิ่มเติม >></h4><h4 style="color: #182768" v-if="more_lessons"><< ย่อลง </h4></v-btn></v-list-item></v-list>
        </v-row>
    <v-slide-group
      class="pa-4"
      show-arrows
      v-model="select"
      v-if="!more_lessons"
    >
      <v-slide-item
        v-for="n in lessons"
        :key="n"
        v-slot="{ active, toggle }"

      >
        <v-card
          :color="active ? '#FFD66B' : '#88e0bc'"
          class="ma-6"
          height="250"
          width="250"
          @click="toggle"
        >
        <v-img
      height="150"
      :src="n.cover_picture ? url + n.cover_picture.url : ''"
    ></v-img>
        <v-card-title primary-title class="subtitle-1 d-flex justify-center pb-1">
          {{ n.title }}
        </v-card-title>
        <v-card-text class="d-flex justify-start pt-0" v-if="!active">
          <div style="width: 230px; overflow-y: hidden; height: 40px">{{ n.Description }}</div>
        </v-card-text>
        <v-card-actions 
      class="d-flex justify-center mt-2">
      <v-btn
        color="#794C74"
        depressed
        @click="changePage"
        v-if="active"
        fixed
        dark
      >
        เข้าสู่เนื้อหา
      </v-btn>
    </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-item-group >
    <div v-if="more_lessons" class="more-item">
      <v-row class="pl-10">
        <v-col
          v-for="n in lessons"
        :key="n"
          cols="10"
          md="3"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
          :color="active ? '#FFD66B' : '#88e0bc'"
          class="ma-6"
          height="250"
          width="250"
          @click="toggle"
        >
        <v-img
      height="150"
      :src="n.cover_picture ? url + n.cover_picture.url : ''"
    ></v-img>
        <v-card-title primary-title class="subtitle-1 d-flex justify-center pb-1">
          {{ n.title }}
        </v-card-title>
        <v-card-text class="d-flex justify-start pt-0" v-if="!active">
          <div style="width: 230px; overflow-y: hidden; max-height: 40px">{{ n.Description }}</div>
        </v-card-text>
        <v-card-actions 
      class="d-flex justify-center mt-2 pt-0">
      <v-btn
        color="#794C74"
        depressed
        @click="changePage"
        v-if="active"
        dark
      >
        เข้าสู่เนื้อหา
      </v-btn>
    </v-card-actions>
              </v-card>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>
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
          <v-btn text class="ml-1 pt-2" @click="moreQuizzes()"><h4 style="color: #182768" v-if="!more_quizzes">ดูเพิ่มเติม >></h4><h4 style="color: #182768" v-if="more_quizzes"><< ย่อลง </h4></v-btn></v-list-item></v-list>
        </v-row>
    <v-slide-group
      v-model="quizModel"
      class="pa-4"
      show-arrows
      v-if="!more_quizzes"
    >
            <v-slide-item
        v-for="n in quizs"
        :key="n"
        v-slot="{ active , toggle }"
      >
        <v-card
          :color="active ? '#77ACF1' : '#FFAA4C'"
          class="ma-6"
          :height="active ? '280' : '250'"
          width="250"
          @click="toggle"
        >
        <v-img
      height="150"
      :src="n.cover_picture ? url + n.cover_picture.url : ''"
    ></v-img>
        <v-card-title primary-title>
          {{ n.title }}
        </v-card-title>
        <v-card-text class="d-flex justify-start pt-0">
          <div style="width: 230px; overflow-y: hidden; height: 40px">{{ n.Description }}</div>
        </v-card-text>
        <v-card-actions 
      class="d-flex justify-end">
      <v-btn
        color="black lighten-2"
        text
        @click="reserve"
        v-if="active"
      >
        เข้าสู่แบบทดสอบ
      </v-btn>
    </v-card-actions>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="activeItem"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
                    <v-item-group >
    <div v-if="more_quizzes" class="more-item">
      <v-row class="pl-10">
        <v-col
          v-for="n in quizzes"
        :key="n"
          cols="10"
          md="3"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
          :color="active ? '#FFD66B' : '#88e0bc'"
          class="ma-6"
          height="250"
          width="250"
          @click="toggle"
        >
        <v-img
      height="150"
      :src="n.cover_picture ? url + n.cover_picture.url : ''"
    ></v-img>
        <v-card-title primary-title class="subtitle-1 d-flex justify-center pb-1">
          {{ n.title }}
        </v-card-title>
        <v-card-text class="d-flex justify-start pt-0" v-if="!active">
          <div style="width: 230px; overflow-y: hidden; max-height: 40px">{{ n.Description }}</div>
        </v-card-text>
        <v-card-actions 
      class="d-flex justify-center mt-2 pt-0">
      <v-btn
        color="#794C74"
        depressed
        @click="changePage"
        v-if="active"
        dark
      >
        เข้าสู่แบบทดสอบ
      </v-btn>
    </v-card-actions>
              </v-card>
          </v-item>
        </v-col>
      </v-row>
    </div>
  </v-item-group>
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
      url : "http://localhost:8082",
      testData: '',
      model: '',
      lessons: null,
      quizs: null,
      select: null,
      quizModel: '',
      more_lessons: false,
      more_quizzes: false,
    }),
      mounted(){
this.getLessons()
  },
  methods:{
    async getLessons(){
      await connectAPI.getAPI("lessons").then((res) => {
        this.lessons = res;
      })
    },
    changePage(){
      this.$store.lesson = this.lessons[this.select];
      this.$router.push("/lesson");
    },
    moreLessons(){
      this.more_lessons = !this.more_lessons;
    },
    moreQuizzes(){
      this.more_quizzes = !this.more_quizzes;
    }
  },
};
</script>
<style scoped>
.more-item{
  overflow-y: auto !important; 
  max-height:700px; 
  overflow-x: hidden !important;
}
</style>
