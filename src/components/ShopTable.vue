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
                    <v-card class="mx-auto" max-width="1000" v-for="(dat, index) in data" :key="index">
                        <v-img :src="require(`../assets/${dat.src}`)" height="300px"></v-img>
                        <v-card-title>{{ dat.product_name }}</v-card-title>
                        <v-card-subtitle>{{ dat.point_cost }} points</v-card-subtitle>
                        <v-card-actions>
                            <v-btn color="blue" text>เเลก</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                        <v-expand-transition>
                            <div>
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{ dat.product_discription }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
               </v-row>
           </v-container>
       </v-item-group>
       <br>
        <v-container>
           <v-row justify="center">
            <router-link to="/" tag="v-btn">
                <v-btn href="" elevation="4" icon><v-icon>mdi-home</v-icon>
                    </v-btn>
            </router-link>
           </v-row>
        </v-container>
    </div>
</template>

<script>
export default{
    data(){
        return{
            data:[
                {
                    product_name: "คอร์สเรียนฟรี",
                    src: "discountCoupon.png",
                    point_cost: 400,
                    product_discription: "เลือกเรียนคอร์สในราคาไม่เกิน 1000 บาท"
                },
                {
                    product_name: "คูปองส่วนลด 50%",
                    src: "discountCoupon.png",
                    point_cost: 200,
                    product_discription: "ใช้ได้กับคอร์สราคาไม่เกิน 1000 บาทเท่านั้น"
                },
                {
                    product_name: "คูปองส่วนลด 30%",
                    src: "discountCoupon.png",
                    point_cost: 100,
                    product_discription: "ใช้ได้กับคอร์สราคาไม่เกิน 1000 บาทเท่านั้น"
                },
                {
                    product_name: "คูปองส่วนลด 10%",
                    src: "discountCoupon.png",
                    point_cost: 50,
                    product_discription: "ใช้ได้กับคอร์สราคาไม่เกิน 1000 บาทเท่านั้น"
                },
                {
                    product_name: "เสื้อยืดสุดคูล",
                    src: "t-shirt.jpg",
                    point_cost: 150,
                    product_discription: "เสื้อยืดธรรมดาๆ เเต่ใส่เเล้วดูดีนะ"
                },
                {
                    product_name: "หมวกสุดเท่",
                    src: "hat.jpg",
                    point_cost: 100,
                    product_discription: "ชื่อก็บอกเเล้วว่าเท่ เเลกเลยรออะไรอยู่"
                },
                {
                    product_name: "เสื้อกันหนาวสุดปัง",
                    src: "sweater.jpg",
                    point_cost: 150,
                    product_discription: "ในห้องเรียนเเอร์หนาวนะ เเลกไว้หน่อยก็ดี"
                },
                {
                    product_name: "ร่มสุดเก๋",
                    src: "umbrella.jpg",
                    point_cost: 100,
                    product_discription: "ร่มสุดกิ๊บเก๋ มั่นใจได้เเม้วัน(ฝน)มามาก"
                },
            ]
        }
    }
}
</script>