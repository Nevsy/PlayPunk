<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
    import { useI18n } from 'vue-i18n'

    function reload(){
        setTimeout(window.location.reload(), 0);
    }

    // Function to italicize specific words
    function styleWords(text, wordsToItalicize) {
      wordsToItalicize.forEach(word => {
        const regex1 = new RegExp('\\b' + word + '\\b', 'gi');
        text = text.replace(regex1, `<i>$&</i>`);
      });
      wordsToBolden.forEach(word => {
        const regex2 = new RegExp('\\b' + word + '\\b', 'gi');
        text = text.replace(regex2, `<span style="font-weight: 700">$&</div>`);
      });
      //Proposition
    wordsToColor.forEach(word => {
        const regex2 = new RegExp('\\b' + word + '\\b', 'gi');
        text = text.replace(regex2, `<span style="color: #7f72b5">$&</div>`);
    });
      return text;
    }

    function stylizeWordsWithMarkers(text) {
        const regex1 = /\\i(.*?)\\i/g;
        text = text.replace(regex1, '<i>$1</i>');

        const regex2 = /\\b(.*?)\\b/g;
        text = text.replace(regex2, `<span style="font-weight: 700">$1</span>`);

        return text;
    }

    // Words to style
    const wordsToItalicize = ["Captain Flip", "Just One", "Time’s Up", "Concept", "Gregory Grard", "Mathieu Roussel", "Paolo Mori", "Remo Conzadori", "Paris est Ludique", "Hanabi", "Tokaido", "Takenoko", "Ghost stories", "Draftosaurus", "7 Wonders"];
    const wordsToBolden = ["Captain Flip"];

    //proposition
    const names = ["Gregory Grard", "Mathieu Roussel", "Paolo Mori", "Remo Conzadori", "Paris est Ludique"]
    const wordsToColor = wordsToItalicize.filter(n => !names.includes(n))

    let inputText1 = useI18n().t("about.p1")
    let inputText2 = useI18n().t("about.p2")
    let inputText3= useI18n().t("about.p3")
    let inputText4= useI18n().t("about.p4")
    let inputText5= useI18n().t("about.p5")
    let inputText6= useI18n().t("about.p6")
    let inputText7= useI18n().t("about.p7")
    let inputText8= useI18n().t("about.p8")
    let inputText9= useI18n().t("about.p9")
    let inputText10= useI18n().t("about.p10")

    let outputText1 = stylizeWordsWithMarkers(styleWords(inputText1, wordsToItalicize))
    let outputText2 = stylizeWordsWithMarkers(styleWords(inputText2, wordsToItalicize))
    let outputText3 = stylizeWordsWithMarkers(styleWords(inputText3, wordsToItalicize))
    let outputText4 = stylizeWordsWithMarkers(styleWords(inputText4, wordsToItalicize))
    let outputText5 = stylizeWordsWithMarkers(styleWords(inputText5, wordsToItalicize))
    let outputText6 = stylizeWordsWithMarkers(styleWords(inputText6, wordsToItalicize))
    let outputText7 = stylizeWordsWithMarkers(styleWords(inputText7, wordsToItalicize))
    let outputText8 = stylizeWordsWithMarkers(styleWords(inputText8, wordsToItalicize))
    let outputText9 = stylizeWordsWithMarkers(styleWords(inputText9, wordsToItalicize))
    let outputText10 = stylizeWordsWithMarkers(styleWords(inputText10, wordsToItalicize))
    
</script>

<template>
    <Nav v-on:sendToMain="reload()" />

    <section class="section section1">
        <h1 v-for="number in [1, 2, 3]">{{ $t("about.header-p"+ number) }}</h1>
        <img src="../assets/images/LOGO_Prune.png" alt="playpunk logo">
        <!-- <h1 style="font-weight: 700; font-style: italic; font-size:xx-large">PlayPunk.</h1> -->
    </section>

    <a href="#section2">
        <svg class="chevron" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>

    <svg class="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,117.3C672,107,768,149,864,176C960,203,1056,213,1152,181.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <section id="section2" class="section section2">
        <!-- <h1>{{ $t("about.t1") }}</h1> -->
        
        <div class="columns">
            <div class="column">
                <span v-html="outputText1"></span>
                <img src="../assets/images/About/Thomas.png" alt="A picture of Thomas Provoost">
            </div>
            <div class="column">
                <span v-html="outputText2"></span>
                <img src="../assets/images/About/Antoine.png" alt="A picture of Antoine Bauza">
            </div>
        </div>
        <div class="sevenW">
            <span v-html="outputText3"></span>
            <br>
            <img src="../assets/images/About/7W.png" alt="The 7 Wonders Box">
        </div>

        <h1>{{ $t("about.t2") }}</h1>
        <span v-html="outputText4"></span>
        <span v-html="outputText5"></span>
        <span v-html="outputText6"></span>
        <span v-html="outputText7"></span>

        <h1>{{ $t("about.t3") }}</h1>
        <span v-html="outputText8"></span>
        <span v-html="outputText9"></span>
        <span v-html="outputText10"></span>
    </section>

    <!-- <button @click="refresh()" style="width: 100px;height: 20px;background-color: red;">hey</button> -->

    <Footer/>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";

    .section1 {
        margin-top: 40px;

        width: 100vw;
        display: flex;
        gap: 16px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        img {
            margin-top: 10px;
            height: 25vh;
        }
    }

    .chevron {
        height: 75px;
        margin-left: calc(50vw - (75px / 2));
        stroke: $plum;
        margin-bottom: -35px;
    }

    .wavy {
        margin-bottom: -10px;
        fill: $plum;
    }

    .section2 {
        background-color: $plum;
        width: 100vw;

        text-align: justify;

        display: flex;
        justify-content: center;
        flex-direction: column;
        color: $white;

        padding-inline: 70px;
        padding-block-end: 15px;
        
        span {
            font-size: 1.3rem;
            padding-inline: 5px;
            padding-block: 5px;
            font-weight: 400;
        }

        h1 {
            font-size: 1.7rem;
            margin-block: 25px;
            text-align: center;
        }

        img {
            max-height: 250px;
            max-width: 250px;
        }
        
        .columns {
            display: flex;
            justify-content: center;
            column-gap: 70px;

            margin-block-end: 20px;
            
            .column {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
        .sevenW {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media screen and (max-width: 800px) {
        .columns {
            flex-direction: column;
            row-gap: 20px;
        }
    }
</style>