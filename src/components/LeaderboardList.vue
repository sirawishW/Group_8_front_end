<template>
    <div>
        <v-data-table
        :headers = "headers2"
        :items = "history"
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
        history: [],
        user_point: 0,

        headers2:[{
            text: 'วันที่',
            align: 'start',
            sortable: true,
            value: 'created_at',
        },
        {text: 'ชื่อผู้ใข้', value: 'users_permissions_user.username'},
        {text: 'ประเภท', value: 'type'},
        {text: 'รายละเอียด', value: 'details'},
        {text: 'คะเเนนที่ใช้', value: 'point'}
        ],
  }),
  mounted(){
        this.getPoint()
    },
  methods:{
    async getPoint(){
        await connectAPI.getAPI("histories").then((res) =>{
            this.history = res
            console.log(res)
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
