<template>
  <v-app>
    <v-app-bar app color="#001E6C" dark flat class="nav-bar" height="50px">
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
      <v-tooltip bottom>
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
              @click="(dialog = true), (typeOfDialog = 'login')"
              ><v-btn text>เข้าสู่ระบบ</v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="!checkData">
            <v-list-item-title
              @click="(dialog = true), (typeOfDialog = 'regis')"
              ><v-btn text>สมัครสมาชิก</v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="checkData">
            <v-list-item-title><v-btn text @click="drawer=true, checkIfLogin()">โปรไฟล์</v-btn></v-list-item-title>
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
          <v-form class="pt-10" ref="form" v-model="valid" lazy-validation
            ><v-text-field
              v-model="email"
              :rules="emailRules"
              label="อีเมล"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
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
     <v-navigation-drawer
      v-model="drawer"
      absolute
      right
    ><v-list class="pt-7">
      <v-icon @click="drawer = false" class="pt-8" style="padding-left: 83%" right>mdi-close</v-icon>
      <v-list-item class="px-2 d-flex justify-center">
            <v-list-item-avatar color="green" class="mt-1 ml-2" size="50">
             <h1 v-if="this.checkData">{{ this.checkData.username.charAt().toUpperCase() }}</h1> 
  </v-list-item-avatar>
          </v-list-item>
              

          <v-list-item>
            <v-list-item-content >
              <v-list-item-title class="text-h6 d-flex justify-center">
                {{ this.checkData.username }}
              </v-list-item-title>
              <v-list-item-subtitle class="d-flex justify-center"> {{ this.checkData.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item>
            <v-list-item-title class="d-flex justify-center">คะแนน : {{this.checkData.point ? this.checkData.point : 0}}</v-list-item-title>
          </v-list-item>
          <v-list-item >
            <v-list-item-title class="d-flex justify-center">อันดับคะแนน : </v-list-item-title>
          </v-list-item>
          <v-list-item >
            <v-list-item-title class="d-flex justify-center">เนื้อหาที่ผ่านการเรียนแล้ว</v-list-item-title>
          </v-list-item>
        </v-list>
     </v-navigation-drawer>
     <v-snackbar
      v-model="snackbar"
      top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          v-if="typeOfDialog == 'regis'"
          v-bind="attrs"
          @click="typeOfDialog = 'login', dialog = true;"
        >
          เข้าสู่ระบบ
        </v-btn>
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-main class="bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  name: "App",

  data: () => ({
    valid: '',
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
    text: '',
    snackbar: false,
    emailRules: [
      (v) => !!v || "กรุณาใส่อีเมล",
      (v) => /.+@.+\..+/.test(v) || "กรุณาใส่อีเมลให้ถูกต้อง",
    ],
    passwordRules: [(v) => !!v || "กรุณาใส่รหัสผ่าน"],
    checkPasswordRules: [(v) => !!v || "กรุณายืนยันรหัสผ่าน"],
    //
  }),

  methods: {
    logout(){
      location.reload()
      this.checkIfLogin();
      this.drawer = false;
      this.text = "ออกจากระบบเรียบร้อย"
       this.snackbar = true;
    },
    async register() {
      var newrole = ''
      var id = ''
      if (this.$refs.form.validate()) {
        this.progessBtn = true;
        var username = this.email.split('@')
        await connectAPI.registerUser(username[0], this.email, this.password).then((res) => {
          id = res.user.id;
        })
        await connectAPI.getAPI("users-permissions/roles/4").then((res) => {newrole = res.role})
        await connectAPI.putAPI("users/" + id, {role : newrole}).then((res) => { this.dialog = false;
          this.progessBtn = false;
          this.email = "";
          this.password = "";
          this.checkPassword = "";
          this.text = "ลงทะเบียนเรียบร้อย";
          this.snackbar = true;
          this.$refs.form.reset() })
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
          this.checkIfLogin();
          this.text = "เข้าสู่ระบบเรียบร้อย"
          this.snackbar = true;
          this.$refs.form.reset()
        })
        
      }
    },
    async checkIfLogin() {
      await connectAPI
        .getAPIWithToken("users/me")
        .then((res) => {
          this.checkData = res
          console.log(res);
        })
        .catch((e) => {
          this.checkData = "";
        });
    },
    cancelForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.dialog = false;
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
.bg{
  background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,0.011642156862745057) 69%, rgba(45,60,253,1) 100%);
}
</style>
