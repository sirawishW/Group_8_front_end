<template>
    <div>
        <h1 class="head">ตารางคะเเนน</h1>
       <LeaderboardList />
    </div>
</template>

<script>
import LeaderboardList from '@/components/LeaderboardList.vue'
export default {
    components: {
        LeaderboardList,
    },
}
</script>

<style lang="scss" scoped>
.head{
    text-align: center;
    padding: 20px;
}
</style>