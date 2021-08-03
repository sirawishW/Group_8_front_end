<template>
  <v-app>
    <v-app-bar
      app
      color="#001E6C"
      dark
      flat
      class="nav-bar"
      height="50px"
    >
      <div class="d-flex align-center">
       <v-icon large>mdi-music-accidental-sharp</v-icon><h3>Music Hub</h3>
      </div>

      <v-spacer></v-spacer>

      <div>|</div>
      <v-btn
        href=""
        icon
      ><v-icon>mdi-gamepad-square</v-icon>
      </v-btn>
        <v-btn
        href=""
        icon
      ><v-icon>mdi-shopping</v-icon>
      </v-btn>
        <v-btn
        href=""
        icon
      ><v-icon>mdi-trophy-variant</v-icon>
      </v-btn>
      <div>|</div>
              <v-btn
        href=""
        icon
      ><v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>
