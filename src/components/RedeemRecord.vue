<template>
    <div>
        <v-data-table
        :headers = "headers"
        :items = "record"
        class="elevation-1">
        </v-data-table>
    </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default{
  name:'leaderboard',
  data: () => ({
        // users: '',
        // username: '',
        // user_point: 0
//   }),
//   data(){
    // return{
        record: [
            {
                date: "2021/08/10-04:00:00",
                item: 'คูปองส่วนลด 10%',
                point: 50
            },
            {
                date: "2021/08/08-09:00:00",
                item: 'คูปองส่วนลด 50%',
                point: 200
            },
            {
                date: "2021/08/09-08:00:00",
                item: 'คอร์สเรียนฟรี',
                point: 400
            },
            {
                date: "2021/08/07-07:00:00",
                item: 'คูปองส่วนลด 30%',
                point: 150
            }
        ],
        headers:[{
            text: 'วันที่',
            align: 'start',
            sortable: true,
            value: 'date',
        },
        {text: 'ของที่เเลก', value: 'item'},
        {text: 'คะเเนนที่ใช้', value: 'point'}
        ],
    }),
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