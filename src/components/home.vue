<template>
    <div class="main-wrapper container-fluid p-0">

        <div class="main-wrapper-container row">
            <div class="main-wrapper-segment col-12 col-md-6">
                <div class="main-wrapper-header">
                    <h4>my plants</h4>
                </div>
                <h6>Plants here</h6>
            </div>
            <div class="main-wrapper-segment col-12 col-md-6">
                <div class="main-wrapper-header">
                    <h4>my stats</h4>
                </div>
                <h6>Stats here</h6>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main',
    }
</script>

<style scoped>
    .main-wrapper {
        background: rgba(255, 255, 255, 0.4);
        margin-top: 3em;
    }

    .main-wrapper-header {
        background: rgba(255, 255, 255, 0.9);
    }

    .main-wrapper-header h4 {
        text-align: center;
        font-family: Montserrat Subrayada;
        font-style: normal;
        font-weight: bold;
        padding: 1em;
        margin: 0;
    }

    .main-wrapper-container {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
    }
    .main-wrapper-segment {
        width: 50%;
        padding: 0;
    }
</style>