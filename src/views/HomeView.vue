<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import { onMounted, ref, watch } from 'vue'
    import Tr from "@/i18n/translation"

    const constructionBool = ref(true)

    const triggerConstruction = () => {
        constructionBool.value = false
    }

	const cards = ref([])
	const locale = ref(Tr.currentLocale)

	// reload when language changes
	const reload = () => {
		locale.value = Tr.currentLocale
	}

	// fetch JSON
	const loadCards = async () => {
		try {
			const res = await fetch('/data/cards.json')
			cards.value = await res.json()
		} catch (e) {
			console.error("Failed to load cards.json", e)
		}
	}

	const mounted_fun = async () => {
		loadCards();
		console.log("\n\
    ____                           _____               \n\
   / __ \\____  __  _____  _____   / ___/   _____  ____ \n\
  / /_/ / __ \\/ / / / _ \\/ ___/   \\__ \\ | / / _ \\/ __ \\\n\
 / _, _/ /_/ / /_/ /  __/ /      ___/ / |/ /  __/ / / /\n\
/_/ |_|\\____/\\__, /\\___/_/      /____/|___/\\___/_/ /_/ \n\
            /____/                                     \n\
        ")
	}

    onMounted(() => {
        setTimeout(
            mounted_fun, 3000)
    });
</script>

<template>
    <Nav v-on:sendToMain="reload()"/>

    <!-- <div class="construction" v-if="constructionBool">This website is still under construction.<div class="construction_trigger" @click="triggerConstruction()"></div></div> -->
    <section class="section section1">
		<!-- main zenith presentation -->
		<div class="zenith card">
		<div class="title">
			<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })">
				<img class="logo" src="../assets/images/Zenith/logo_orange.png" alt="Zenith Logo">
			</RouterLink >
			<div class="titlePart2 titleZenith">
				<h1 class="titlePart2">{{ $t("home.header_zenith") }}</h1>
				<i><h1 class="titlePart2">{{ $t("home.headerNomin_zenith") }}</h1></i>
			</div>
		</div>

		<div class="banner-wrapper">
			<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })" class="banner ZE_Banner">
				<img class="bgImg ZE_Cover" src="../assets/images/home/ZE_Cover_Art.png" alt="Zenith Cover">
			</RouterLink >
			
			<div class="expansion-badge">
				<div class="expansion-images">
					<img class="exp-img" src="../assets/images/home/zenith-expansion.png" alt="Expansion">
				</div>
			</div>
			<span class="expansion-text">{{ $t("home.zenith_expansion") }}</span>
		</div>
		
		<div class="buttons">
			<RouterLink :to="Tr.i18nRoute({ name: 'zenith' })" class="button button1">{{ $t("home.button1") }}</RouterLink>
		</div>
	</div>

	<div class="captainflip card">
		<div class="title">
			<RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })">
					<img class="logo" src="../assets/images/home/CF_Logo.png" alt="Captain Flip Logo">
			</RouterLink >
			<div class="titlePart2">
				<h1 class="titlePart2">{{ $t("home.header_captainflip") }}</h1>
				<i><h1 class="titlePart2">{{ $t("home.headerNomin_captainflip") }}</h1></i>
			</div>
		</div>

		<div class="banner-wrapper">
			<RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="banner">
				<img class="bgImg" src="../assets/images/home/CF_Cover_Artwork.png" alt="Captain Flip Cover">
			</RouterLink >

			<div class="expansion-badge CFexpbadge">
				<div class="expansion-images fanned">
					<img class="exp-img CFexpimg back" src="../assets/images/home/CF_Boards_Goodies_Kraken.png" alt="Expansion 1">
					<img class="exp-img CFexpimg front" src="../assets/images/CF/isla/isla_cover.png" alt="Expansion 2">
				</div>
			</div>
			<span class="expansion-text">{{ $t("home.CF_expansions") }}</span>
		</div>

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
			<!-- Dynamic Cards -->
			<template v-for="card in cards" :key="card.id">
		
				<!-- Internal link -->
				<RouterLink
					v-if="!card.external"
					class="card small"
					:to="card.link[locale]"
				>
					<span>{{ card.text[locale] }}</span>
					<img
					class="image"
					:class="{ smaller_img: card.smaller_img }"
					:src="card.image"
					:alt="card.alt[locale]"
					/>
				</RouterLink>
				
				<!-- External link -->
				<a
				v-else
				class="card small"
				:href="card.link[locale]"
				target="_blank"
				rel="noopener"
				>
				<span>{{ card.text[locale] }}</span>
				<img
				class="image"
				:class="{ smaller_img: card.smaller_img }"
				:src="card.image"
				:alt="card.alt[locale]"
				/>
				</a>

			</template>

			<!-- depricated cards, new ones are in pure js loaded from a json file -->
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

				a { // remove overflow on routerlink
					overflow: hidden;
				}
				.logo {
					max-width: 30vh;
					height: auto;
					object-fit: contain;
					overflow: hidden;
				}

				.titlePart2 {
					font-size: 1.5rem;
					font-weight: 400;
					text-align: center;
					overflow: hidden;
					padding-bottom: 5px;

					&.titleZenith {
						padding-top: 20px;
					}
				}
			}

			.banner {
				width: 90%;
				max-width: 500px;
				max-height: 400px;
				height: 50vh;
				overflow: hidden;
				border-radius: 10px;
				box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
				
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
				
				&.ZE_Banner {
					width: 90%;
					box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
					background-color: #fbfaf6;
					border-radius: 10px;

					.ZE_Cover {
						border-radius: 10px;
						object-fit: contain; // https://css-tricks.com/on-object-fit-and-object-position/   object-fit, object-position!!
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

		.banner-wrapper {
			position: relative; // The anchor for the expansion badge
			overflow: visible;
			width: 90%;
			max-width: 500px;
			display: flex;
			justify-content: center;
			margin: 50px;
			margin-top: 20px;

			// Maintain the existing banner styles
			.banner {
				width: 100%;
				height: 50vh;
				max-height: 400px;
				overflow: hidden; // Keeps the zoom effect contained
				border-radius: 10px;
				box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);

				.bgImg {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.3s ease;
					&:hover { transform: scale(1.05); }
				}
			}
		}

		.expansion-badge {
			position: absolute;
			bottom: -30px; // Overlaps the bottom edge slightly for a 3D look
			left: -10px;   // Overlaps the left edge
			display: flex;
			flex-direction: column;
			align-items: center;
			pointer-events: none; // Allows clicks to pass through to the banner link
			z-index: 10;
			// height: calc(fit-content + 20px);

			&.CFexpbadge {
				left: -40px;
			}
			
			.expansion-images {
				display: flex;
				align-items: flex-end;
				justify-content: center;
				height: calc(fit-content + 20px);
				padding: 20px;
				overflow: hidden;
				
				.exp-img {
					object-fit: contain;
					transform: rotate(-10deg);
					width: 85px;
					height: auto;
					filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));

					&.CFexpimg {
						width: 115px;
					}
				}

				&.fanned {
					.exp-img.back {
						transform: translateX(15px) rotate(-20deg) scale(0.9);
						opacity: 0.9;
					}
					.exp-img.front {
						transform: translateX(-15px) rotate(-5deg);
					}
				}
			}

		}

		.expansion-text {
			position: absolute;
			bottom: -45px;
			font-size: 1rem;
			font-weight: 600;
			color: $plum;
			padding: 2px 8px;
			border-radius: 4px;
			backdrop-filter: blur(4px);
			margin-top: 5px;
		}
		
		// Mobile Adjustments
		@media screen and (max-width: 768px) {
			.expansion-badge {
				bottom: -10px;
				left: 5px;
				.exp-img { width: 60px; }
				.expansion-text { font-size: 0.75rem; }
			}
		}

		.captainflip {
			.logo {
				max-height: 17vh;
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

			.banner {
				width: 100%;
				box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
				//max-height: fit-content;
			}
		}
	}

	@media screen and (min-width: 1250px){
		.ZE_Banner {
			width: 70%;
			max-height: 500px;
			box-shadow: none;
			max-height: fit-content;
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
					max-height: 40vh;
				}
			}
		}
	}

	@media screen and (max-height: 850px) and (max-width: 1000px) {
		.section1 {
			.card.captainflip {
				.logo {
					height: auto;
					overflow: hidden;
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
			
			.image.smaller_img {
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