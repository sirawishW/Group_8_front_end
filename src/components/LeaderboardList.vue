<template>
    <div>
        <v-data-table
        dense
        :headers = "headers"
        :items = "data"
        item-key="name"
        class="elevation-1">
        </v-data-table>
        <br>
        <br>
        <h1>ตารางใช้คะเเนน</h1>
        <v-data-table
        dense
        :headers = "headers"
        :items = "data"
        item-key="name"
        class="elevation-1">
        </v-data-table>
    </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default{
  name:'leaderboard',
  data: () => ({
        users: '',
        username: '',
        user_point: 0
  }),
//   data(){
//     return{
//         data: [
//             {
//                 user: 'A',
//                 score: 445
//             },
//             {
//                 user: 'B',
//                 score: 300
//             },
//             {
//                 user: 'C',
//                 score: 225
//             },
//             {
//                 user: 'D',
//                 score: 200
//             }
//         ]
//     }
//   },
  mounted(){
        this.getPoint()
    },
  methods:{
    async getPoint(){
        await connectAPI.getAPIWithToken("users").then((res) =>{
            this.username = res.username
            this.user_point = res.point
        })
    },
  },
  computed:{
  }
}
</script>
<style lang="scss"scoped>
.body{
    background-color: #D5F3FE;
}
h1{
    text-align: center;
}
</style>
