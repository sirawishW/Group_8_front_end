<template>
  <div class="d-flex justify-center mt-10">
    <v-card class="bg" width="700" height="800"
      ><div class="text-h5 pl-5 pt-10"><h5 class="bg-white pl-2 rounded-xl">Header</h5></div>
      <div class="d-flex justify-center pt-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GFnr8DhZKwc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe></div
    >
    <v-card-text class="pl-15">
        descriptionnnnnnnnnnnnnnnnnnnnnnnnn
        
    </v-card-text >
    <div class="d-flex justify-center pb-10 mt-16"><v-btn color="green">เช็คชื่อเข้าเรียน</v-btn></div></v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg {
  background: url('../assets/5591276.jpg') ;
  background-size: cover;
}
.bg-white{
    background-color: white;
    border: white 1px solid;
    border-radius: 5;
}
</style>