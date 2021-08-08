<template>
    <div>
        <v-simple-table>
            <thead class="head">
                <tr>
                    <th class="text-left">อันดับ</th>
                    <th class="text-left">ชื่อผู้ใช้</th>
                    <th>คะเเนน</th>
                </tr>
            </thead>
            <tbody class="body">
                <tr v-for="(user, index) in users" :key="index">
                    <td class="text-left">{{ index+1 }}</td>
                    <td class="text-left">{{ user.username }}</td>
                    <td>{{ user.point }}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <br>
        <br>
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
</style>
