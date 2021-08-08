<template>
    <div>
       <h1 class="head">เเลกคะเเนน</h1>
       <p class="display">คุณมีคะเเนนสะสม {{ user_point }} คะเเนน</p>
       <v-item-group>
           <v-container>
               <v-row
                   v-for="n in 1"
                   :key="n"
                   cols="12"
                   md="3">
                   <v-col>
                    <v-card class="mx-auto" max-width="1000" v-for="(item, index) in items" :key="index" style="margin-bottom:30px;">
                        <v-img :src="require(`../assets/${item.src}`)" height="300px"></v-img>
                        <v-card-title>{{ item.item_name }}</v-card-title>
                        <v-card-subtitle>{{ item.point_cost }} points</v-card-subtitle>
                        <v-card-actions>
                            <v-btn @click.stop="dialog = true; item_name = item.item_name; point_cost = item.point_cost" color="blue" text>เเลก</v-btn>
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
                    <v-btn color="primary" text @click="dialog = false">ยืนยัน</v-btn>
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
        item_name: '',
        point_cost: 0,
        user_point: 0
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
                this.user_point = res.point
            })
        } 
    }
}
</script>
<style lang="scss" scoped>
.head, .display{
    text-align: center;
    padding: 15px;
}
</style>