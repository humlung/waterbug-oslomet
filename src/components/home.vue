<template>
    <div class="main-wrapper container-fluid">

        <div class="main-wrapper-container row">

            <!--PLANTS-->
            <div class="main-wrapper-segment col-12 col-lg-6 ">
                <div class="main-wrapper-header col-12">
                    <h4>my plants</h4>
                </div>
                <div class="card-columns">
                <div
                        class="plant-card-wrapper card" v-for="plant in plants" :key="plant.id">
                    <div class="plant-card">
                        <div class="plant-card-top">
                            <div class="plant-name-type">
                                <br>
                                <h3>{{plant.name}}</h3>
                                <p>{{plant.type}}</p>
                            </div>
                            <div class="plant-water-time">
                                <p>water in</p>
                                <hr>
                                <p>{{plant.timeToWater}} days</p>
                            </div>
                        </div>
                        <div :style="{ backgroundImage: 'url(' + getImgUrl(plant.imgPrefix) + ')' }"
                                class="plant-card-bottom">
                            <span class="material-icons plant-card-icon">
                            arrow_forward_ios
                            </span>
                            <div class="div-fade"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <!--STATS-->
            <div class="main-wrapper-segment col-12 col-lg-6">
                <div class="main-wrapper-header col-12">
                    <h4>my stats</h4>
                </div>
                <div class="card-columns">
                <div class="plant-card-wrapper card"
                        v-for="stat in this.stats" :key="stat.id">
                    <plant-stat v-bind:stat="stat"></plant-stat>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import plantStat from './content/stat.vue'

    export default {
        name: 'main',
        data() {
            return {
                plants : [
                    {
                        "id": 1,
                        "sensorId" : 123,
                        "activated" : "2020-04-03T12:10:02:132",
                        "name" : "Oda",
                        "type" : "Aloe Vera",
                        "imgPrefix" : "oda",
                        "lifetime" : 324,
                        "sunNeed" : 3,
                        "currentMoistureLevel" : 65,
                        "optimalMoistureLevel" : 85,
                        "timeToWater" : 4
                    },
                    {
                        "id": 2,
                        "sensorId" : 1453,
                        "activated" : "2020-03-21T12:10:02:132",
                        "name" : "Changiz",
                        "type" : "Cactus",
                        "imgPrefix" : "changiz",
                        "lifetime" : 34,
                        "sunNeed" : 2,
                        "currentMoistureLevel" : 12,
                        "optimalMoistureLevel" : 10,
                        "timeToWater" : 2
                    },
                    {
                        "id": 3,
                        "sensorId" : 53,
                        "activated" : "2020-01-01T12:10:02:132",
                        "name" : "Erika",
                        "type" : "Bamboo Plant",
                        "imgPrefix" : "erika",
                        "lifetime" : 13,
                        "sunNeed" : 2,
                        "currentMoistureLevel" : 50,
                        "optimalMoistureLevel" : 73,
                        "timeToWater" : 12
                    },
                    {
                        "id": 4,
                        "sensorId" : 5323,
                        "activated" : "2020-01-03T13:11:02:132",
                        "name" : "Julie",
                        "type" : "Monstera",
                        "imgPrefix" : "julie",
                        "lifetime" : 201,
                        "sunNeed" : 2,
                        "currentMoistureLevel" : 43,
                        "optimalMoistureLevel" : 76,
                        "timeToWater" : 2
                    },
                    {
                        "id": 4,
                        "sensorId" : 5323,
                        "activated" : "2020-01-03T13:11:02:132",
                        "name" : "Zita",
                        "type" : "Hollyhock",
                        "imgPrefix" : "zita",
                        "lifetime" : 16,
                        "sunNeed" : 3,
                        "currentMoistureLevel" : 75,
                        "optimalMoistureLevel" : 68,
                        "timeToWater" : 6
                    },
                    {
                        "id": 5,
                        "sensorId" : 23,
                        "activated" : "2020-04-12T15:01:02:132",
                        "name" : "Nikita",
                        "type" : "Heather",
                        "imgPrefix" : "nikita",
                        "lifetime" : 45,
                        "sunNeed" : 1,
                        "currentMoistureLevel" : 45,
                        "optimalMoistureLevel" : 31,
                        "timeToWater" : 1
                    }
                ],
                stats : [
                    {
                        "name" : "seasonStats",
                        "id" : 1,
                        "content" : [
                            {
                                "season" : "Summer",
                                "new" : 2,
                                "dead" : 4,
                                "avgMoisture" : 59
                            },
                            {
                                "season" : "Spring",
                                "new" : 5,
                                "dead" : 1,
                                "avgMoisture" : 43
                            },
                            {
                                "season" : "Fall",
                                "new" : 4,
                                "dead" : 5,
                                "avgMoisture" : 83
                            },
                            {
                                "season": "Winter",
                                "new": 1,
                                "dead": 2,
                                "avgMoisture": 45
                            }
                        ]
                    },
                    {
                        "name" : "wateringPrecision",
                        "id" : 2,
                        "content" : {
                            "status" : "Good",
                            "daysOverdue" : 2
                        }
                    },
                    {
                        "name" : "livingVsDead",
                        "id" : 3,
                        "content" : {
                            "living" : 9,
                            "dead" : 12
                        }
                    },
                    {
                        "name" : "topThreePlants",
                        "id" : 4,
                        "content" : [
                            {
                                "type" : "Aloe Vera",
                                "count" : 4
                            },
                            {
                                "type" : "Cactus",
                                "count" : 3
                            },
                            {
                                "type" : "Bamboo Plant",
                                "count" : 3
                            }
                        ]
                    },
                    {
                        "name" : "longestLiving",
                        "id" : 5,
                        "content" : {
                            "name" : "Cyrus",
                            "type" : "Cactus",
                            "activated" : "2019-04-03",
                            "dead" : "2020-01-01",
                            "lifetime" : 341
                        }
                    }
                ]
            }
        },
        components : {
            plantStat,
        },
        methods: {
            getImgUrl(imgPrefix){
                let imgUrl = require('../assets/'+ imgPrefix +'.png')
                return imgUrl;
            }
        }
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

    .main-wrapper-segment {
        padding: 0;
    }

    .card-columns {
        margin-right: 1em;
        margin-left: 1em;
        margin-bottom: 5em;
        margin-top: 1.6em;
    }
    .card {
        margin: 0;
        display: inline-flex;
        width: 100%;
        margin-top: 1em;
    }
    /*START PLANT CARD*/
    .plant-card-wrapper {
        padding: 0;
        background-color: transparent;
        border: none;
    }
    .plant-card {
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        cursor: pointer;
        transition: 200ms ease;
    }
    .plant-card:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
        transform: scale(1.05);
    }
    .plant-card-top {
        display: flex;
        flex-direction: row;
        margin: 1em;
        margin-top: 2em;
    }
    .plant-card-top *{
        flex-grow: 1;
    }
    .plant-name-type, .plant-water-time {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .plant-name-type h3 {
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: bold;
        text-align: left;
        font-size: 100%;
        margin: 0;
        margin-top: -0.5em;
    }
    .plant-name-type p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.49);
        text-align: left;
        left: 0;
        margin: 0;
        font-size: 0.8em;
    }
    .plant-water-time p {
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: 300;
        text-align: right;
        margin: 0;
        font-size: 0.7em;
    }
    hr {
        margin: 0;
        border-top: 1px solid rgba(0,0,0,1);
    }
    .plant-card-bottom {
        border-radius: 0px 0px 10px 10px;
        height: 100px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
    }
    .plant-card-icon {
        z-index: 2;
        position: absolute;
        font-size: 3.3em;
        right: 0;
        opacity: 0.6;
    }
    .plant-card:hover .plant-card-icon {
        opacity: 1;
    }
    .div-fade {
        height: inherit;
        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        border-radius: 10px;
        transform: rotate(-180deg);
        width: 100%;
        transition: 200ms ease;
    }
    .plant-card:hover .div-fade {
        opacity: 0;
    }
    @media (min-width: 34em) {
        .card-columns {
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
        }
    }
</style>