<template>
    <div>
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
                            <v-btn @click.stop="dialog = true" color="blue" text>เเลก</v-btn>
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
                    <v-card-text>คุณจะถูกหัก คะเเนน โดยสินค้าที่คุณเลือกคือ </v-card-text>
                    <v-btn color="primary" text @click="dialog = false">ยืนยัน</v-btn>
                    <v-btn color="primaty" text @click="dialog = false">ยกเลิก</v-btn>
                </v-card>
            </v-dialog>
       </v-item-group>
        <v-container>
           <v-row justify="center" style="margin-bottom:30px">
            <router-link to="/" tag="v-btn">
                <v-btn href="" elevation="4" icon><v-icon>mdi-home</v-icon>
                    </v-btn>
            </router-link>
           </v-row>
        </v-container>
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
    }),
    mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            await connectAPI.getAPI("shop-items").then((res) =>{
                this.items = res
            })            
            console.log(this.items)
        }
    }
}
</script>