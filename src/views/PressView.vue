<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { ref } from 'vue'

	// CAPTAIN FLIP
    const boardImages = ["Boards_A", "Boards_AFirst", "Boards_B", "Boards_BFirst", "Boards_C", "Boards_CFirst", "Boards_D", "Boards_DFirst"]
    const generalImages = [{name: "3D_contents", infoFileSize: "11,4MB", infoSize: "4463 x 2743 px"}, {name: "Boxtop_Cover", infoFileSize: "10MB", infoSize: "3072 x 3072 px"}, {name: "Packaging_Box_Left", infoFileSize: "11,6MB", infoSize: "3043 x 3306px"}, {name: "Packaging_Box_Right", infoFileSize: "11,6MB", infoSize: "3043 x 3306 px"}, {name: "Logo", infoFileSize: "7,11MB", infoSize: "3894 x 2716 px"}]
    const gameElements = ["Parrot", "Cannoner", "Capitain", "Cartograph", "Charpenter", "Cook", "Monkey", "Mousse", "Watch", "Coins_1", "Coins_3", "Coins_5", "Coins_10", "Map"]
    const dlLanguages = ["EN", "FR", "NL", "DE", "ES", "IT", "PL", "CZ", "SK"]
	const islaLangs = ["EN", "FR", "DE", "NL", "SP", "IT"]
	
	// ZENITH
	let boardImages_extra_ZE = [{name: "Diplo_Front", size: "2413 x 1443 px", fileSize: "3,4MB"}, {name: "MainBoard", size: "4367 x 2413 px", fileSize: "5.9MB"}]
	let techBoards_ZE = ["D", "N", "O", "P", "S", "U"]
	let boardImages_ZE = [...boardImages_extra_ZE, ...techBoards_ZE]
	const gameElements_ZE = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8"]
    const generalImages_ZE = [{name: "Packaging_box_Bottom", fileSize: "6MB", size: "1600 x 1200 px"}, {name: "Packaging_box_Left", fileSize: "6MB", size: "1600 x 1200 px"}, {name: "Packaging_box_Right", size: "6MB", fileSize: "1600 x 1200 px"}, {name: "Packaging_Setup", size: "7MB", fileSize: "1823 x 1079 px"}, {name: "Packaging_InGame", size: "6MB", fileSize: "2000 x 1124 px"}, {name: "Boxbottom_Explanation_FR", size: "4MB", fileSize: "2547 x 1792 px"}, {name: "Boxbottom_Explanation_EN", size: "4MB", fileSize: "2547 x 1792 px"}, {name: "Logo_Orange", size: "273KB", fileSize: "2133 x 412 px"}, {name: "Logo_White", size: "148KB", fileSize: "2133 x 390 px"}]
	const dlLanguages_ZE = ["EN", "FR", "DE"]
	const HelpsheetLanguage_ZE = ["EN", "FR", "DE"]
	
	const contentActive_CF = ref([false, false, false, false, false, false, false]); // careful, isla uses last one
	const contentActive_ZE = ref([false, false, false, false, false]);
</script>

<template>
    <div class="container">
        <Nav />


        <section class="section section1">
            <h2>{{  $t("press.header") }}</h2>
        </section>

        <section class="section section2">
			<!-- MARK: CF -->
            <div class="accordion">
				<div class="accordion_container">
					<h1>Captain Flip</h1>
					<br>
					<!-- MARK: NOT DONE -->
					<!-- TODO: NOT DONE -->
					<div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[6] = !contentActive_CF[6]">
								{{ $t("press.rulesIsla") }}
                            </button>
                        </h2>
                        <div v-for="lang in islaLangs" class="accordion_content" :class="{active: contentActive_CF[6]}">
							<div class="download">
								<div class="text">
									<span class="docTitle">
										CF_Isla_Bomba_Rules.pdf
                                    </span>
									<span class="docTitle">
										{{ lang }}
                                    </span>
                                    <span class="info">7KB ● {{ $t("press.CF_isla_info2") }}</span>
                                </div>
								
                                <a class="dlLogo" :href="`/src/downloads/RGB/CF_isla/CFIB_Rules_${lang}.pdf`" download="CF_Isla_Bomba_Rules.pdf">⬇️</a>
                            </div>
                        </div>
					</div>
					<!-- until here -->
					<div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[0] = !contentActive_CF[0]">
								{{ $t("press.rulesKraken") }}
                            </button>
                        </h2>
						<div class="accordion_content" :class="{active: contentActive_CF[0]}">
							<div class="download">
								<div class="text">
									<span class="docTitle">
										CF_kraken_Rules.pdf
									</span>
									<span class="docTitle">
										{{ $t("press.CF_kraken_info") }}
									</span>
									<span class="info">5.1MB ● {{ $t("press.CF_kraken_info2") }}</span>
								</div>
								
								<a class="dlLogo" href="/src/downloads/RGB/CF_kraken_Rules.pdf" download="CF_kraken_Rules.pdf">⬇️</a>
							</div>
						</div>
					</div>
					<div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[5] = !contentActive_CF[5]">
								{{ $t("press.rulesFlipper") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_CF[5]}">
							<div class="download">
								<div class="text">
									<span class="docTitle">
										CF_dolphin_Rules.pdf
                                    </span>
									<span class="docTitle">
										{{ $t("press.CF_flipper_info") }}
                                    </span>
                                    <span class="info">0.4MB ● {{ $t("press.CF_flipper_info2") }}</span>
                                </div>
								
                                <a class="dlLogo" href="/src/downloads/RGB/CF_dolphin_Rules.pdf" download="CF_dolphin_Rules.pdf">⬇️</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[1] = !contentActive_CF[1]">
								{{ $t("press.rules") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_CF[1]}">
							<div class="download" v-for="language in dlLanguages">
								<div class="text">
									<span class="docTitle">
										CF-Rules_{{ language }}_RGB.pdf
                                    </span>
                                    <span class="info">17KB ● {{ $t("cfDownloads.dlInfo") }}</span>
                                </div>
								
                                <a class="dlLogo" :href="`/src/downloads/RGB/CF_Rules_${language}.pdf`" :download="`CD_Rules_${language}_RGB.pdf`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[2] = !contentActive_CF[2]">
								{{ $t("press.images") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_CF[2]}">
							<div class="download" v-for="image in generalImages">
								<img class="image" :src="`/src/assets/images/Press/General/CF_${image.name}.png`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle">
										{{ image.name }}_RGB.png
                                    </span>
                                    <span class="info">{{ image.infoFileSize }} ● {{ image.infoSize }}</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/GeneralImages/CF_${image.name}.png`" :download="`CF_${image.name}_RGB.png`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[3] = !contentActive_CF[3]">
								{{ $t("press.boards") }}
                            </button>
                        </h2>
						
                        <div class="accordion_content" :class="{active: contentActive_CF[3]}">
							<div class="download" v-for="image in boardImages">
								<img class="image" :src="`/src/assets/images/Press/Boards/${image}_resized_resized.png`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle">
										CF_{{ image }}_RGB.png
                                    </span>
                                    <span class="info">8MB ● 2835 x 2835 px</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/Boards/${image}.png`" :download="`CF_${image}_RGB.png`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_CF[4] = !contentActive_CF[4]">
								{{ $t("press.elements") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_CF[4]}">
							<div class="download" style="width: 350px;" v-for="(image, index) in gameElements">
								<img class="image" :src="`/src/downloads/Press/RGB/GameElements/${image}.png`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle">
										{{ image }}_RGB.png
                                    </span>
                                    <span class="info" v-if="index < 9">300kB ● 448 x 448 px</span>
                                    <span class="info" v-if="index == 13">1,1MB ● 799 x 978 px</span>
                                    <span class="info" v-if="index > 8 && index != 13">150kB ● 330 x 330 px</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/GameElements/${image}.png`" :download="`${image}_RGB.png`">⬇️</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
			<!-- MARK: Zenith -->
            <div class="accordion" id="Zenith">
				<div class="accordion_container">
					<h1>Zenith</h1>
					<br>
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_ZE[0] = !contentActive_ZE[0]">
								{{ $t("press.rules") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_ZE[0]}">
							<div class="download" v-for="language in dlLanguages_ZE">
								<div class="text">
									<span class="docTitle">
										Zenith_Rules_{{ language }}.pdf
                                    </span>
                                    <span class="info">19MB ● {{ $t("press.ZE_info") }}</span>
                                </div>
								
                                <a class="dlLogo" :href="`/src/downloads/RGB/ZE_Rules_${language}.pdf`" :download="`Zenith_Rules_${language}.pdf`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
					<div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_ZE[4] = !contentActive_ZE[4]">
								{{ $t("press.ZE_helpsheet") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_ZE[4]}">
							<div class="download" style="width: 350px;" v-for="(lang, index) in HelpsheetLanguage_ZE">
								<div class="text">
									<span class="docTitle">
										ZE_Helpsheet_{{ lang }}.pdf
									</span>
                                    <span class="info">4MB ● {{ $t("press.ZE_helpsheet_info") }}</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/Zenith/Helpsheets/ZE_Helpsheet_${lang}.pdf`" :download="`ZE_Helpsheet_${lang}.pdf`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_ZE[1] = !contentActive_ZE[1]">
								{{ $t("press.images") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_ZE[1]}">
							<div class="download" v-for="(image, index) in generalImages_ZE">
								<img class="image" :src="`/src/downloads/Press/RGB/Zenith/GeneralImages/ZE_${image.name}.png`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle">
										ZE_{{ image.name }}.png
                                    </span>
                                    <span class="info">{{ image.fileSize }} ● {{ image.size }}</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/Zenith/GeneralImages/ZE_${image.name}.png`" :download="`ZE_${image.name}_RGB.png`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_ZE[2] = !contentActive_ZE[2]">
								{{ $t("press.boards") }}
                            </button>
                        </h2>
						
                        <div class="accordion_content" :class="{active: contentActive_ZE[2]}">
							<div class="download" v-for="(image, index) in boardImages_ZE">
								<img class="image" v-if="index < 2" :src="`/src/downloads/Press/RGB/Zenith/Boards/ZE_${image.name}.png`"> <!-- alt="Image download preview" -->
								<img class="image" v-else :src="`/src/downloads/Press/RGB/Zenith/Boards/ZE_Tech_Board_${ image }.png`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle" v-if="index < 2">
										ZE_{{ image.name }}.png
                                    </span>
									<span class="docTitle" v-else>
										ZE_Tech_Board_{{ image }}.png
									</span>
									
									<span class="info" v-if="index < 2">{{ image.fileSize }} ● {{ image.size }}</span>
									<span class="info" v-else>2MB ● 853 x 2342 px</span>
                                </div>
                                
                                <a class="dlLogo" v-if="index < 2" :href="`/src/downloads/Press/RGB/Zenith/Boards/ZE_${image.name}.png`" :download="`ZE_${image.name}.png`">⬇️</a>
                                <a class="dlLogo" v-else :href="`/src/downloads/Press/RGB/Zenith/Boards/ZE_Tech_Board_${ image }.png`" :download="`ZE_Tech_board_${image}.png`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                    <div class="accordion_panel">
						<h2>
							<button class="accordion_trigger" @click="contentActive_ZE[3] = !contentActive_ZE[3]">
								{{ $t("press.elements") }}
                            </button>
                        </h2>
                        <div class="accordion_content" :class="{active: contentActive_ZE[3]}">
							<div class="download" style="width: 350px;" v-for="(image, index) in gameElements_ZE">
								<img class="image" :src="`/src/downloads/Press/RGB/Zenith/GameElements/${image}.jpg`"> <!-- alt="Image download preview" -->
                                <div class="text">
									<span class="docTitle">
										{{ image }}.jpg
                                    </span>
                                    <span class="info" v-if="index < 8">300kB ● 673 x 1051 px</span>
                                    <span class="info" v-if="index == 8">1,1MB ● 799 x 978 px</span>
                                    <span class="info" v-if="index > 9 && index != 13">150kB ● 330 x 330 px</span>
                                </div>
                                
                                <a class="dlLogo" :href="`/src/downloads/Press/RGB/Zenith/GameElements/${image}.jpg`" :download="`${image}.jpg`">⬇️</a>
                            </div>
                        </div>
                    </div>
					
                </div>
            </div>
        </section>
		
        <!-- <div class="dlAllContainer">
			<a class="dlAll" :href="`/src/downloads/Press/all.zip`" download="all.zip">Download all images here.</a>
        </div> -->
    </div>
	
    <div class="filler" style="margin-bottom: 50px"></div>
	
	<Footer/>
</template>

<!-- MARK: SCSS -->
<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";

    .section1 {
        padding-block-start: 50px;
        width: 100vw;

        display: flex;
        flex-direction: column;
        gap: 20px;

        @include center;

        h2 {
            color: $plum;
        }
    }

	.section2 {
		width: 100vw;
		margin-block: 50px;
		@include center;
		flex-direction: column;
		gap: 30px;

		.accordion {
			width: min(800px, 100% - 20px);
			margin-inline: auto;

			background-color: $plum;
			color: $white;
			border-radius: 15px;

			&_container {
				margin: 40px;
				padding: .3rem;

				h2 {
					position: relative;
				}
			}

			&_panel {
				padding: 1rem;
				border: 1px solid;
				
				&:nth-child(3) {
					border-radius: 15px 15px 0 0;
				}
				&:last-child {
					border-radius: 0 0 15px 15px ;
				}
			}

			&_content {
				display: grid;
				//grid-template-rows: 0fr;
				//opacity: 0;
				max-height: 0;


				//transition: max-height 500ms;

				&.active {
					//grid-template-rows: 1fr;
					//opacity: 1;
					max-height: 100%;
				}

				&.active + h2 > &_trigger::before,  h2 > &_trigger::after {
					transform: rotate(45deg);
				}

				.download {
					overflow: hidden;
					text-align: left;
				}
			}

			&_trigger {
				background: transparent;
				border: 0;
				font: inherit;
				color: inherit;

				width: 100%;
				height: 100%;


				&::before, &::after {
					position: absolute;
					right: 1em;
					top: .5em;
					content: "";
					display: block;
					width: 1em;
					height: 5px;
					background: currentcolor;
					transition: transform 500ms;
				}

				&::after {
					rotate: 90deg;
					//translate: 0 -1.5em;
				}
			}
		}

		.download {
			//border: solid 1px $lightPlum;
			border-radius: 10px;
			//width: minmax(fit-content, 400px); Doesn't work, nescessary?
			//color: $white;
			padding: 10px;

			width: 400px;
			margin-left: 20px;
			margin-top: 10px;

			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 20px;

			.image {
				height: 50px;
				max-width: 100px;
				//border-radius: 12px;
			}

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

				margin-left: auto;
			}
		}
	}

	.dlAllContainer {
		width: 100vw;
		@include center;
		height: 100px;
	}

	.dlAll {
		display: flex;
		align-items: center;
		width: fit-content;

		padding-inline: 16px;
		padding-block: 10px;
		cursor: pointer;

		border-radius: 10px;
		background-color: $plum;

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

		margin-bottom: -50px;
	}
</style>