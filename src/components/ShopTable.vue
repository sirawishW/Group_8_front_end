<template>
    <div>
       <h1 class="head">เเลกคะเเนน</h1>
       <p class="display">คุณมีคะเเนนสะสม {{ user_point }} คะเเนน</p>
       <v-row align="center" justify="space-around">
            <v-btn to="/RedeemRecord" align="center" style="margin-bottom:30px;">ประวัติการเเลกของรางวัล</v-btn>
            <v-btn v-if="checkData && checkData.role.name == 'Admin'" style="margin-bottom:30px;">เพิ่มของรางวัล</v-btn>
       </v-row>
       <v-item-group>
           <v-container>
               <v-row
                   v-for="n in 1"
                   :key="n"
                   cols="12"
                   md="3">
                   <v-col>
                    <v-card class="mx-auto" max-width="950" v-for="(item, index) in items" :key="index" style="margin-bottom:30px;">
                        <v-img :src="require(`../assets/${item.src}`)" height="300px"></v-img>
                        <v-card-title>{{ item.item_name }}</v-card-title>
                        <v-card-subtitle>{{ item.point_cost }} points</v-card-subtitle>
                        <v-card-text>คงเหลือ {{ item.number }}</v-card-text>
                        <v-card-actions>
                            <v-btn v-if="item.number !== 0" @click.stop="dialog = true; item_name = item.item_name; 
                            point_cost = item.point_cost; item_id = item.id; item_remain =  item.number" color="blue" text >เเลก</v-btn>
                            <v-btn v-else disabled>สินค้าหมด</v-btn>
                            <v-btn icon @click="edit(item, index)" v-if="checkData && checkData.role.name == 'Admin'">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon @click="remove()" v-if="checkData && checkData.role.name == 'Admin'">
                                <v-icon>mdi-delete</v-icon>
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
                    <v-card-text>คุณจะถูกหัก {{ point_cost }} คะเเนน โดยสินค้าที่คุณเลือกคือ {{ item_name }}</v-card-text>
                    <v-btn color="primary" text @click="calPoint()">ยืนยัน</v-btn>
                    <v-btn color="primaty" text @click="dialog = false">ยกเลิก</v-btn>
                </v-card>
            </v-dialog>
       </v-item-group>
    </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default{
    name: 'Shop',
    data: () => ({
        items: '',
        model: '',
        dialog: false,
        item_id: '',
        item_name: '',
        point_cost: 0,
        user_point: 0,
        item_remain: 0,
        current_id: null,
        point_after_redeem: 0,
        
        form: {
            item_name: '',

        }
    }),
    mounted(){
        this.getData()
        this.getPoint()
    },
    methods:{
        async getData(){
            await connectAPI.getAPI("shop-items").then((res) =>{
                this.items = res

            })            
        },
        async getPoint(){
            await connectAPI.getAPIWithToken("users/me").then((res) =>{
                this.current_id = res.id
                this.user_point = res.point
            })
        },
        async calPoint(){
            if(this.user_point < this.point_cost){
               alert("คะเเนนของคุณไม่เพียงพอ")
               this.dialog = false
            }
            else{
                this.point_after_redeem = this.user_point - this.point_cost
                this.item_remain = this.item_remain - 1
                await connectAPI.putAPI("users/"+ this.current_id, { point:this.point_after_redeem })
                await connectAPI.putAPI("shop-items/"+ this.item_id, { number:this.item_remain })
                alert("เเลกเปลี่ยนสำเร็จ")
                this.dialog = false
                location.reload()
            }
        },
        edit(item, index){

        },
        remove(){
        }
    },
}
</script>
<style lang="scss" scoped>
.head, .display{
    color: white;
    text-align: center;
    padding: 15px;
}
</style>