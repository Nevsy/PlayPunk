<script setup>
	import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
	
    import { RouterLink } from 'vue-router'
    import Tr from "@/i18n/translation"

    import { ref } from 'vue'

    const locale = ref(Tr.currentLocale)

    const reload = () => {
        locale.value = Tr.currentLocale
    }

	const images = ref([
		"/src/assets/images/Zenith/cards/card1.jpg",
		"/src/assets/images/Zenith/cards/card2.jpg",
		"/src/assets/images/Zenith/cards/card3.jpg",
		"/src/assets/images/Zenith/cards/card4.jpg",
		"/src/assets/images/Zenith/cards/card5.jpg",
		"/src/assets/images/Zenith/cards/card6.jpg",
		"/src/assets/images/Zenith/cards/card7.jpg",
		"/src/assets/images/Zenith/cards/card8.jpg"
	]);

	const extensionImages = ref([
		"/src/assets/images/Zenith/cards_extension/card_1.jpg",
		"/src/assets/images/Zenith/cards_extension/card_2.jpg",
		"/src/assets/images/Zenith/cards_extension/card_3.jpg",
		"/src/assets/images/Zenith/cards_extension/card_4.jpg"
	]);

	// MARK: fix as dor
	const nominations = [
		{
			id: 'asdor',
			name: "As d'Or 2026",
			image: "/src/assets/images/Zenith/nominations/as_dor_2026_won.png", 
			link: "https://www.festivaldesjeux-cannes.com/fr/festival-label-as-d-or-jeu-de-l-annee"
		},
		{
			id: 'spiel',
			name: "Long list Kennerspiel des Jahres 2026",
			image: "/src/assets/images/Zenith/nominations/kennerspiel_2025.png",
			link: "https://www.spiel-des-jahres.de/aktuelle-preistraeger-2025/"
		},
		{
			id: 'lys',
			name: "Lys 2026 \"Initié\"",
			image: "/src/assets/images/Zenith/nominations/Lys_Initie_Zenith.svg",
			link: "https://www.salondujeumtl.ca/le-prix-des-lys#:~:text=Les%20Lys%20du%20jeu%20de,disponibles%20en%20fran%C3%A7ais%20au%20Qu%C3%A9bec.&text=GALA%20des%20LYS%20%3A%20Un%20Gala,gagnants%20pour%20chacune%20des%20cat%C3%A9gories%20."
		}
	]
</script>

<template>
	<Nav v-on:sendToMain="reload()"/>

	<section class="section1 header">
		<img class="sun" src="../assets/images/Zenith/general/sun.png" alt="background image: stylized sun">
		<div class="notsun">
			<img class="logo" src="../assets/images/Zenith/logo_white.png" alt="Zenith logo">
			<div class="container">
				<div class="text">
					<h2 class="header1">{{ $t('zenith.section1.header1') }}</h2>
					<h2 class="header2">{{ $t('zenith.section1.header2') }}</h2>
					<p id="expl1">{{ $t('zenith.section1.explanation1') }}</p>
					<p>{{ $t('zenith.section1.explanation2') }}</p>
				</div>
				<div class="nominations">
					<img class="nominImg" v-for="nomin in nominations" :src="nomin.image" :href="nomin.link" :alt="`nomination badge for the ${nomin.name}`">
				</div>
			</div>
		</div>
	</section>

	<section  class="section section6 section_video">
		<div class="text">
			<h1 class="title">Trailer</h1>
		</div>
		<iframe v-if="locale == 'fr'" width="560" height="315" src="https://www.youtube.com/embed/xM_b2mMSljw?si=qF1QDD3Dw-os2kUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<iframe v-else width="560" height="315" src="https://www.youtube.com/embed/RQwyBgx5kBI?si=-VKivr8TMLr9wsBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	</section>

	<section class="section2 board">
		<span class="goalGame">{{ $t('zenith.section2.goalGame') }}</span>
		<img v-if="locale == 'fr'" src="../assets/images/Zenith/general/boxbottom_fr.png" alt="image of the board, set up">
		<img v-if="locale == 'en'" src="../assets/images/Zenith/general/boxbottom_en.png" alt="image of the board, set up">
	</section>
	
	<section class="section3 scrollingcards">
		<span class="title">{{ $t('zenith.section3.scrollingCards') }}</span>
		<p>{{ $t('zenith.section3.cardDescription') }}</p>
		<div class="scroller">
			<div class="scroller__inner scroller__inner1">
				<img v-for="(img, index) in images" :key="index" :src="img" alt="Playing card" />
			</div>
			<div class="scroller__inner scroller__inner2">
				<img v-for="(img, index) in images" :key="index" :src="img" alt="Playing card" />
			</div>
		</div>
	</section>
	
	<section class="section4 movingplanets">
		<span class="title">{{ $t('zenith.section4.movingPlanets') }}</span>
		<div class="container">
			<div class="left">
				<img class="board1 tech_left" src="../assets/images/Zenith/board/board_1.png" alt="2 completely different technology boards, showing versatility">
				<img class="board4 tech_left" src="../assets/images/Zenith/board/board_4.png" alt="2 completely different technology boards, showing versatility">
			</div>
			<div class="mid">
				<img class="board2 tech_center" src="../assets/images/Zenith/board/board_2.png" alt="2 completely different technology boards, showing versatility">
				<img class="board5 tech_center" src="../assets/images/Zenith/board/board_5.png" alt="2 completely different technology boards, showing versatility">
			</div>
			<div class="right">
				<img class="board3 tech_right" src="../assets/images/Zenith/board/board_3.png" alt="2 completely different technology boards, showing versatility">
				<img class="board6 tech_right" src="../assets/images/Zenith/board/board_6.png" alt="2 completely different technology boards, showing versatility">
			</div>
		</div>
	</section>

	<section class="section5 content">
		<span class="title">{{ $t('zenith.section6.content') }}</span>
		<img src="../assets/images/Zenith/general/eclate.png" alt="image showing the game setup and contents">
		<!-- <ul>
			
		</ul> -->
	</section>

	<section v-if="locale == 'fr'" class="section section6 section_video">
		<!-- <div class="text">
			<h1 class="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
			<span class="span">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, sed architecto in nobis itaque quod unde nesciunt tempore aperiam mollitia? Maxime minima repellat aliquid odit dolorum quod nesciunt, similique ducimus!</span>
		</div> -->

		<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/cKjOd1lekeY?si=pXjcD03ebrFrJ4Ix" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>		<!-- <iframe v-else width="560" height="315" src="https://www.youtube.com/embed/NTBDTN9mqtM?si=u7TSMUUTGqYB8US1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
	</section>

	<section class="section7 extension" id="ZEbooster">
		<span class="title">{{ $t('zenith.section7.title')}}</span>
		<p class="subtitle">{{ $t('zenith.section7.subtitle') }}</p>
		<div class="buttonContainer">
			<span class="downloadLink">
				<a href="/src/downloads/ZE_Booster_Rules.pdf" target="_blank" rel="noopener">
					{{ $t('zenith.section7.downloadButton')}}
				</a>
			</span>
			<span class="purchaseLink">
				<a href="https://www.philibertnet.com/fr/playpunk/163454-zenith-secret-agents-5430003838303.html" target="_blank" rel="noopener">
					{{ $t('zenith.section7.purchaseButton')}}
				</a>
			</span>
		</div>
		<div class="card-fan">
			<div class="card" v-for="(img, index) in extensionImages" :key="index" :style="{ '--angle': `${(index - 1.5) * 15}deg` }">
				<img :src="img" alt="Extension card" />
			</div>
		</div>
	</section>

	<section class="section8 section_BGA_PARK">
		<span class="title">{{ $t("zenith.BGA_PARK_title") }}</span>
		<div class="image_container">
			<a v-if="locale == 'fr'"	href="https://fr.boardgamearena.com/gamepanel?game=zenith"><img class="image" src="../assets/images/home/bga.webp" alt="Board Game Arena logo"></a>
			<a v-else					href="https://en.boardgamearena.com/gamepanel?game=zenith"><img class="image" src="../assets/images/home/bga.webp" alt="Board Game Arena logo"></a>
			<a v-if="locale == 'fr'"	href="https://game-park.com/fr/board-games/zenith"><img class="image" src="../assets/images/home/game-park-icon.svg" alt="Game Park logo"></a>
			<a v-else 					href="https://game-park.com/en/board-games/zenith"><img class="image" src="../assets/images/home/game-park-icon.svg" alt="Game Park logo"></a>
		</div>
	</section>

	<section class="section9 rules">
		<span class="downloadLink">
			<RouterLink :to="Tr.i18nRoute({ name: 'press', hash: '#Zenith' })">{{ $t('captainFlip.downloadButton') }}</RouterLink>
		</span>
	</section>

	<section class="section section10">
		<h1 class="title">{{ $t('captainFlip.nominations_title') }}</h1>
		
		<div class="nominations_container">
			<a
				class="nomination"
				v-for="nomin in nominations"
				:key="nomin.id"
				:href="nomin.link" target="_blank" rel="noopener">
					<h2>{{ nomin.name }}</h2>
					<img v-if="nomin.image != ''" :src="nomin.image" alt="nomination display image">
			</a>
		</div>
	</section>

	<Footer />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/scss/_variables.scss";
@import "@/assets/styles/scss/_mixins.scss";

// Mixin for keyframe generation
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

// Variables for animation timing and control
$transition-duration: 3s;
$total-animation-duration: $transition-duration * 6;

.section1 {
	position: relative;
	// height: auto;
	height: 50vh;
	overflow: hidden;
	
	.notsun {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.logo {
			margin-block: 50px;
			max-height: 90px;
			width: fit-content;
			
		}
	
		.container {
			//position: absolute;
			position: relative;
			width: 80vw;
			
			display: flex;
			flex-direction: row;
			align-items: center;
			//gap: 50px;
			
			.text {
				text-align: center;
				color: $plum;
				display: flex;
				gap: 20px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 50vw;
				
				
				h2 {
					font-size: 1rem;
					font-weight: bold;
					margin-bottom: 20px;
					
					&.header1 {
						margin-bottom: -.7rem;
					}
				}
			}
			
			
			.nominations {
				text-align: center;
				
				.nominImg {
					height: 180px;
					// max-height: 150px;
					margin-left: 10px;
				}
			}
		}
	}

	.sun {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150vw;
		transform: translate(-25vw, -75%);
		background-size: cover;
		background-position: center;

		img {
			width: 300px;
			max-width: 80%;
			height: auto;
		}
	}
}

@media screen and (max-width: 1500px) {
	.section1 {
		height: 70vh;
	}
}

@media screen and ((max-height: 900px) and (min-width: 1500px)) {
	.section1 {
		height: 70vh;
	}
}

@media screen and (max-width: 768px) {
	.section1 {
		.notsun {
			.logo {
				max-height: auto;
				max-width: 90vw;
			}
			
			.container {
				flex-direction: column;
				gap: 10px;

				.text {
					width: 100%;

					#expl1 {
						display: none;
					}
				}

				.nominations {
					display: flex;
					align-items: center;

					.nominImg {
						margin-left: 0;
						width: 90px;
						height: auto;
					}
				}
			}
		}
	}
}

.section2 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	.goalGame {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	img {
		max-width: 80%;
		height: auto;
	}
}

@media screen and (max-width: 1000px) {
	.section2 {
		img {
			max-width: 110%;
		}
	}
}

.section3 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	overflow-x: hidden;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: .5rem;
	}

	p {
		margin-bottom: 2rem;
		font-size: 1.1rem;
		text-align: center
	}

	.scroller {
		position: relative;
		width: 100%;
		overflow: hidden;

		&__inner {
			display: flex;
			gap: 1rem;
			width: max-content;
			animation: scroll1 60s linear infinite;

			img {
				margin-block-end: 120px; // Makes the space underneath
				width: 200px;
				height: auto;
				flex-shrink: 0;
				border-radius: 5px;
				box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.2);
			}
		}

		&__inner2 {
			animation: scroll2 60s linear infinite;
			margin-bottom: -25%;
		}

		&::after {
			content: "";
			background: linear-gradient(
				to right,
				$white,
				transparent
			);
			height: 100%;
			width: 5%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 100;
		}

		&::before {
			content: "";
			background: linear-gradient(
				to left,
				$white,
				transparent
			);
			height: 100%;
			width: 5%;
			position: absolute;
			right: 0;
			z-index: 100;
		}
	}

	@keyframes scroll1 {
		0% {
			transform: translateX(calc(0));
		}
		50% {
			transform: translateX(calc(-100% - 1rem));
		}
		50.001% {
			transform: translateX(calc(100% + 1rem));
		}
		100% {
			transform: translateX(calc(0));
		}
	}
	@keyframes scroll2 {
		0% {
			transform: translateY(-100%) translateX(calc(100% + 1rem));
		}
		100% {
			transform: translateY(-100%) translateX(calc(-100% - 1rem));
		}
	}

	@media (max-width: 768px) {
		.scroller__inner img {
			width: 150px;
		}
	}
}

@media screen and (max-width: 1000px) {
	.section3 {
		.scroller__inner img {
			margin-block-end: 3vh;
		}
	}
	.section4 {
		margin-top: -15vh;
	}
}

.section4 {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 2rem;

	overflow: visible;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
		text-align: center;
	}

	.container {
		display: flex;
		justify-content: space-around;
		align-items: center;

		// width: min(90vw, 1200px);
		// width: min(90vw, 800px);
		width: fit-content;

		// Height of the boards
		height: clamp(500px, 72vh, 820px);

		position: relative;

		// The three images should visually touch
		gap: 0;
		overflow: visible;

		.left, .right, .mid {
			position: relative;
			height: 90%;
			
			flex-shrink: 0;
			display: block;
			
			overflow: visible;
		}
		
		// Widths proportional to the source images
		.left,
		.right {
			aspect-ratio: 426 / 1171;
		}
		
		.mid {
			aspect-ratio: 356 / 1171;;
			z-index: 5;
		}

		img {
			position: absolute;

			height: 100%;
			width: auto;

			max-width: none;

			opacity: 0;

			object-fit: contain;

			animation-duration: $total-animation-duration;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
		}

		/* LEFT ANIMATIONS */
		.left {
			@include keyframes(left-img-1) {
				0%, 16.66% { opacity: 1; }
				33.33%, 50% { opacity: 0; }
				66.66%, 100% { opacity: 1; }
			}
			
			@include keyframes(left-img-2) {
				0%, 16.66% { opacity: 0; }
				33.33%, 50% { opacity: 1; }
				66.66%, 100% { opacity: 0; }
			}

			.board1 {
				animation-name: left-img-1;
			}

			.board4 {
				animation-name: left-img-2;
			}
		}

		// Middle section animations
		.mid {
			@include keyframes(mid-img-1) {
				0% { opacity: 1; }
				16.66%, 66.66% { opacity: 0; }
				83.33%, 100% { opacity: 1; }
			}
			
			@include keyframes(mid-img-2) {
				0% { opacity: 0; }
				16.66%, 66.66% { opacity: 1; }
				83.33%, 100% { opacity: 0; }
			}

			.board2 {
				animation-name: mid-img-1;
			}

			.board5 {
				animation-name: mid-img-2;
			}
		}

		// Right section animations
		.right {
			@include keyframes(right-img-1) {
				0%, 33.33% { opacity: 0; }
				50%, 83.33% { opacity: 1; }
				100% { opacity: 0; }
			}
			
			@include keyframes(right-img-2) {
				0%, 33.33% { opacity: 1; }
				50%, 83.33% { opacity: 0; }
				100% { opacity: 1; }
			}

			.board3 {
				animation-name: right-img-1;
			}

			.board6 {
				animation-name: right-img-2;
			}
		}
	}
}

@media screen and (max-width: 700px) {
	.section4 {
		.container {
			height: clamp(280px, 50vh, 520px);
		}
	}
}

.section5 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2rem 2rem 2rem;
	
	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}
	
	img {
		max-width: 80%;
		height: auto;
	}
}
@media screen and (max-width: 1000px) {
	.section5 {
		img {
			max-width: 140%;
		}
	}
}

.section_video {
	display: flex;
	flex-direction: column;
	
	margin-block-end: 50px;
	
	padding-inline: 10px;
	margin-inline: 10px;
	//margin-block: 50px;
	
	display: flex;
	justify-content: space-around;
	align-items: center;
	// gap: 10px;
	width: calc(100vw - 20px);
	
	color: $plum;
	
	.text {
		max-width: 400px;
		.title {
			margin-bottom: 5px;
			font-weight: bold;
		}
	}
}

@media screen and (max-width: 800px) {
	.section_video {
		display: none;
	}
}

.section7 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
		color: $plum;
		text-align: center;
	}

	.subtitle {
		font-size: 1.1rem;
		margin-bottom: 2.5rem;
		text-align: center;
		max-width: 600px;
	}

	.buttonContainer {
		@include center;
		gap: 20px;
		
		.downloadLink, .purchaseLink {
			margin-top: 0rem;
			font-size: .8rem;
	
			a {
				display: flex;
				align-items: center;
				width: fit-content;
				padding-inline: 16px;
				padding-block: 10px;
				cursor: pointer;
				border-radius: 8px;
				background-color: $plum;
				font-size: larger;
				text-decoration: none;
				color: $white;
				transition: all 0.3s;
	
				&:hover {
					box-shadow: inset 0px 0px 0px 2px $plum;
					background-color: $white;
					color: $plum;
				}
			}
		}
	}

	.card-fan {
		position: relative;
		width: 300px;
		height: 200px;
		margin-bottom: 2rem;

		padding: 10rem 12rem;

		.card {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: rotate(var(--angle)) translate(-50%, -50%);
			transform-origin: bottom center;

			img {
				width: 120px;
				height: auto;
				border-radius: 8px;
				box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
			}
		}
	}

	@media (max-width: 600px) {
		.card-fan {
			width: 240px;
			height: 160px;

			.card img {
				width: 100px;
			}
		}
	}
}

.section_BGA_PARK {
	@include center;
	flex-direction: column;

	padding: 4rem 1rem;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
		color: $plum;
		text-align: center;
	}

	.image_container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
		width: 100%;
		
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 0 1 280px;
			overflow: hidden;
		}

		.image {
			width: 100%;
			max-width: 280px;
			height: auto;
			max-height: 120px;
			object-fit: contain;
			transition: transform 0.2s ease;

			&:hover {
				transform: scale(1.05);
			}
		}
	}

	@media (max-width: 768px) {
		.image_container {
			gap: 1.5rem;

			a {
				flex-basis: 220px;
			}

			.image {
				max-width: 220px;
				max-height: 90px;
			}
		}
	}

	@media (max-width: 480px) {
		.image_container {
			flex-direction: column;
		}
	}
}

.section9 {
	display: flex;
	justify-content: center;
	padding: 2rem;

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
		transition: all 0.3s;

		&:hover {
			-webkit-box-shadow: inset 0px 0px 0px 2px $plum;
			-moz-box-shadow: inset 0px 0px 0px 2px $plum;
			box-shadow: inset 0px 0px 0px 2px $plum;
			background-color: $white;
			color: $plum;
		}
	}
}

.section10 {
	width: 100vw;
	padding-inline-end: 10px;
	margin-inline-end: 10px;
	margin-block: 50px;
	
	@include center;
	flex-direction: column;
	gap: 20px;

	.nominations_container {
		@include center;
		.nomination {
			color: $plum;
			//text-decoration: none;
			margin-right: 30px;
			
			img {
				max-height: 300px;
			}
		}
	}
}

@media screen and (max-width: 800px) {
	.section10 {
		padding: 0;
		margin: 0;
		
		.nominations_container{
			flex-direction: column;
			padding-inline: 10px;
			gap: 10px;
			.nomination{
				margin: 0;
			}
		}
	}
}
</style>
