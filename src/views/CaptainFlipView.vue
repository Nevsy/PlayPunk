<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import Tr from "@/i18n/translation"
</script>

<template>
    <div class="container">
        <Nav/>
        <section class="section section1">
            <div class="boxImage"><img class="boxImageImg" src="../assets/images/CF/CF_Packaging_Box_Left.png" alt=""></div>

            <div class="mid">    
                <img class="CFLogo" src="../assets/images/CF/CF_Logo.png" alt="Captain Flip Logo">
                <span>{{ $t("captainFlip.names") }}</span>
                <h1>{{ $t("captainFlip.TitleH3") }}</h1>
                <span>{{ $t("captainFlip.SubTitle") }}</span>
                
            </div>

            <div class="gameDataImage coins">
                <img src="../assets/images/CF/pieces/Pieces_1.png" alt="1 coin" class="coin1 coin">
                <img src="../assets/images/CF/pieces/Pieces_3.png" alt="3 coin" class="coin2 coin">
                <img src="../assets/images/CF/pieces/Pieces_5.png" alt="5 coin" class="coin3 coin">
                <img src="../assets/images/CF/pieces/Pieces_10.png" alt="10 coin" class="coin4 coin">
            </div>
            <!-- <div class="invisibleFlex"></div> The sole purpose of this div is to rightly display the other two elements -->
        </section>

        <section class="section section2">

            <h1>{{ $t("captainFlip.section2.H1") }}</h1>
            <!-- "section2SubTitle": "Les joueuses sont des capitaines pirates qui recrutent un équipage pour voguer et accumuler de l’or. La joueuse qui aura le plus de Pièces à la fin de la partie sera victorieuse.", -->
            <span class="subtitle">{{ $t("captainFlip.section2.SubTitle") }}</span>
            <div class="rules">
                <div class="text">
                    <ol class="steps">
                        <li class="step" v-for="number in [1,2,3]">{{ $t("captainFlip.section2.step"+ number) }}</li>
                    </ol>
                    <span class="last">{{ $t("captainFlip.section2.last") }}</span>
                </div>
                <img class="gameRules" src="../assets/images/CF/CF_Boxbottom_Expli.png" alt="Explanations of game rules in a simple diagram">
    
                <div class="container">
    
                    <!-- <div class="flipCard">
                        <div class="flipCardInner">
    
                            <div class="flipCardFront flipCardSide">
                                <img class="img" src="../assets/images/CF/Tuiles_Perso_Mousse.png" alt="Card front">
                            </div>
                            
                            <div class="flipCardBack flipCardSide">
                                <img class="img" src="../assets/images/CF/Tuiles_Perso_Connoniere.png" alt="Card back">
                            </div>
    
                        </div>
                    </div> -->
    
                </div>
            </div>
        </section>



        <section class="subSection">
            <img class="3dMaterial" src="../assets/images/CF/CF_3D_matos.png" alt="Image of an example game (4 boards placed in a square, with at its center, a few of the games' coins)">
            <span class="listTitle">{{ $t("captainFlip.subSectionContent") }}:
                <ul class="list">
                    <li><span v-html="$t('captainFlip.subSection1')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection2')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection3')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection4')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection5')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection6')"></span></li>
                    <li><span v-html="$t('captainFlip.subSection7')"></span></li>
                </ul>
            </span>
        </section>

        <section class="section section4">
            <div class="text">
                <h1 class="title">{{ $t('captainFlip.boardsSection') }}</h1>
            </div>
            <div class="container">
                <div class="part">
                    <img src="../assets/images/CF/Boards/Boards_A_resized.png" alt="These are images of the different possible boards." class="img">
                    <img src="../assets/images/CF/Boards/Boards_B_resized.png" alt="These are images of the different possible boards." class="img">
                </div>
                <div class="part">
                    <img src="../assets/images/CF/Boards/Boards_D_resized.png" alt="These are images of the different possible boards." class="img">
                    <img src="../assets/images/CF/Boards/Boards_C_resized.png" alt="These are images of the different possible boards." class="img">
                </div>
            </div>
        </section>

        <section class="section section5">

            <div class="text">
                <h1 class="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                <span class="span">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, sed architecto in nobis itaque quod unde nesciunt tempore aperiam mollitia? Maxime minima repellat aliquid odit dolorum quod nesciunt, similique ducimus!</span>
            </div>
            
            <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/2Aoi2ZhUpeI?si=-1m0wcs1Q80vSKc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </section>

        <section class="section section6">

            <span class="downloadLink">
                <RouterLink :to="Tr.i18nRoute({ name: 'cf-downloads' })">{{ $t('captainFlip.downloadButton') }}</RouterLink>
            </span>

        </section>

        <section class="section section7">
            <h1 class="title">{{$t('captainFlip.krakenHeader')}}</h1>
            
            <div class="flexBoxContainer">
                <div class="text">
                    <p class="p">{{$t('captainFlip.krakenText1')}}</p>
                    <p class="p">{{$t('captainFlip.krakenText2')}}</p>
                    <p class="p">{{$t('captainFlip.krakenText3')}}</p>
                    <p class="p">{{$t('captainFlip.krakenText4')}}</p>
                    <p class="p">{{$t('captainFlip.krakenText5')}}</p>
                    <span class="downloadLink">
                        <RouterLink :to="Tr.i18nRoute({ name: 'cf-downloads' })">{{ $t('captainFlip.krakenDownload') }}</RouterLink>
                    </span>
                    <span>{{$t('captainFlip.krakenSubDownload')}}</span>
                </div>
                    
                <!-- <RouterLink class="boardLink" :to="Tr.i18nRoute({ name: 'cf-downloads' })">
                    <img class="board" src="../assets/images/CF/CF_Board_Éclaté.png" alt="All game elements opened up">
                </RouterLink> -->
                <img class="board" src="../assets/images/CF/CF_Board_Éclaté.png" alt="All game elements opened up">
            </div>
        </section>

        <!-- 
            <section class="section section5">
                
                <span>{{ $t("captainFlip.downloadH1") }}</span>

                <div class="download">

                    <div class="text">
                        <span class="docTitle">{{ $t("captainFlip.dlTitle") }}</span>
                        <span class="info">{{ $t("captainFlip.dlInfo") }}</span>
                    </div>

                    <a class="dlLogo" href="/downloads/RGB/CF_Rules_EN.pdf" download="CD_Rules_EN_RGB.pdf">⬇️</a>

                </div>

            </section>
        -->

        <Footer></Footer>
    </div>

</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";

    .section1 {
        display: flex;
        align-items: center;
        justify-content: space-around;

        padding-block: 20px 80px;
        padding-inline: 10px;
        //max-width: 800px;
        width: 100vw;

        // background-color: #006194;
        // color: white;
           
        .boxImageImg {
            width: 25vw;
        }
        
        .mid {
            @include center;
            flex-direction: column;
            gap: 20px;
            margin-left: 20px;

            h1 {
                font-size: 2.2rem;
                text-align: center;
                //font-size: 1.4rem;
                margin-bottom: -10px;
            }

            .CFLogo {
                height: 20vw;
            }

            span {
                width: 400px;
                font-size: 1.1rem;
                text-align: center;
            }

        }
        
        .coins {
            position: relative;
            @include center;

            height: 25vw;
            width: 25vw;

            .coin {
                position: absolute;
                height: 5vw;
                text-align: center;
                &:nth-child(1) {
                    left: 135px;
                    top: 75px;
                    rotate: 30deg;
                    height: 65px;
                }
                &:nth-child(2) {
                    left: 99px;
                    top: 50px;
                    rotate: -6deg;
                    height: 70px;
                }
                &:nth-child(3) {
                    top: 68px;
                    left: 55px;
                    rotate: -20deg;
                    height: 75px;
                }
                &:nth-child(4) {
                    height: 100px;
                    top: 80px;
                    left: 80px;
                }
            }
        }

        .invisibleFlex {
            width: 250px; // Must be same width as right-image width 
        }
    }

    @media screen and (max-width: 800px) {
        .section1 {
            //flex-direction: column !important;
            display: block;
            width: 100vw;
            //justify-content: space-around;

            padding-inline: 0;

            .boxImageImg {
                display: none
            }
            .mid {
                margin-left: 0px;
                .CFLogo {
                    height: 60vw;
                    //aspect-ratio: 339 / 486;
                }
            }
            .coins {
                display: none
            }
        }

        .section2 {
            .subtitle {
                width: 70vw;
            }
        }
    }

    .section2 {
        @include center;
        gap: 30px;
        flex-direction: column;
        padding-inline: 40px;
        padding-block-end: 50px;
        font-size: 1.1rem;

        h1 {
            margin-bottom: -10px;
        }

        .subtitle {
            font-size: 1.1rem;
        }
        .rules {
            display: flex;
            
            align-items: center;
            justify-content: center;

            .text {
                display: flex;
                flex-direction: column;
                
                gap: 30px;
                width: 40vw;
                margin-bottom: 20px;

                .steps {
                    list-style-position: inside;
                    list-style-type: decimal;
                }
            }
            .gameRules {
                width: 100%;
                max-width: 600px;
            }
        }

        .container {
            width: calc(100vw - 20px);
            height: auto;

            @include center;
            flex-direction: column;

            display: none; //* THIS IS HERE

            margin-bottom: 20px;
            padding: 10px;

            position: relative;

            .container {
                width: 100%;
                max-width: 400px;
            }

            .text {
                position: absolute;
                top: 50px;
                right: 100px
            }

            .flipCard {
                position: absolute;
                background-color: transparent;
                //background-color: blue;                
                bottom: 70px;
                left: 130px;

                height: 110px;
                aspect-ratio: 1;
                //padding: 10px;
                
                overflow: hidden;
                perspective: 1000px;

                //@include center;
                
                &:hover .flipCardInner {
                    transform: rotateY(180deg);
                }
                
                .flipCardInner {
                    position: relative;
                    
                    width: 100px;
                    height: 100px;
                    
                    border-radius: 13px;
                    //overflow: hidden;
                    //transform: rotateY(0deg);
                    transition: transform 0.8s;
                    transform-style: preserve-3d;
                    

                    .flipCardFront, .flipCardBack {
                        position: absolute;
                        // top: 0;
                        // left: 0;
                        // overflow: hidden;

                        width: 100%;
                        height: 100%;

                        backface-visibility: hidden;
                        -webkit-backface-visibility: hidden;

                        .img {
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .flipCardFront {
                        //transform: rotateY(180deg);
                        //-webkit-backface-visibility: hidden;
                        //backface-visibility: hidden;
                        display: none;
                        //z-index: -100;
                    }

                    .flipCardBack {
                        transform: rotateY(180deg);
                        //background-color: grey;
                        //-webkit-backface-visibility: hidden;
                        //backface-visibility: hidden;
                        //z-index: -100; // THIS IS IMPORTANT!!
                    }
                }
            }
        }
    }

    @media screen and (max-width: 900px){
        .section2 {
            .rules {
                flex-direction: column;
                .text {
                    width: 100vw;
                    padding: 20px;
                }
                .gameRules {
                    width: 100%;
                    max-width: 800px;
                }
            }
        }
    }

    .subSection {
        width: 100vw;
        margin-block-end: 10px; 
        padding-inline: 20px;
        @include center;
        gap: 20px;

        img {
            max-height: 300px;
        }

        .listTitle, .list {
            text-align: center;
        }

        .listTitle {
            font-size: x-large;
        }
        .list {
            font-size: 1rem;
            list-style-type: disc;
            list-style-position: inside;
        }
    }

    @media screen and (max-width: 800px) {
        .subSection {
            flex-direction: column;
            gap: 30px;

            img {
                height: auto;
                max-width: calc(100vw - 20px);
            }
        }
    }

    .section4 {
        margin-top: 70px;
        @include center;
        flex-direction: column;
        gap: 20px;

        .text {
            padding-inline: 10px;
        }

        .container {
            display: flex;
            gap: 10px;
            height: 35vw;

            .part {
                display: flex;
                gap: 10px;

                img {
                    height: 19vw;
                    transition: height 500ms ease;

                    &:hover {
                        height: 35vw;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .section4 {
            //height: 300px;
            .container {
                flex-direction: column;
                height: auto;

                .part {
                    height: 150px;

                    img {
                        height: 150px;

                        &:hover {
                            height: 150px;
                        }
                    }
                }
            }
        }
    }

    .section5 {
        display: none; //* THIS IS HERE !!

        padding-inline: 10px;
        margin-inline: 10px;
        //margin-block: 50px;
        
        //display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        width: calc(100vw - 20px);

        color: $plum;
        
        .text {
            max-width: 400px;
            .title {
                margin-bottom: 5px;
            }
        }
        
        .video {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 700px) {
        .section5 {
            flex-direction: column;
        }
    }

    .section6 {
        padding: 10px;
        margin-block: 30px;
        width: 100vw;
        @include center;

        .downloadLink > a {
            display: flex;
            align-items: center;

            width: fit-content;

            padding-inline: 16px;
            padding-block: 10px;
            cursor: pointer;

            border-radius: 10px;
            background-color: $plum;

            font-size: larger;
            text-decoration: none;
            color: $white;
            
            transition: all .3s;

            &:hover {
                -webkit-box-shadow:inset 0px 0px 0px 2px $plum;
                -moz-box-shadow:inset 0px 0px 0px 2px $plum;
                box-shadow:inset 0px 0px 0px 2px $plum;

                background-color: $white;
                color: $plum;
            }
        }
    }

    .section7 {
        padding-inline-end: 10px;
        margin-inline-end: 10px;
        margin-block: 50px;
        
        color: $plum;
        
        .title {
            margin-bottom: 15px;
            text-align: center;
            width: 100vw;
        }

        .flexBoxContainer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 10px;
            width: calc(100vw - 20px);

            padding-inline-start: 10px;
            margin-inline-start: 10px;
            
            .text {
                .p {
                    //max-width: 400px;
                    margin-bottom: 10px;
                }
            }

            .board {
                max-width: 40%;
                margin-right: 20px;
            }

            .span {
                margin-left: 5px;
                margin-top: 5px;
            }
        }
        

        .downloadLink > a {
            display: flex;
            align-items: center;

            width: fit-content;

            padding-inline: 16px;
            padding-block: 10px;
            
            margin-block-start: 30px;

            cursor: pointer;

            border-radius: 10px;
            background-color: $plum;

            font-size: larger;
            text-decoration: none;
            color: $white;
            
            transition: all .3s;

            &:hover {
                -webkit-box-shadow:inset 0px 0px 0px 2px $plum;
                -moz-box-shadow:inset 0px 0px 0px 2px $plum;
                box-shadow:inset 0px 0px 0px 2px $plum;

                background-color: $white;
                color: $plum;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .section3 {
            flex-direction: column;
            @include center;

            .span {
                width: 100%;
            }
        }

        .section1 {
            flex-direction: row;
        }
    }

</style>