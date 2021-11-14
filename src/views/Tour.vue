<template>
<div class="container-fluid px-0">
    <header>
        <div id="intro" class="d-flex flex-column align-items-center">
            <div id="main" class="d-flex justify-content-center align-items-center">
                <img src="../assets/images/taiwan_logo_white.svg" alt="" />
            </div>
            <div id="region">
                <div class="region-box">
                    <select class="region-select" name="" id="">
                        <option>北部地區</option>
                    </select>
                    <select class="region-select" name="" id="">
                        <option>台北市</option>
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
export default {
    name: "Tour",
};
</script>

<style>
@import "../assets/css/tour.css";
</style>
