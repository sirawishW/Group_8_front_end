<template>
  <div class="note">
    <div class="header">
      <h1>เรียงลำดับตัวโน๊ตที่อยู่ในช่องเก็บของ</h1>
    </div>

    <div class="center">
      <router-link to="/numalee" style="margin-right:50px;">
        <img src="@/assets/8.png" /><br />
        <h2>เพลงหนูมาลี</h2>
      </router-link>
      <router-link to="/jingle-bell">
        <img src="@/assets/7.png" /><br />
        <h2>เพลง Jingle Bell</h2>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  padding: 2.5%;
}

h2 {
  color: black;
}
</style>
