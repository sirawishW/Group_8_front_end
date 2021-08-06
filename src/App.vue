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
            <v-list-item-title
              ><v-btn text>โปรไฟล์</v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="checkData">
            <v-list-item-title
              ><v-btn text>ออกจากระบบ</v-btn></v-list-item-title
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
              v-model="password"
              :rules="passwordRules"
              label="รหัสผ่าน"
              required
              dense
              outlined
              background-color="white"
            ></v-text-field>
            <v-text-field
              v-if="typeOfDialog == 'regis'"
              v-model="checkPassword"
              :rules="checkPasswordRules"
              label="ยืนยันรหัสผ่าน"
              required
              outlined
              dense
              background-color="white"
            ></v-text-field>
            <div class="ml-2"><v-btn color="#690D90" dark depressed class="ml-16 mt-2" v-if="typeOfDialog == 'login'">เข้าสู่ระบบ</v-btn><v-btn color="#690D90" dark depressed class="ml-16 mt-2" v-if="typeOfDialog == 'regis'">ลงทะเบียน</v-btn><v-btn @click="cancelForm" class="mt-2" text>ยกเลิก</v-btn></div>
          </v-form>
        </div></v-card
      >
    </v-dialog>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  name: "App",

  data: () => ({
    checkData: "",
    dialog: false,
    typeOfDialog: "",
    emailRules: [
      (v) => !!v || "กรุณาใส่อีเมล",
      (v) => /.+@.+\..+/.test(v) || "กรุณาใส่อีเมลให้ถูกต้อง",
    ],
    passwordRules: [(v) => !!v || "กรุณาใส่รหัสผ่าน"],
    checkPasswordRules: [(v) => !!v || "กรุณาใส่รหัสผ่าน"],
    //
  }),

  methods: {
    async checkIfLogin() {
      await connectAPI
        .getAPI("me")
        .then((res) => {
          this.checkData = res;
        })
        .catch((e) => {
          this.checkData = "";
        });
    },
    cancelForm(){
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
      this.dialog = false
    }
  },
  mounted() {
    this.checkIfLogin();
  },
};
</script>
<style scoped>
.bg-dialog{
  background-image: url("./assets/bg-dialog.jpg");
  background-size: 600px 450px;
  background-position: center;
}
</style>
