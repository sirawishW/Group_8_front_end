<template>
    <div>
        <v-simple-table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Product</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </v-simple-table>
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
    
}
</script>