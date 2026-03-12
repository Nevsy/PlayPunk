<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import Tr from "@/i18n/translation"
</script>

<template>
    <Nav />
    <div class="container">
        <section class="section section1">
            <h1 class="title">{{ $t("bottle.title") }}</h1>
			<span class="dl_button">
				<RouterLink :to="Tr.i18nRoute({ name: 'press' })">{{ $t('bottle.downloadButton') }}</RouterLink>
			</span>
        </section>
	</div>
    <div class="footer">
        <Footer/>
    </div>

</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    @import "@/assets/styles/scss/_mixins.scss";

	* {
		overflow: hidden;
	}

    .container {
        width: 100vw;
        height: calc(100vh - 52.5px - 77px);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .section1 {
		height: 100%;
        width: 100vw;
        padding-block: 3vh;
        display: flex;
		@include center;
        flex-direction: column;
		gap: 15px;
        font-size: 22px;

        max-width: 700px;

		// would be more ideomatic with some 'button' component or at least mixin, ik ik
		.dl_button {
			padding-inline: 5px;
		}
		.dl_button > a {
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

	// .section2 {
	// 	width: 100vw;
	// 	max-width: 1400px;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;

	// 	img {
	// 		width: 90%;
	// 		height: auto;
	// 		border-radius: 5px;
	// 	}
	// }

	@media screen and (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 200px);

			// .section2 {
			// 	img {
			// 		width: 100%;
			// 		height: auto;
			// 	}
			// }
		}
	}

    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 77px;
    }
</style>