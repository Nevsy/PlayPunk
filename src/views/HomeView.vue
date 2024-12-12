<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import { onMounted } from 'vue'
    import Tr from "@/i18n/translation"

    import { ref } from 'vue'
    const constructionBool = ref(true)

    const triggerConstruction = () => {
        constructionBool.value = false
    }

    onMounted(() => {
        setTimeout(
            console.log("\n\
    ____                           _____               \n\
   / __ \\____  __  _____  _____   / ___/   _____  ____ \n\
  / /_/ / __ \\/ / / / _ \\/ ___/   \\__ \\ | / / _ \\/ __ \\\n\
 / _, _/ /_/ / /_/ /  __/ /      ___/ / |/ /  __/ / / /\n\
/_/ |_|\\____/\\__, /\\___/_/      /____/|___/\\___/_/ /_/ \n\
            /____/                                     \n\
        "), 3000)
    });
</script>

<template>
    <Nav />

    <!-- <div class="construction" v-if="constructionBool">This website is still under construction.<div class="construction_trigger" @click="triggerConstruction()"></div></div> -->
    <section class="section section1">
		<div class="zenith card">
			<div class="title">
				<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })">
					<img class="logo" src="../assets/images/Zenith/logo_orange.png" alt="Captain Flip 'logo' (captain written on a banner, flip written right under)">
				</RouterLink >
				<h1 class="titlePart2">{{  $t("home.header_zenith") }}</h1>
			</div>
	
			<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })" class="banner">
				<img class="bgImg" src="../assets/images/home/ZE_Cover_Art.jpg" alt="Boxtop image for Captain Flip used as a banner image">
			</RouterLink >
	
			<div class="buttons">
				<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })" class="button button1">{{ $t("home.button1") }}</RouterLink>
			</div>
		</div>

		<div class="captainflip card">
			<div class="title">
				<!-- <RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="h1Link"><h1 class="titlePart1">{{  $t("home.header1") }}</h1></RouterLink> -->
				<RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })">
					<img class="logo" src="../assets/images/home/CF_Logo.png" alt="Captain Flip 'logo' (captain written on a banner, flip written right under)">
				</RouterLink >
				<h1 class="titlePart2">{{  $t("home.header_captainflip") }}</h1>
			</div>
	
			<RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="banner">
				<img class="bgImg" src="../assets/images/home/CF_Cover_Artwork.png" alt="Boxtop image for Captain Flip used as a banner image">
			</RouterLink >
	
			<div class="buttons">
				<RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="button button1">{{ $t("home.button1") }}</RouterLink>
			</div>
		</div>
    </section>
    
    <a href="#section2">
        <svg class="chevron" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>

    <svg class='wavy' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L34.3,149.3C68.6,139,137,117,206,101.3C274.3,85,343,75,411,101.3C480,128,549,192,617,213.3C685.7,235,754,213,823,213.3C891.4,213,960,235,1029,229.3C1097.1,224,1166,192,1234,149.3C1302.9,107,1371,53,1406,26.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    
    <section id="section2" class="section section2">
        <div class="grid">

            <RouterLink class="card small" :to="Tr.i18nRoute({ name: 'cf-downloads' })">
                <span>{{ $t("home.kraken") }}</span>
                <img src="../assets/images/home/CF_Boards_Goodies_Kraken.png" alt="In the nozzle of the kraken game board" class="image kraken">
            </RouterLink>

            <a class="card small" href="https://www.spiel-des-jahres.de/spiele/captain-flip/" target="_blank">
                <span>{{ $t("home.spieldesjahres") }}</span>
                <img class="image" src="../assets/images/home/SpieldesJahres_nomination.png" alt="Spiel des jahres nomination">
            </a>

            <a class="card small" href="https://en.boardgamearena.com/gamepanel?game=captainflip" target="_blank">
                <span>{{ $t("home.bga") }}</span>
                <img class="image" src="../assets/images/home/bga.webp" alt="Board game arena logo">
            </a>

            <a class="card small" href="https://game-park.com/en/board-games/captain-flip" target="_blank">
                <span>{{ $t("home.game-park") }}</span>
                <img class="image game-park" src="../assets/images/home/game-park-icon.svg" alt="Board game arena logo">
            </a>

            <!-- <a class="card small" id="spieldesjahresimage" href="https://www.spiel-des-jahres.de/spiele/captain-flip/" target="_blank">
                <span>{{ $t("home.newExtention") }}</span>
                <img class="image" src="../assets/images/home/SpieldesJahres_nomination.webp" alt="Spiel des jahres nomination">
            </a> -->

            <!-- <a class="card small" href="/src/downloads/RGB/CF-Goodies-rules-multi.pdf" download="KrakenRules.pdf">
                <div class="textContainer">
                    <span>{{ $t("home.kraken") }}</span>
                    <br>
                    <p class="sub">{{ $t("home.krakenSub") }}</p>
                </div>
                <img src="../assets/images/home/CF_Boards_Goodies_Kraken.png" alt="In the nozzle of the kraken game board" class="image kraken">
            </a> -->

        </div>
    </section>
    
    <Footer />
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";

	body {
		overflow-x: hidden;
	}

    .construction {
        width: 100vw;
        //height: 40px;
        padding-block: 5px;
        text-align: center;
        color: white;
        background-color: $plum;
        position: relative;

        &_trigger {
            position: absolute;
            right: 5px;
            top: 10px;

            background: transparent;
            //position: relative;
            border: 0;
            font: inherit;
            color: inherit;

            width: 100%;
            height: 100%;
            margin-top: -5px;

            &::before, &::after {
                position: absolute;
                right: 1em;
                top: .5em;
                content: "";
                display: block;
                width: 1em;
                height: 5px;
                background: white;
                transition: transform 500ms;
                transform: rotate(45deg);
            }

            &::after {
                rotate: 90deg;
            }
        }
    }

	.section1 {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		max-width: 80vw;

		margin-left: 10vw;
		margin-top: 2vh;
		padding: 2rem;
		padding-top: 1vh;

		.card {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			
			.title {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				height: 27vh;

				.logo {
					max-width: 250px;
					height: auto;
					object-fit: contain;
				}

				.titlePart2 {
					font-size: 1.5rem;
					font-weight: 400;
					text-align: center;
				}
			}

			.banner {
				width: 90%;
				max-height: 400px;
				overflow: hidden;
				border-radius: 10px;

				.bgImg {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 10px;
					transition: transform 0.3s ease;

					&:hover, &:active {
						transform: scale(1.1);
					}
				}
			}

			.buttons {	
				display: flex;
				gap: 25px;
	
				.button {
					display: flex;
					align-items: center;
	
					padding-inline: 16px;
					padding-block: 10px;
					cursor: pointer;
	
					border-radius: 10px;
					background-color: $plum;
	
					text-decoration: none;
					color: $white;
					
					transition: all .3s;
	
					&:hover, &:active {
						-webkit-box-shadow:inset 0px 0px 0px 2px $plum;
						-moz-box-shadow:inset 0px 0px 0px 2px $plum;
						box-shadow:inset 0px 0px 0px 2px $plum;
	
						background-color: $white;
						color: $plum;
					}
				}
			}
		}

		.zenith {
				.banner {
					box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
				}
			}
	}

	// Responsive design
	@media screen and (max-width: 1000px) {
		.section1 {
			.title {
				height: auto;
				.logo {
					width: 200px;
				}
			}

			.zenith {
				.banner {
					min-height: 300px;
					box-shadow: none;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.section1 {
			flex-direction: column;
			gap: 10vh;
			max-width: 100vw;
			margin-left: 0vw;
			padding: 1rem;

			.card {
				width: 100%;

				.banner {
					width: 100%;
					max-height: 200px;
				}
			}
		}
	}

    .chevron {
        height: 75px;
        margin-left: calc(50vw - (75px / 2));
        stroke: $plum;
        margin-top: 20px;
        margin-bottom: -30px;
    }

    .wavy {
        margin-bottom: -6px;
        fill: $plum;

    }

    .section2 {
        background-color: $plum;
        width: 100vw;
        height: auto;

        display: flex;
        justify-content: center;
		
        .card {
			display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
			
            background: $lightPlum;
            font-size: 3rem;
            color: $white;
            text-decoration: none;
			
            box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
            
            height: 250px;
            width: 100%;
            border-radius: 10px;
			
            transition: all 100ms;
            overflow: hidden;
			
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
			
            padding-block-start: 10px;
			
            &:hover {
				box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
                
                -webkit-box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
                -moz-box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
                box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
            }
        }
		
        .small {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			
			padding-left: 30px;
			padding-right: 10px;
			
			font-size: 1.4rem;
			
			.image {
				margin-bottom: 10px;
				margin-left: 10px;
				width: 350px;
				max-height: 250px;
				max-width: 170px;
				aspect-ratio: initial;
				
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.image.game-park {
				width: 300px;
				max-width: 200px;
				max-height: 170px;
			}
			
			.sub {
				margin-top: 5px;
				font-size: small;
			}
		}
	}

    @container (max-height: 300px) { // working
        .small > .image {
            max-height: 250px;
        }
    }

    .grid {
        display: grid;
        gap: 16px;

        width: 800px;
        padding: 10px 10px 50px 10px;

        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
</style>