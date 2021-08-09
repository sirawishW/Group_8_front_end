<template>
  <div class="d-flex justify-center mt-10">
    <v-card class="bg" width="700" height="800">
      <div class="d-flex justify-end mr-5 mt-5">
        <v-btn text right @click="back()">กลับสู่หน้าหลัก</v-btn>
      </div>

      <div class="text-h5 pl-5 pt-10">
        <h5 class="bg-white pl-2 rounded-xl">{{ this.lesson.title }}</h5>
      </div>
      <div class="d-flex justify-center pt-5">
        <iframe
          width="560"
          height="315"
          :src="this.lesson.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <v-card-text class="ml-15 bg-white rounded-xl">
        {{ this.lesson.Description }}
      </v-card-text>
      <div class="d-flex justify-center pb-10 mt-16">
        <v-btn
          color="green"
          v-if="!checkIfStudy && dataUser"
          @click="checkStudyLesson"
          >เช็คชื่อเข้าเรียน</v-btn
        ><v-btn color="green" v-if="checkIfStudy && dataUser" disabled
          >เช็คชื่อเข้าเรียนแล้ว</v-btn
        ><v-btn color="green" v-if="!dataUser" disabled
          >เข้าสู่ระบบก่อนเช็คชื่อ</v-btn
        >
      </div>
      </v-card
    >
  </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  data: () => ({
    // lesson : null,
    idUser: null,
    checkIfStudy: false,
    dataUser: null,
    userLessons: [],
    lesson: null,
  }),
  mounted() {
    this.getLesson(window.localStorage.lessonID)
  },
  computed: {
    // lesson: {
    //   get: function () {
    //     return this.$store.lesson;
    //   },
    // },
  },
  methods: {
    back(){
      window.localStorage.removeItem("lessonID");
      this.$router.push("/");
    },
  async  getLesson(id){
    await connectAPI.getAPIWithToken("lessons/" + id).then((res) =>{
      this.lesson = res;
      this.checkLessons();
    })
    },
    checkLessons() {
      if (window.localStorage.user) {
        this.dataUser = JSON.parse(window.localStorage.user);
        this.getDataUser();
      } else {
        this.checkIfStudy = true;
      }
    },
    async checkStudyLesson() {
      this.userLessons.push(this.lesson);
      await connectAPI
        .putAPI("users/" + this.dataUser.id, { lessons: this.userLessons })
        .then((res) => { 
          this.getDataUser();      
        });
    },
   async getDataUser(){
      await connectAPI
          .getAPIWithToken("users/" + this.dataUser.id)
          .then((res) => {
            this.userLessons = res.lessons;
            for (var i = 0; i < res.lessons.length; i++) {
              if (res.lessons[i].id == this.lesson.id) {
                this.checkIfStudy = true;
              }
            }
          });
    }
  },
};
</script>

<style>
.bg {
  background: url("../assets/5591276.jpg");
  background-size: cover;
}
.bg-white {
  background-color: white;
  border: white 1px solid;
  border-radius: 5;
}
</style>