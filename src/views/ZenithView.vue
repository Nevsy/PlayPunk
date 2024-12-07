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
</script>

<template>
	<Nav v-on:sendToMain="reload()"/>

	<section class="section1 header">
		<img class="sun" src="../assets/images/Zenith/general/sun.png" alt="background image: stylized sun">
		<div class="container">
			<img class="logo" src="../assets/images/Zenith/logo_white.png" alt="Zenith logo">
			<h2>{{ $t('zenith.section1.header') }}</h2>
			<p>{{ $t('zenith.section1.explanation1') }}</p>
			<p>{{ $t('zenith.section1.explanation2') }}</p>
		</div>
	</section>

	<section class="section2 board">
		<span class="goalGame">{{ $t('zenith.section2.goalGame') }}</span>
		<img v-if="locale == 'fr'" src="../assets/images/Zenith/general/boxbottom_fr.png" alt="image of the board, set up">
		<img v-if="locale == 'en'" src="../assets/images/Zenith/general/boxbottom_en.png" alt="image of the board, set up">
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
			<div class="left">
				<img class="board1" src="../assets/images/Zenith/board/board_1.png" alt="2 completely different technology boards, showing versatility">
				<img class="board4" src="../assets/images/Zenith/board/board_4.png" alt="2 completely different technology boards, showing versatility">
			</div>
			<div class="mid">
				<img class="board2" src="../assets/images/Zenith/board/board_2.png" alt="2 completely different technology boards, showing versatility">
				<img class="board5" src="../assets/images/Zenith/board/board_5.png" alt="2 completely different technology boards, showing versatility">
			</div>
			<div class="right">
				<img class="board3" src="../assets/images/Zenith/board/board_3.png" alt="2 completely different technology boards, showing versatility">
				<img class="board6" src="../assets/images/Zenith/board/board_6.png" alt="2 completely different technology boards, showing versatility">
			</div>
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
		<img src="../assets/images/Zenith/general/eclate.png" alt="image showing the game setup and contents">
		<ul>
			
		</ul>
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
	height: 70vh;
	overflow: hidden;

	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: $plum;
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;

		.logo {
			margin-block: 50px;
			max-height: 90px;
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
		background-size: cover;
		background-position: center;

		img {
			width: 300px;
			max-width: 80%;
			height: auto;
		}
	}
}

@media screen and (max-width: 768px) {
	.section1 {
		.container {
			.logo {
				max-height: auto;
				max-width: 90vw;
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
	justify-content: center;
	padding: 2rem;
	height: 120vh;

	overflow: hidden;

	.title {
		font-size: 2rem;
		font-weight: bold;
		height: 7%;
	}
	
	.container {
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 5vh;
		width: 95vw;
		height: 100%;
		gap: 10px;
		position: relative;
		overflow: hidden;
		
		> div {
			height: 95%;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}
		
		.left, .right {
			width: 25%; // Slightly larger sections
		}
		
		.mid {
			z-index: 100;
			height: 120%;
			width: 23%; // Slightly smaller middle section
		}
		
		// Image base styles
		img {
			overflow: hidden;
			position: absolute;
			width: 90%;
			height: auto;
			opacity: 0;
			animation-duration: $total-animation-duration;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
		}

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

@media screen and (max-width: 1000px) {
	.section4 {
		height: 70vh;
	}
}

.section6 {
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
	.section6 {
		img {
			max-width: 140%;
		}
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
