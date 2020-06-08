<template>
    <div>
        <h1>Trade or View Your Portfolio</h1>
        <h6>You May Save & Load Your Data</h6>
        <h6>Click on "End Day" to begin a new day!</h6>
        <hr>
        <h3>Your Funds : {{ funds }}</h3>
    </div>
</template>

<script>
export default {
    computed : {
        funds() {
            return this.$store.getters.funds;
            
        }
    }
    
}
</script>

<style>

</style>