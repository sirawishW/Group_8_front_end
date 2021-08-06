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
        data: [
            {
                user: 'A',
                score: 3000
            },
            {
                user: 'B',
                score: 2500
            },
            {
                user: 'C',
                score: 1050
            },
            {
                user: 'D',
                score: 1050
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
