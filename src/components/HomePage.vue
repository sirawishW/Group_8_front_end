<template>
  <v-container>
    <div class="d-flex justify-center">
      <img src="../assets/banner.svg" alt="" width="1400" />
    </div>
    <v-row class="text-center">
      <v-col cols="12">
        <v-sheet class="mx-auto pt-6" elevation="0" max-width="1500">
          <v-row
            ><v-list class="pt-6 pl-15"
              ><v-list-item>
                <v-btn
                  class="d-flex justify-end mr-5"
                  color="green"
                  dark
                  depressed
                  v-if="userData && userData.role.name == 'Admin'"
                  @click="addDialog()"
                  >เพิ่มบทเรียน</v-btn
                >
                <h2>บทเรียน</h2>
                <v-btn text class="ml-1 pt-2" @click="moreLessons()"
                  ><h4 style="color: #182768" v-if="!more_lessons">
                    ดูเพิ่มเติม >>
                  </h4>
                  <h4 style="color: #182768" v-if="more_lessons">
                    << ย่อลง
                  </h4></v-btn
                >
                <v-list v-if="userData && more_lessons && userData.role.name == 'Student'">
                  <v-list-item>
            <v-checkbox
              v-model="filter"
              label="เรียนแล้ว"
              color="green"
              value="1"
              hide-details
              class="pr-5 mb-2"
            ></v-checkbox>
            <v-checkbox
              v-model="filter"
              label="ยังไม่เรียน"
              color="red"
              value="2"
              hide-details
              class="mb-2"
            ></v-checkbox></v-list-item></v-list>
                </v-list-item
              ></v-list
            >
          </v-row>
          <v-slide-group
            class="pa-4"
            show-arrows
            v-model="select"
            v-if="!more_lessons"
          >
            <v-slide-item
              v-for="n in allLessons"
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
              <div v-if="n.active==1" style="background-color: #C2C2C2">เช็คอินแล้ว</div>
                <v-img
                  v-if="n.cover_picture"
                  :height="n.active==1 ? 120 : 150"
                  :src="url + n.cover_picture.url"
                ></v-img>
                <v-img
                  v-else
                  height="150"
                  src="../assets/MjUzMzcyNTg4.jpg"
                ></v-img>
                <v-card-title
                  primary-title
                  class="subtitle-1 d-flex justify-center pb-1 card-title"
                >
                  {{ n.title }}
                </v-card-title>
                <v-card-text class="d-flex justify-start pt-0" v-if="!active">
                  <div style="width: 230px; overflow-y: hidden; height: 40px">
                    {{ n.Description }}
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-center mt-2">
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
          <v-item-group v-model="select">
            <div v-if="more_lessons" class="more-item">
              <v-row class="pl-10">
                <v-col v-for="n in itemLessions" :key="n" cols="10" md="3">
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? '#FFD66B' : '#88e0bc'"
                      class="ma-6"
                      height="250"
                      width="250"
                      @click="toggle"
                    ><div v-if="n.active==1" style="background-color: #C2C2C2">เช็คอินแล้ว</div>
                      <v-img
                        v-if="n.cover_picture"
                        :height="n.active==1 ? 120 : 150"
                        :src="url + n.cover_picture.url"
                      ></v-img>
                      <v-img
                        v-else
                        height="150"
                        src="../assets/MjUzMzcyNTg4.jpg"
                      ></v-img>

                      <v-card-title
                        class="subtitle-1 d-flex justify-center pb-1 card-title"
                      >
                        {{ n.title }}
                      </v-card-title>
                      <v-card-text
                        class="d-flex justify-start pt-0"
                        v-if="!active"
                      >
                        <div
                          style="
                            width: 230px;
                            overflow-y: hidden;
                            max-height: 40px;
                          "
                        >
                          {{ n.Description }}
                        </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-center mt-2 pt-0">
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
        <v-sheet class="mx-auto pt-0" elevation="0" max-width="1500">
          <v-row
            ><v-list class="pt-6 pl-15"
              ><v-list-item>
                <h2>แบบทดสอบ</h2>
                <v-btn text class="ml-1 pt-2" @click="moreQuizzes()"
                  ><h4 style="color: #182768" v-if="!more_quizzes">
                    ดูเพิ่มเติม >>
                  </h4>
                  <h4 style="color: #182768" v-if="more_quizzes">
                    << ย่อลง
                  </h4></v-btn
                ></v-list-item
              ></v-list
            >
          </v-row>
          <v-slide-group
            v-model="count"
            class="pa-4"
            show-arrows
            v-if="!more_quizzes"
          >
            <v-slide-item
              v-for="n in set_quizs"
              :key="n"
              v-slot="{ active, toggle }"
            >
              <v-card
                :color="active ? '#77ACF1' : '#88e0bc'"
                class="ma-6"
                height="250"
                width="250"
                @click="toggle"
              >
                <v-img height="150" src="../assets/MjUzMzcyNTg4.jpg"></v-img>
                <v-card-title
                  primary-title
                  class="subtitle-1 d-flex justify-center pb-1 card-title"
                >
                  แบบทดสอบที่ : {{ n.set_quiz }}
                </v-card-title>
                <v-card-actions class="d-flex justify-center mt-2 pt-0">
                  <v-btn
                    color="#794C74"
                    depressed
                    @click="changePage1"
                    v-if="active && userData"
                    dark
                  >
                    เข้าสู่แบบทดสอบ
                  </v-btn>
                  <v-btn text v-if="active && !userData">
                    กรุณาเข้าสู่ระบบ
                  </v-btn>
                </v-card-actions>
                <v-row class="fill-height" align="center" justify="center">
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
          <v-item-group v-model="count">
            <div v-if="more_quizzes" class="more-item">
              <v-row class="pl-10">
                <v-col v-for="n in set_quizs" :key="n" cols="10" md="3">
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? '#77ACF1' : '#88e0bc'"
                      class="ma-6"
                      height="250"
                      width="250"
                      @click="toggle"
                    >
                      <v-img
                        height="150"
                        src="../assets/MjUzMzcyNTg4.jpg"
                      ></v-img>
                      <v-card-title
                        primary-title
                        class="subtitle-1 d-flex justify-center pb-1 card-title"
                      >
                        แบบทดสอบที่ : {{ n.set_quiz }}
                      </v-card-title>
                      <v-card-actions class="d-flex justify-center mt-2 pt-0">
                        <v-btn
                          color="#794C74"
                          depressed
                          @click="changePage"
                          v-if="active && userData"
                          dark
                        >
                          เข้าสู่แบบทดสอบ
                        </v-btn>
                        <v-btn text v-if="active && !userData">
                          กรุณาเข้าสู่ระบบ
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
    <v-dialog v-model="add_Dialog" height="550" width="500">
      <v-card height="550" width="500" class="rounded-xl bg-dialog">
        <v-card-title class="pt-10 pl-16">
          <h3>เพิ่มบทเรียน</h3>
        </v-card-title>
        <div style="width: 400px; padding-left: 90px">
          <v-form class="pt-2 pl-2" ref="form" v-model="valid" lazy-validation>
            <!-- <v-file-input
              label="ใส่รูปปก"
              filled
              v-model="picture"
              prepend-icon="mdi-camera"
            ></v-file-input> -->
            <v-text-field
              v-model="video"
              label="ลิ้งวีดีโอ"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
            <v-text-field
              v-model="title"
              label="หัวข้อ"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="คำอธิบาย"
              required
              dense
              outlined
              background-color="white"
            ></v-textarea>
            <div class="ml-2">
              <v-btn
                color="#690D90"
                dark
                depressed
                class="ml-16 mt-2"
                @click="addLessons"
                ><div v-if="!progessBtn">เพิ่มบทเรียน</div>
                <v-progress-circular
                  v-else
                  indeterminate
                  color="white"
                  size="20"
                ></v-progress-circular></v-btn
              ><v-btn @click="cancelForm" class="mt-2" text>ยกเลิก</v-btn>
            </div>
          </v-form>
        </div></v-card
      >
    </v-dialog>
    <v-snackbar v-model="snackbar" top>
      เพิ่มบทเรียนเรียบร้อย
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  name: "HomePage",

  data: () => ({
    filter : null,
    url: "http://localhost:8082",
    progessBtn: false,
    testData: "",
    model: "",
    lessons: null,
    quizs: null,
    select: null,
    quizModel: null,
    more_lessons: false,
    more_quizzes: false,
    add_Dialog: false,
    valid: "",
    title: "",
    video: "",
    description: "",
    picture: "",
    userData: "",
    snackbar: "",
    count: null,
    set_quizs: null,
    lessonsSort: [],
    lessonsNotSort:[],
    allLessons: [],
    itemLessions: []
  }),
  mounted() {
    // this.getLessonsFromUser();
    this.getLessons();
    this.getSetQuiz();
    if (window.localStorage.user) {
      this.userData = JSON.parse(window.localStorage.user);
    }
  },
  watch:{
    filter(){
      if(this.filter==1){
        this.itemLessions = this.lessonsSort;
      }
      if(this.filter==2){
        this.itemLessions = this.lessonsNotSort;
      }
      if(!this.filter){
        this.itemLessions = this.allLessons;
      }
    }
  },
  methods: {
    async addLessons() {
      var link = this.video.replace("watch?v=", "embed/");
      await connectAPI
        .postAPI("lessons", {
          title: this.title,
          Description: this.description,
          link: link,
        })
        .then((res) => {
          this.snackbar = true;
          this.add_Dialog = false;
          this.getLessons();
        });
    },
    cancelForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.add_Dialog = false;
    },
    addDialog() {
      this.add_Dialog = true;
    },
    async getLessons() {
      await connectAPI.getAPI("lessons?_sort=updated_at:ASC").then((res) => {
        if(this.userData){
        var findObj;
        var id = this.userData.id;
        this.lessons = res;
        for (var i = 0; i < res.length; i++) {
          findObj = res[i].users_permissions_users.filter(function (user) {
            return user.id == id;
          });
          if (findObj.length == 0) {
            res[i].active = 0;
            this.lessonsNotSort.push(res[i]);
          }
        }
        }else{
          this.itemLessions = res
          this.allLessons = res
        }
        
      });
      await this.getLessonsFromUser();
      this.allLessons = this.lessonsNotSort.concat(this.lessonsSort);
      this.itemLessions = this.allLessons;
    },
    async getLessonsFromUser() {
      await connectAPI.getAPI("users/" + this.userData.id).then((res) => {
        for (var i = 0; i < res.lessons.length; i++) {
          res.lessons[i].active = 1;
        }
        this.lessonsSort = res.lessons
      });
    },
    changePage() {
      this.$store.lesson = this.lessons[this.select];
      window.localStorage.setItem("lessonID", this.lessons[this.select].id);
      this.$router.push("/lesson");
    },
    moreLessons() {
      this.more_lessons = !this.more_lessons;
    },
    moreQuizzes() {
      this.more_quizzes = !this.more_quizzes;
    },
    async getSetQuiz() {
      await connectAPI.getAPI("set-quizs").then((res) => {
        this.set_quizs = res;
      });
    },
    changePage1() {
      this.$router.push("/quizz_entrance" + String(Number(this.count) + 1));
    },
  },
};
</script>
<style scoped>
.more-item {
  overflow-y: auto !important;
  max-height: 700px;
  overflow-x: hidden !important;
}
.card-title {
  max-height: 55px !important;
  overflow-y: auto !important;
}
.bg-dialog {
  background-image: url("../assets/bg-dialog.jpg");
  background-size: 500px 550px;
  background-position: center;
}
</style>
