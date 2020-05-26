<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cart'}">carrinho</router-link>
            </li>
        </ul>        

        <router-view></router-view>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    
}
</script>

<style scoped>
@import url('../assets/css/vuefood.css');
@import url('../assets/css/reset.css');
</style>