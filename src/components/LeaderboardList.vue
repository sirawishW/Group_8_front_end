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
                <tr v-for="(dat, index) in data" :key="index">
                    <td class="text-left">{{ index+1 }}</td>
                    <td class="text-left">{{ dat.user }}</td>
                    <td>{{ dat.score }}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <br>
        <br>
    </div>
</template>

<script>
export default{
  data(){
    return{
        data: [
            {
                user: 'A',
                score: 445
            },
            {
                user: 'B',
                score: 300
            },
            {
                user: 'C',
                score: 225
            },
            {
                user: 'D',
                score: 200
            }
        ]
    }
  },
  method:{
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
