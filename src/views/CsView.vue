<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <Nav />
    <div class="container">
        <section class="section section1">
            <h1>{{ $t("cs.title") }}</h1>
            <span>Just bought one of our games and found it has a missing or damaged piece?</span>
            <span>We advise you to contact our distributor Asmodee’s subsidiary in your country and fill in the form with your request.</span>
        </section>
        <section class="section section2">
            <div class="column">
                <ul>
                    <li><a href="https://asmodee.fr/sav/">Asmodee {{ $t("cs.Fr") }}</a></li>
                    <li><a href="https://be.asmodee.com/fr-be/contact-us">Asmodee {{ $t("cs.Be") }}</a></li>
                    <li><a href="https://kundenservice.asmodee.de/">Asmodee {{ $t("cs.Du") }}</a></li>
                    <li><a href="https://webshopnl.asmodee.com/en-us/contact">Asmodee {{ $t("cs.Nl") }}</a></li>
                    <li><a href="https://b2b.asmodee.es/service">Asmodee {{ $t("cs.Es") }}</a></li>
                    <li><a href="https://www.asmodee.it/contatti/">Asmodee {{ $t("cs.It") }}</a></li>
                </ul>
            </div>
            <div class="column">
                <ul>
                    <li><a href="https://www.asmodee.co.uk/pages/contact-us">Asmodee {{ $t("cs.Uk") }}</a></li>
                    <li><a href="https://www.rebelstudio.eu/pages/contact-us-375.html">Rebel {{ $t("cs.Pl") }}</a></li>
                    <li><a href="https://hraj.cz/kontakty">Blackfire {{ $t("cs.RoCz") }}</a></li>
                    <li><a href="https://www.asmodeenordics.com/contact-us/">Asmodee {{ $t("cs.Nordics") }}</a></li>
                    <li><a href="https://www.asmodee.ca/contact-us/">Asmodee {{ $t("cs.Ca") }}</a></li>
                </ul>
            </div>
        </section>
    </div>

    <div class="footer">
        <Footer/>
    </div>

</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";
    .container {
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .section1 {
        width: 100vw;
        //height: calc(50vh);
        padding-block: 10vh;
        @include center;
        flex-direction: column;
        font-size: 22px;

        max-width: 700px;
        //margin-left: calc(50vw - 350px);

        span {
            padding-block-start: 7px;
            padding-inline: 10px;
            font-size: 18px;
        }
    }

    .section2 {
        //display: grid;
        //gap: 16px;
        //grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));
        //grid-template-rows: 1fr;

        max-width: 800px;
        //width: 800px;
        @include center;
        flex-direction: column;

        font-size: 18px;
        //margin-left: calc(10vw);
        padding-block-end: 10vw;

        ul {
            list-style: circle;

            li {
                text-align: center;


                a {
                    color: $plum;
                }
            }
        }
    }

    @media screen and (min-width: 600px) {
        .section2 {
            flex-direction: row;
            gap: 30px;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 77px;
    }
</style>