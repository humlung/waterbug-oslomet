<template>
    <div class="stat-card">
        <!--SEASON STATS-->
        <div v-if="stat.name === 'seasonStats'" class="stat-card-content">
            <h3>Season Stats</h3>
            <div class="season-segment"
                 v-for="season in stat.content" :key="season.season">
                <i v-if="season.season == 'Summer'" class="fas fa-sun"></i>
                <i v-if="season.season == 'Fall'" class="fas fa-wind"></i>
                <i v-if="season.season == 'Spring'" class="fas fa-seedling"></i>
                <i v-if="season.season == 'Winter'" class="fas fa-snowflake"></i>
                <div class="season-segment-info">
                    <div class="season-segment-part season-segment-new">
                        <i class="fas fa-birthday-cake"></i>
                        <p><span class="season-segment-stat">{{season.new}}</span> new</p><br>
                    </div>
                    <div class="season-segment-part season-segment-avgMoisture">
                        <i class="fas fa-tint"></i>
                        <p><span class="season-segment-stat">{{season.avgMoisture}}%</span><br> avg. daily moisture</p>
                    </div>
                    <div class="season-segment-part season-segment-dead">
                        <i class="fas fa-skull-crossbones"></i>
                        <p><span class="season-segment-stat">{{season.dead}}</span> dead</p><br>
                    </div>
                </div>
            </div>
        </div>

        <!--PRESICION STATS-->
        <div v-if="stat.name === 'wateringPrecision'" class="stat-card-content">
            <h3>Watering precision level</h3>
            <div class="season-segment-info">
                <div class="season-segment-part">
                    <i class="fas fa-crosshairs"></i>
                    <h4 class="season-segment-stat">{{stat.content.status}}</h4>
                </div>
                <div class="season-segment-part">
                    <h6>On average, you water your plants <span class="season-segment-overdue">{{stat.content.daysOverdue}}</span> days overdue</h6>
                </div>
            </div>
        </div>

        <!--LIVINGvDEAD STATS-->
        <div v-if="stat.name === 'livingVsDead'" class="stat-card-content">
            <h3>All plants</h3>
            <div class="season-segment-info">
                <div class="season-segment-part">
                    <h6>Living</h6>
                    <i class="fas fa-heartbeat"></i>
                    <h4 class="season-segment-stat">{{stat.content.living}}</h4>
                </div>
                <div class="season-segment-part">
                    <h6>Dead</h6>
                    <i class="fas fa-skull-crossbones"></i>
                    <h4>{{stat.content.dead}}</h4>
                </div>
            </div>
        </div>

        <!--TOP 3 STATS-->
        <div v-if="stat.name === 'topThreePlants'" class="stat-card-content">
            <h3>Your top 3 plants</h3>
            <div v-for="plant in stat.content" :key="plant.type">
                <div class="top-3-plant">
                    <h6>{{plant.type}}</h6>
                    <h4 class="season-segment-stat">{{plant.count}}</h4>
                    <hr>
                </div>
            </div>
        </div>

        <!--LONGEST LIVING STATS-->
        <div v-if="stat.name === 'longestLiving'" class="stat-card-content">
            <h3>Longest living plant</h3>
            <div class="activated-dead">
                <p>{{stat.content.activated}}</p>
                <p> - </p>
                <p>{{stat.content.dead}}</p>
            </div>
            <div class="season-segment-info">
                <div class="season-segment-part">
                    <h4>{{stat.content.name}}</h4>
                    <small>{{stat.content.type}}</small>
                </div>
                <div class="season-segment-part longest-living">
                    <div class="days-amount">
                        <div class="days-detail">
                        <h4 class="season-segment-stat">{{stat.content.lifetime}}</h4>
                        <small>days</small>
                        </div>
                        <i class="fas fa-fist-raised"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name : 'plantStat',
        props : {
            stat : {
                required : true
            },
        }
    }
</script>

<style scoped>
    .stat-card {
        background: #E5E5E5;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin: 1em;
        transition: 200ms ease;
        padding-bottom: 1em;
    }
    h6 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2em;
        margin: 0.7em;
    }
    h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 0.7em;
        width: 100%;
        padding: 1.3em;
        background: #C4C4C4;
        border-radius: 10px 10px 0 0;
    }
    .season-segment {
        display: flex;
        flex-direction: column;
        margin-top: 1em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        width: 90%;
        margin: auto;
        align-items: center;
    }
    .season-segment i {
        margin: auto;
        font-size: 3em;
        color: #20CE9A;
        margin-top: 0.4em;
    }
    .season-segment-info {
        display: flex;
        flex-direction: row;
        margin-top: 1em;
    }
    .season-segment-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-left: 1em;
        margin-right: 1em;
        flex-grow: 1;
    }
    .season-segment-part p {
        font-size: 0.6em;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    }
    .season-segment-part i {
        color: #000000;
        font-size: 1.7em;
        margin-bottom: 0.3em;
    }
    .season-segment-part h4, .season-segment-part h6 {
        font-weight: 200;
    }
    .season-segment-stat {
        color: #20CE9A;
        font-size: 1.5em;
    }
    .season-segment-overdue {
        color: #CE3520;
        font-weight: 400;
    }
    .top-3-plant {
        width: 70%;
        margin: auto;
    }
    .activated-dead, .days-amount {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .activated-dead p {
        font-size: 0.7em;
        font-weight: 400;
        opacity: 0.7;
        font-style: italic;
        margin: 1em;
    }
    .days-detail {
        display: flex;
        flex-direction: column;
        margin: 1em;
    }
    .days-amount i {
        font-size: 3em;
    }
</style>