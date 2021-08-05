<template>
    <div>
        <v-simple-table>
            <thead class="head">
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">User</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody class="body">
                <tr v-for="item in dat" :key="item.name">
                    <td class="text-left">{{ item.index }}</td>
                    <td class="text-left">{{ item.user }}</td>
                    <td>{{ item.score }}</td>
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
        dat: [
            {
                index: 1,
                user: 'A',
                score: 2000
            },
            {
                index: 2,
                user: 'B',
                score: 3000
            },
            {
                index: 3,
                user: 'C',
                score: 4000
            },
        ]
    }
  },

}
</script>
<style lang="scss"scoped>
.body{
    background-color: #D5F3FE;
}
</style>