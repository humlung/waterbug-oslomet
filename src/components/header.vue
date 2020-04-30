<template>
    <div class="header-wrapper">
        <router-link to="/home"><h2>water<br>bug</h2></router-link>
    </div>
</template>

<script>
    export default{
        name: 'Header'
    }

</script>

<style scoped>
    .header-wrapper {
        width: 100%;
        align-items: center;
        padding-top: 2em;
        padding-bottom: 2em;
    }
    h2 {
        font-family: Montserrat Subrayada;
        font-style: normal;
        font-weight: bold;
        font-size: 2em;
        color: #000000;
    }

    a:hover {
        text-decoration: none;
    }
</style>