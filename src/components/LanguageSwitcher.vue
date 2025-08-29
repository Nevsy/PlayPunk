<script setup>
    import { useI18n } from 'vue-i18n'
    import Tr from "@/i18n/translation"
    import { useRouter } from "vue-router"

    const { t, locale } = useI18n()

    const supportedLocales = Tr.supportedLocales

    const router = useRouter()

    const emit = defineEmits(['languageChanged'])

    const switchLanguage = async (event) => {
        const newLocale = event.target.value
        
        await Tr.switchLanguage(newLocale)
        
        try {
            await router.replace({ params: { locale: newLocale } })
        } catch(e) {
            console.log(e)
            router.push("/")
        }
        
        emit('languageChanged')
    }
</script>

<template>
    <div>
        <div class="custom-select">
            <!-- <select @change="switchLanguage"> -->
            <select name="languageSwitcher" @change="switchLanguage">
                <option
                    v-for="sLocale in supportedLocales"
                    :key="`locale-${sLocale}`"
                    :value="sLocale"
                    :selected="locale === sLocale"
                >
                {{ t("locale." + sLocale) }}
                    <!-- <img class="image" :src="`../assets/images/Flags/${sLocale}.png`" :alt="`${sLocale} flag`">
                    <img class="image" src="../assets/images/Flags/en.png"> -->
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
	@import "@/assets/styles/scss/_variables.scss";
	@import "@/assets/styles/scss/_mixins.scss";

    select {
        padding-left: 3px;
        font-size: 1.3rem;
		background-color: $white;

        option {
            padding-left: 3px;

            .image {
                height: 30px;
                width: 30px;
            }
        }
    }
</style>
