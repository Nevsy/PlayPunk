<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    const dlLanguages = ["EN", "FR", "NL", "DE", "ES", "IT", "PL", "CZ", "SK"]
</script>

<template>
    <Nav />

    <!-- <section class="section section1">
        <h1 class="title">{{  $t("cfDownloads.header") }} Captain Flip</h1>
    </section> -->

    <!-- <svg class="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill-opacity="1" d="M0,192L34.3,170.7C68.6,149,137,107,206,106.7C274.3,107,343,149,411,186.7C480,224,549,256,617,229.3C685.7,203,754,117,823,122.7C891.4,128,960,224,1029,266.7C1097.1,309,1166,299,1234,288C1302.9,277,1371,267,1406,261.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </svg> -->
    <!-- <h1 class="title">{{  $t("cfDownloads.header") }} Captain Flip</h1> -->
    
    <section class="section section1">
        
        <div class="grid">

            <div class="downloadsRGB downloadColumn">
                <h3>{{  $t("cfDownloads.RGBcolumn") }}</h3>

                <div class="downloads">

                    <div class="download" v-for="language in dlLanguages">
                        <div class="text">
                            <span class="docTitle">
                                Rules_{{ language }}_RGB.pdf
                            </span>
                            <span class="info">15MB ● {{ $t("cfDownloads.dlInfo") }}</span>
                        </div>
    
                        <a class="dlLogo" :href="`/src/downloads/RGB/CF_Rules_${language}.pdf`" :download="`CD_Rules_${language}_RGB.pdf`">⬇️</a>
                    </div>

                </div>
                
            </div>
            
            <div class="downloadsCMYK downloadColumn">
                <h3>{{  $t("cfDownloads.CMYKcolumn") }}</h3>

                <div class="downloads">
    
                    <div class="download" v-for="language in dlLanguages">
                        <div class="text">
                            <span class="docTitle">
                                Rules_{{ language }}_CMYK.pdf
                            </span>
                            <span class="info">17MB ● {{ $t("cfDownloads.dlInfo") }}</span>
                        </div>
                        <a class="dlLogo" :href="`/src/downloads/CMYK/CF_Rules_${language}.pdf`" :download="`CF_Rules_${language}_CMYK.pdf`">⬇️</a>
                    </div>
    
                </div>

            </div>

            <div class="downloadColumn">
                <h3>{{  $t("cfDownloads.krakenColumn") }}</h3>

                <div class="downloads">
    
                    <div class="download">
                        <div class="text">
                            <span class="docTitle">
                                KrakenRules.pdf
                            </span>
                            <span class="info">5.1MB ● {{ $t("cfDownloads.krakenInfo") }}</span>
                        </div>
                        <a class="dlLogo" :href="`/src/downloads/RGB/CF-Goodies-rules-multi.pdf`" :download="`KrakenRules.pdf`">⬇️</a>
                    </div>
    
                </div>

            </div>

        </div>
    </section>

    <div class="filler" style="height: 2.7vh;"></div>
    <div class="footer">
        <Footer/>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";

    h1 {
        font-size: x-large;
    }

    .section1 {
        //background-color: $plum;
        width: 100vw;
        height: 50vh;

        display: flex;
        align-items: center;
        flex-direction: column;
        //color: $white;

        height: fit-content;
        text-align: left;
        
        .grid {
            //display: grid;
            gap: 10px;
            max-width: 800px;
            margin: 50px 0px 50px 0px;

            //grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
            
            @include center;

            .downloadColumn {
                width: 350px;
                margin-right: -15px;

                h3 {
                    //margin-left: 10px;
                    width: 300px;
                }
            }

            .downloads > .download {
                border: solid 1px $lightPlum;
                border-radius: 10px;
                padding: 10px;

                width: 280px;
                margin-inline: 20px;
                margin-top: 10px;

                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 50px;

                .text {
                    display: flex;
                    flex-direction: column;
                    
                    .info {
                        font-size: .8rem;
                        color: $ultraLightPlum;
                        text-align: left;
                    }
                }

                .dlLogo {
                    font-size: 1.5rem;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
        }

        @media screen and (max-width: 720px){
            .grid {
                display: block;
     
                .downloadColumn:nth-child(1){
                    margin-bottom: 30px;
                }
            }
        }
        //* THIS IS COMMENTED BC ONLY ONE COLUMN IS PRESENT
    }

    .downloadsCMYK {
        display: none;
    }

    .footer {
        //position: absolute;
        bottom: 0;
        width: 100vw;
        height: 77px;
    }
</style>