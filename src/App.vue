<template>
  <v-app>
    <v-app-bar
      app
      color="#001E6C"
      dark
      flat
      class="nav-bar"
      height="50px"
      key="appBar"
    >
      <div class="d-flex align-center">
        <v-icon large>mdi-music-accidental-sharp</v-icon>
        <h3>Music Hub</h3>
      </div>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/" icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-home</v-icon>
          </v-btn> </template
        ><span>หน้าหลัก</span></v-tooltip
      >
      <div>|</div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/note" icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-piano</v-icon>
          </v-btn> </template
        ><span>มินิเกมเปียโน</span></v-tooltip
      >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/shop" icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-shopping</v-icon>
          </v-btn> </template
        ><span>แลกคะแนน</span></v-tooltip
      >
      <v-tooltip bottom v-if="checkData && checkData.role.name == 'Admin'">
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/leaderboard" icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-trophy-variant</v-icon>
          </v-btn> </template
        ><span>ตารางคะแนน</span></v-tooltip
      >
      <div>|</div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" icon>
            <v-icon v-if="!checkData">mdi-login</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list color="#001E6C" dark class="pt-0">
          <v-list-item v-if="!checkData">
            <v-list-item-title
              @click="(dialog = true), (typeOfDialog = 'login'), (drawer = false)"
              ><v-btn text>เข้าสู่ระบบ</v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="!checkData">
            <v-list-item-title
              @click="(dialog = true), (typeOfDialog = 'regis'), (drawer = false)"
              ><v-btn text>สมัครสมาชิก</v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="checkData && checkData.role.name == 'Student'">
            <v-list-item-title
              ><v-btn text @click="callProfile()"
                >โปรไฟล์</v-btn
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="checkData">
            <v-list-item-title
              ><v-btn text @click="logout">ออกจากระบบ</v-btn></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-dialog v-model="dialog" height="450" width="450" persistent>
      <v-card height="450" width="450" class="rounded-xl bg-dialog"
        ><v-card-title v-if="typeOfDialog == 'login'" class="pt-10 pl-16">
          <h3>เข้าสู่ระบบ</h3>
        </v-card-title>
        <v-card-title v-if="typeOfDialog == 'regis'" class="pt-10 pl-16">
          <h3>สมัครสมาชิก</h3>
        </v-card-title>
        <div style="width: 350px; padding-left: 90px">
          <v-form class="pt-10" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="อีเมล"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
                        <v-tooltip left v-if="typeOfDialog == 'regis'">
              <template v-slot:activator="{ on, attrs }"  >
                <div class="pb-3" >
               รหัสผ่าน <v-icon v-bind="attrs" v-on="on">mdi-progress-question</v-icon></div>
              </template>
              รหัสผ่านจะต้องมี <br />
              – ความยาวมากกว่า 6 ตัวอักษร <br />
              – ตัวอักษร (a-z, A-Z) อย่างน้อย 1 ตัว <br />
              – ตัวเลข (0-9) <br /></v-tooltip
            >
            <v-text-field
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :rules="passwordRules"
              label="รหัสผ่าน"
              required
              dense
              outlined
              background-color="white"
            ></v-text-field>
            <v-text-field
              :append-icon="showComfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showComfirmPassword ? 'text' : 'password'"
              @click:append="showComfirmPassword = !showComfirmPassword"
              v-if="typeOfDialog == 'regis'"
              v-model="checkPassword"
              :rules="[checkPasswordRules, checkPasswordRulesMatch]"
              label="ยืนยันรหัสผ่าน"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
            <v-text class="d-flex justify-center" style="color:red" v-if="loginError">อีเมลหรือรหัสผ่านไม่ถูกต้อง</v-text>
            <v-text class="d-flex justify-center" style="color:red" v-if="regisError">อีเมลนี้ถูกใช้งานแล้ว</v-text>
            <div class="ml-2">
              <v-btn
                color="#690D90"
                dark
                depressed
                class="ml-16 mt-2"
                v-if="typeOfDialog == 'login'"
                @click="login"
                ><div v-if="!progessBtn">เข้าสู่ระบบ</div>
                <v-progress-circular
                  v-else
                  indeterminate
                  color="white"
                  size="20"
                ></v-progress-circular></v-btn
              ><v-btn
                color="#690D90"
                dark
                depressed
                class="ml-16 mt-2"
                v-if="typeOfDialog == 'regis'"
                @click="register"
                ><div v-if="!progessBtn">ลงทะเบียน</div>
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
    <v-navigation-drawer v-model="drawer" absolute right
      ><v-list class="pt-7">
        <v-icon
          @click="drawer = false"
          class="pt-8"
          style="padding-left: 83%"
          right
          >mdi-close</v-icon
        >
        <v-list-item class="px-2 d-flex justify-center">
          <v-list-item-avatar color="green" class="mt-1 ml-3" size="50">
            <h1 v-if="this.checkData">
              {{
                this.userData
                  ? this.userData.username.charAt().toUpperCase()
                  : ""
              }}
            </h1>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 d-flex justify-center">
              {{ this.userData ? this.userData.username : "" }}
            </v-list-item-title>
            <v-list-item-subtitle class="d-flex justify-center">
              {{
                this.userData ? this.userData.email : ""
              }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item>
          <v-list-item-title class="d-flex justify-center"
            >คะแนน :
            {{ this.userData ? this.userData.point : 0 }}</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title class="d-flex justify-center"
            >บทเรียนที่เรียนแล้ว</v-list-item-title
          >
        </v-list-item>
        <v-list
          color="#EDF6E5"
          max-height="150"
          style="overflow-y: auto"
          class="ml-3"
        >
          <v-list-item-group class="pl-1">
            <v-list-item v-for="item in userLessons" :key="item">
              <v-list-item-content>
                <v-list-item-title
                  ><v-icon x-small class="pr-2"
                    >mdi-checkbox-blank-circle</v-icon
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list-item>
          <v-list-item-title class="d-flex justify-center"
            >แบบทดสอบที่ทำแล้ว</v-list-item-title
          >
        </v-list-item>
        <v-list
          color="#EDF6E5"
          max-height="150"
          style="overflow-y: auto"
          class="ml-3"
        >
          <v-list-item-group class="pl-1">
            <v-list-item v-for="itemQuiz in userQuizzes" :key="itemQuiz">
              <v-list-item-content>
                <v-list-item-title
                  ><v-icon x-small class="pr-2"
                    >mdi-checkbox-blank-circle</v-icon
                  >{{ itemQuiz.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar v-model="snackbar" top>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          v-if="typeOfDialog == 'regis'"
          v-bind="attrs"
          @click="(typeOfDialog = 'login'), (dialog = true)"
        >
          เข้าสู่ระบบ
        </v-btn>
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-main class="bg">
      <router-view v-if="refreshKey" />
    </v-main>
  </v-app>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  name: "App",

  data: () => ({
    refreshKey: true,
    regisError: false,
    loginError: false,
    userQuizzes: "",
    userLessons: "",
    userData: "",
    valid: "",
    drawer: false,
    showComfirmPassword: false,
    showPassword: false,
    checkData: "",
    dialog: false,
    typeOfDialog: "",
    password: "",
    username: "",
    checkPassword: "",
    email: "",
    progessBtn: false,
    text: "",
    snackbar: false,
    emailRules: [
      (v) => !!v || "กรุณาใส่อีเมล",
      (v) => /.+@.+\..+/.test(v) || "กรุณาใส่อีเมลให้ถูกต้อง",
    ],
    passwordRules: [(v) => !!v || "กรุณาใส่รหัสผ่าน",
    (v) => /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(v) || "รหัสผ่านไม่ตรงเงื่อนไข"],
    checkPasswordRules: [(v) => !!v || "กรุณายืนยันรหัสผ่าน"],
    //
  }),

  methods: {
    refreshPage(){
      this.refreshKey = false
      this.$nextTick().then(() => {
this.refreshKey = true;
      })
    },
    logout() {
      this.loginError = false;
      this.drawer = false;
      this.text = "ออกจากระบบเรียบร้อย";
      this.snackbar = true;
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("user");
      this.checkData = null;
      this.checkIfLogin();
      this.refreshPage();
      // location.reload();
    },
    async register() {
      this.loginError = false;
      this.snackbar = false;
      var id = "";
      if (this.$refs.form.validate()) {
        this.progessBtn = true;
        var username = this.email.split("@");
        await connectAPI
          .registerUser(username[0], this.email, this.password)
          .then((res) => {
            id = res.user.id;
          }).catch((e) => {this.regisError = true; this.progessBtn = false;})
        await connectAPI.getAPI("users-permissions/roles").then((res) => {
          for(var i = 0 ; i< res.roles.length ; i++){
            if(res.roles[i].name == 'Student'){
              this.newrole = res.roles[i]
            }
          }
        });
         await connectAPI
          .putAPI("users/" + id, { role: this.newrole, point: 0 })
          .then((res) => {
            this.dialog = false;
            this.progessBtn = false;
            this.email = "";
            this.password = "";
            this.checkPassword = "";
            this.text = "ลงทะเบียนเรียบร้อย";
            this.snackbar = true;
            this.$refs.form.reset();
          });
      }
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.progessBtn = true;
        await connectAPI.login(this.email, this.password).then((res) => {
          this.dialog = false;
          this.progessBtn = false;
          this.email = "";
          this.password = "";
          this.text = "เข้าสู่ระบบเรียบร้อย";
          this.snackbar = true;
          this.$refs.form.reset();
          const user = res;
          window.localStorage.setItem("jwt", user.jwt);
          window.localStorage.setItem("user", JSON.stringify(user.user));
          this.checkIfLogin();
          this.refreshPage();
          // location.reload();
        }).catch((e) => {
          this.progessBtn = false;
          this.loginError = true;
        });
      }
    },
    checkIfLogin() {
      if (window.localStorage.user) {
        this.checkData = JSON.parse(window.localStorage.user);
      } else {
        this.checkData = null;
      }
    },
    async callProfile() {
      await connectAPI.getAPIWithToken("users/me").then((res) => {
        this.userData = res;
        this.drawer = true;
      });
      await connectAPI
        .getAPIWithToken("users/" + this.checkData.id)
        .then((res) => {
          this.userLessons = res.lessons;
          this.userQuizzes = res.quizzes;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cancelForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
      this.progessBtn = false;
      this.loginError = false;
      this.loginError = false;
    },
  },
  mounted() {
    this.checkIfLogin();
  },
  computed: {
    checkPasswordRulesMatch() {
      if (this.checkPassword != this.password) {
        return () =>
          this.checkPassword === this.password || "รหัสผ่านไม่ตรงกัน";
      }
    },
  },
};
</script>
<style scoped>
.bg-dialog {
  background-image: url("./assets/bg-dialog.jpg");
  background-size: 600px 450px;
  background-position: center;
}
.bg {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 0.011642156862745057) 69%,
    rgba(45, 60, 253, 1) 100%
  );
}
</style>
