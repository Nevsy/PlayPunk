<script setup>
	import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
	import CardsScrollerInner from '../components/CardsScrollerInner.vue'
	
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

	// IMG EXPLICATIVES REGLES (BOXBOTTOM)
	// SOLEIL COUPÉ + LOGO ZENITH
	// PLATEAUX TECHNOS (idealement coupés en 3)
	// ÉCLATÉ (si tu as la liste des des nombres de chaque object ce serait cool, sinon je demande a Thomas)
</script>

<template>
	<Nav v-on:sendToMain="reload()"/>

	<section class="section1 header">
		<img class="sun" src="../assets/images/Zenith/sun.png" alt="background image: stylized sun">
		<div class="container">
			<img class="logo" src="../assets/images/Zenith/logo.png" alt="Zenith logo">
			<h2>{{ $t('zenith.section1.header') }}</h2>
			<p>{{ $t('zenith.section1.explanation1') }}</p>
			<p>{{ $t('zenith.section1.explanation2') }}</p>
		</div>
	</section>

	<section class="section2 board">
		<span class="goalGame">{{ $t('zenith.section2.goalGame') }}</span>
		<img src="../assets/images/Zenith/eclate.png" alt="image of the board, set up">
	</section>

	<section class="section3 scrollingcards">
		<span class="title">{{ $t('zenith.section3.scrollingCards') }}</span>
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
			<img src="../assets/images/Zenith/card1.png" alt="3 different technology boards, showing versatility">
			<img src="../assets/images/Zenith/card2.png" alt="3 different technology boards, showing versatility">
			<img src="../assets/images/Zenith/card3.png" alt="3 different technology boards, showing versatility">
		</div>
	</section>

	<!--<section class="section5 video">
		<div class="left">
			<span class="title">{{ $t('zenith.section5.videoTitle') }}</span>
			<p class="paragraph">{{ $t('zenith.section5.videoExpanation') }}</p>
		</div>
		<iframe v-if="locale == 'fr'" width="560" height="315" src="https://www.youtube.com/embed/T0pS0G1qFvE?si=Ujcxw6pcATC3sjPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	</section>-->

	<section class="section6 content">
		<span class="title">{{ $t('zenith.section6.content') }}</span>
		<img src="../assets/images/Zenith/content.png" alt="image showing the game setup and contents">
	</section>

	<section class="section7 rules">
		<span class="downloadLink">
			<RouterLink :to="Tr.i18nRoute({ name: 'press' })">{{ $t('captainFlip.downloadButton') }}</RouterLink>
		</span>
	</section>

	<Footer />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/scss/_variables.scss";
@import "@/assets/styles/scss/_mixins.scss";

.section1 {
	position: relative;
	height: 50vh;
	overflow: hidden;

	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: $plum;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;

		.logo {
			margin-bottom: 30px;
		}
		
		h2 {
			font-size: 1rem;
			font-weight: bold;
			margin-bottom: 20px;
		}
	}

	.sun {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150vw;
		transform: translate(-25vw, -75%);
		background-image: url("../assets/images/Zenith/sun.png");
		background-size: cover;
		background-position: center;

		img {
			width: 300px;
			max-width: 80%;
			height: auto;
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
		margin-bottom: 2rem;
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
				margin-block: 30px;
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

.section4 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	.container {
		display: flex;

		img {
			width: 300px;
			height: auto;
			margin: 0 1rem;
			border-radius: 10px;
		}
	}
}

.section6 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;

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

.section7 {
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
</style>
