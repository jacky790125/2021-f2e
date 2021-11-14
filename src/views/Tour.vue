<template>
<div class="container-fluid px-0">
    <header>
        <div id="intro" class="d-flex flex-column align-items-center">
            <div id="main" class="d-flex justify-content-center align-items-center">
                <img src="../assets/images/taiwan_logo_white.svg" alt="" />
            </div>
            <div id="region">
                <div class="region-box">
                    <select class="region-select" name="region" id="region" v-model="region">
                        <option v-for="(region, index) in regions" :key="index" :value="index">
                            {{ region }}
                        </option>
                    </select>
                    <select class="region-select" name="country" id="country" v-model="county">
                        <option value="" disabled>請選擇</option>
                        <option v-for="(item, index) in counties" :key="index" :value="item.value">
                            {{ item.county }}
                        </option>
                    </select>
                    <button class="search" type="button">Search</button>
                </div>
            </div>
        </div>
    </header>
    <nav class="navbar fixed-top d-flex justify-content-around">
        <div class="logo-text">TAIWAN TRAVEL</div>
        <div class="link-text">
            <ul class="d-flex justify-content-around">
                <li>旅遊情報</li>
                <li>景點查詢</li>
                <li>美食推薦</li>
                <li>旅宿資訊</li>
                <li>節慶活動</li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import select from "../select";

export default {
    data() {
        return {
            region: 0,
            county: '',
            regions: [],
            counties: [],
        };
    },
    mounted() {
        this.regions = select.regions;
        this.counties = select.counties[this.region];
    },
    watch: {
        region() {
            this.counties = select.counties[this.region];
            this.county = '';
        }
    },
    name: "Tour",
};
</script>

<style>
@import "../assets/css/tour.css";
</style>
