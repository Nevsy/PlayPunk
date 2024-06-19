<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import Tr from "@/i18n/translation"
</script>

<template>
    <div class="container">
        <Nav></Nav>
        <div class="main-container">
            <p class="p">There seems to be an error.</p>
            <RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="link">Go back to main page</RouterLink>

            <div class="background">404</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";


    .container {
        height: 100vh;
        width: 100vw;
        
        color: $plum;

        .main-container {
            position: relative;
            height: calc(100% - 80px);
            width: 100%;
            @include center;
            overflow: hidden;
            flex-direction: column;

            .background{
                position: absolute;
                user-select: none;

                opacity: .4;
                font-size: 25rem;
                z-index: -1;
            }

            .p, .link {
                font-size: 2rem;
                color: $plum;
                white-space: pre;
            }
            .link {
                font-size: 1.5rem;
            }
        }
    }
</style>