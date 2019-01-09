<template>
<div class="topnav">
    <nav>
        <router-link class="topalign" v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
    <div class="topnav-right">
        <a href="#login">Login</a>
    </div>
</div>
</template>

<script>
    export default  {
        name: 'Navigation',

        data() {
            return {
                links: [
                    {
                        id: 1,
                        text: 'Home',
                        page:'/Home'
                    },
                    {
                        id: 2,
                        text: 'Attend',
                        page:'/Attend'
                    },
                    {
                        id: 3,
                        text: 'Checkup',
                        page: '/Checkup'
                    },
                    {
                        id: 4,
                        text: 'Contact',
                        page:'/Contact'
                    }
                ]
            }
        }
    }
</script>

<style>
    .topalign {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .topnav {
        overflow: hidden;
        position: fixed;
        z-index: 9999;
        top: 0;
        width: 100%;
        background-color: #333;
    }
    .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

    .topnav a.active {
        background-color: #4CAF50;
        color: white;
    }
    .topnav-right {
        float: right;
    }
    .spacing {
        Margin-right: 10px;
    }
</style>