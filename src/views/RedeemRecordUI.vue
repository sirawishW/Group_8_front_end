<template>
    <div>
        <h1 class="head">ตารางเเสดงการเเลกสินค้า</h1>
       <redeem-record />
    </div>
</template>

<script>
import RedeemRecord from '@/components/RedeemRecord.vue'
export default {
    components: {
        RedeemRecord
    },
}
</script>

<style lang="scss" scoped>
.head{
    text-align: center;
    padding: 20px;
}
</style>