<template>
    <div>
       <v-item-group>
           <v-container>
               <v-row>
                   <v-col 
                   v-for="n in 8"
                   :key="n"
                   cols="12"
                   md="3">
                   <v-item>
                       <v-card class="mx-auto" max-width="344">
                           <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                           <v-card-title>Umbralla</v-card-title>
                           <v-card-subtitle>2000 Point</v-card-subtitle>
                           <v-card-actions>
                               <v-btn color="blue" text>เเลก</v-btn>
                               <v-spacer></v-spacer>
                           </v-card-actions>
                           <v-expand-transition>
                               <div>
                                   <v-divider></v-divider>
                                   <v-card-text>
                                       ร่มสุดกิ๊บเก๋ มั่นใจได้เเม้วัน(ฝน)มามาก 
                                   </v-card-text>
                               </div>
                           </v-expand-transition>
                       </v-card>
                   </v-item>
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
    
}
</script>