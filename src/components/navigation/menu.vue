<template>
    <div class="menu-wrapper">
        <nav class="container-fluid">
            <ul class="row">
                <li class="col-sm-12 col-md-6">
                    <button>add plant</button>
                </li>
                <li class="col-sm-12 col-md-6">
                    <router-link to="/about"><button>about</button></router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'AppMenu',
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        text-decoration: none;
        margin: 0.5em;
    }

    button {
        background: #000000;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        color: #ffffff;
        font-size: 1em;
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: 600;
        border: none;
        padding: 1em;
        width: 10em;
    }
    button:hover {
        background: #ffffff;
        color: #000000;
        cursor: pointer;
    }
</style>