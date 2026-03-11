<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <Nav />
    <div class="container">
        <section class="section section1">
            <h1>{{ $t("flipper.title") }}</h1>
        </section>
		<section class="section section2">
			<img src="../assets/images/Flipper/CF_Rules_Dolphin.png" alt="the rules of the Dolphin extension">
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
		
		.section1 {
			width: 100%;
			max-width: 700px;
			height: 10rem;
			margin-block: .5rem 1rem;
			@include center;
			font-size: 1.5rem;
		}
	
		.section2 {
			width: 100vw;
			height: fit-content;
			max-width: 1400px;

			display: flex;
			justify-content: center;
			align-items: center;
	
			img {
				height: 90%;
				border-radius: 5px;
			}
		}
    }

	@media screen and (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 200px);

			.section2 {
				img {
					width: 100%;
					height: auto;
				}
			}
		}
	}

    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 77px;
    }
</style>