<template>
    <div>
        <h1 class="head">เเลกคะเเนน</h1>
        <p class="display">คุณมีคะเเนนสะสม ... คะเเนน</p>
        <shop-table></shop-table>
    </div>
</template>

<script>
import ShopTable from '@/components/ShopTable.vue'
export default {
    components: {
        ShopTable,
    },
}
</script>

<style lang="scss" scoped>
.head, .display{
    text-align: center;
    padding: 15px;
}
</style>