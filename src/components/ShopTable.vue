<template>
  <div>
    <h1 class="head">เเลกคะเเนน</h1>
    <p class="display" v-if="userData && userData == 'Student'">
      คุณมีคะเเนนสะสม {{ user_point }} คะเเนน
    </p>
    <v-row align="center" justify="space-around">
      <v-btn
        to="/RedeemRecord"
        align="center"
        style="margin-bottom: 30px"
        v-if="userData && userData == 'Student'"
        >ประวัติการเเลกของรางวัล/การได้เเต้ม</v-btn
      >
      <v-btn
        style="margin-bottom: 30px"
        @click="addDialog = true"
        v-if="userData && userData == 'Admin'"
        >เพิ่มของรางวัล</v-btn
      >
    </v-row>
    <v-dialog v-model="addDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">เพิ่มของรางวัล</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="ชื่อของรางวัล"
                  required
                  :rules="[() => name.length > 0 || 'Required field']"
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="เเต้มที่ใช้เเลก"
                  required
                  :rules="[() => cost.length > 0 || 'Required field']"
                  v-model="cost"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="คำอธิบายรางวัล"
                  v-model="description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="จำนวนของรางวัล"
                  required
                  :rules="[() => cost.length >= 0 || 'Required field']"
                  v-model="stock"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="addDialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              addDialog = false;
              add();
            "
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">เเก้ไขของรางวัล</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="ชื่อของรางวัล"
                  required
                  :rules="[() => name.length > 0 || 'Required field']"
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="เเต้มที่ใช้เเลก"
                  required
                  :rules="[() => cost.length > 0 || 'Required field']"
                  v-model="cost"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="คำอธิบายรางวัล"
                  v-model="description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="จำนวนของรางวัล"
                  required
                  :rules="[() => cost.length >= 0 || 'Required field']"
                  v-model="stock"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false">
            ปิด
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              editDialog = false;
              edit();
            "
          >
            บันทึก
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-item-group>
      <v-container>
        <v-row v-for="n in 1" :key="n" cols="12" md="3">
          <v-col>
            <v-card
              class="mx-auto"
              max-width="950"
              v-for="(item, index) in items"
              :key="index"
              style="margin-bottom: 30px"
            >
              <v-img
                :src="require(`../assets/${item.src}`)"
                height="300px"
              ></v-img>
              <v-card-title>{{ item.item_name }}</v-card-title>
              <v-card-subtitle>{{ item.point_cost }} points</v-card-subtitle>
              <v-card-text>คงเหลือ {{ item.number }}</v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="item.number !== 0 && userData == 'Student'"
                  @click.stop="
                    dialog = true;
                    item_name = item.item_name;
                    point_cost = item.point_cost;
                    item_id = item.id;
                    item_remain = item.number;
                  "
                  color="blue"
                  text
                  >เเลก</v-btn
                >
                <v-btn v-else disabled>สินค้าหมด</v-btn>
                <v-btn
                  icon
                  @click="
                    editDialog = true;
                    item_id = item.id;
                  "
                >
                  <v-icon v-if="userData && userData == 'Admin'"
                    >mdi-pencil</v-icon
                  >
                </v-btn>
                <v-btn
                  icon
                  @click="
                    deleteDialog = true;
                    item_id = item.id;
                  "
                >
                  <v-icon v-if="userData && userData == 'Admin'"
                    >mdi-delete</v-icon
                  >
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-expand-transition>
                <div>
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ item.item_description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" height="450" width="450">
        <v-card>
          <v-card-title>ยืนยันการเเลก</v-card-title>
          <v-card-text
            >คุณจะถูกหัก {{ point_cost }} คะเเนน โดยสินค้าที่คุณเลือกคือ
            {{ item_name }}</v-card-text
          >
          <v-btn color="primary" text @click="calPoint()">ยืนยัน</v-btn>
          <v-btn color="primaty" text @click="dialog = false">ยกเลิก</v-btn>
        </v-card>
      </v-dialog>
    </v-item-group>
    <v-dialog v-model="deleteDialog" height="450" width="450">
      <v-card>
        <v-card-title>ยืนยันการลบ</v-card-title>
        <v-card-text>ของรางวัลนี้จะถูกลบทันที</v-card-text>
        <v-btn
          color="primary"
          text
          @click="
            deleteDialog = false;
            remove();
          "
          >ลบ</v-btn
        >
        <v-btn color="primaty" text @click="deleteDialog = false">ยกเลิก</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  name: "Shop",
  data: () => ({
    items: "",
    model: "",
    dialog: false,
    addDialog: false,
    editDialog: false,
    deleteDialog: false,
    item_id: "",
    item_name: "",
    point_cost: 0,
    user_point: 0,
    item_remain: 0,
    current_id: null,
    current_user: null,
    point_after_redeem: 0,
    userData: null,
    valid: false,
    name: "",
    description: "",
    cost: 0,
    stock: 0,
  }),
  mounted() {
    this.getData();
    this.getPoint();
    if (window.localStorage.user) {
      var data = JSON.parse(window.localStorage.user);
      this.userData = data.role.name;
    }
  },
  methods: {
    async getData() {
      await connectAPI.getAPI("shop-items").then((res) => {
        this.items = res;
      });
    },
    async getPoint() {
      await connectAPI.getAPIWithToken("users/me").then((res) => {
        this.current_id = res.id;
        this.user_point = res.point;
      });
    },
    async calPoint() {
      if (this.user_point < this.point_cost) {
        alert("คะเเนนของคุณไม่เพียงพอ");
        this.dialog = false;
      } else {
        this.point_after_redeem = this.user_point - this.point_cost;
        this.item_remain = this.item_remain - 1;
        await connectAPI.putAPI("users/" + this.current_id, {
          point: this.point_after_redeem,
        });
        await connectAPI.getAPI("users/" + this.current_id).then((res) => {
          this.current_user = res
        });
        await connectAPI.putAPIWithToken("shop-items/" + this.item_id, {
          number: this.item_remain
        });
        await connectAPI.postAPI("histories", {
          point: this.point_cost,
          type: "loss",
          users_permissions_user: this.current_user,
          details: this.item_name,
        });
        alert("เเลกเปลี่ยนสำเร็จ");
        this.dialog = false;
        location.reload();
      }
    },
    async edit() {
      if (this.name == "", this.point == 0, this.cost == 0, this.stock == 0) {
        alert(
          "กรุณาใส่ข้อมูลให้ครบทุกช่อง ยกเว้นช่องคำอธิบายรางวัล อาจใส่หรือไม่ใส่ก็ได้"
        );
        return;
      }
      else{
        await connectAPI.putAPIWithToken("shop-items/" + this.item_id, {
        item_name: this.name,
        point_cost: this.cost,
        item_description: this.description,
        number: this.stock,
        });
        alert("เเก้ไขสำเร็จ");
        this.getData();
        location.reload();
        }
    },
    async remove() {
      await connectAPI.deleteAPI("shop-items/", this.item_id);
      alert("ลบของรางวัลสำเร็จ");
      location.reload();
    },
    async add() {
      if (this.name == "", this.point == 0, this.cost == 0, this.stock == 0) {
        alert(
          "กรุณาใส่ข้อมูลให้ครบทุกช่อง ยกเว้นช่องคำอธิบายรางวัล อาจใส่หรือไม่ใส่ก็ได้"
        );
      }
      else{
        await connectAPI.postAPI("shop-items", {
        item_name: this.name,
        point_cost: this.cost,
        item_description: this.description,
        number: this.stock,
          src: "discountCoupon.png",
        });
        alert("เพิ่มของรางวัลสำเร็จ");
        this.getData();
        location.reload();
        }
    },
  },
};
</script>
<style lang="scss" scoped>
.head,
.display {
  color: white;
  text-align: center;
  padding: 15px;
}
</style>