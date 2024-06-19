import Tr from "@/i18n/translation"
import {createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from "../views/HomeView.vue"
import Catalogue from "../views/CatalogueView.vue"
import About from "../views/AboutView.vue"
import Press from "../views/PressView.vue"
import CaptainFlip from "../views/CaptainFlipView.vue"
import CfDownloads from "../views/CfDownloadsView.vue"
import Cs from "../views/CsView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [{
            path: "/:locale",
            component: RouterView,
            beforeEnter: Tr.routeMiddleware,
            children: [
                {
                    path: "",
                    name: "home",
                    component: Home
                },
                {
                    path: "catalogue",
                    name: "catalogue",
                    component: Catalogue
                },
                {
                    path: "captainflip",
                    name: "captainflip",
                    component: CaptainFlip
                },
                {
                    path: "captainflip/downloads",
                    name: "cf-downloads",
                    component: CfDownloads,
                },
                {
                    path: "about",
                    name: "about",
                    component: About
                },
                {
                    path: "press",
                    name: "press",
                    component: Press
                },
                {
                    path: "cs",
                    name: "cs",
                    component: Cs
                },
                {
                    path: ":catchAll(.*)*",
                    name: "Not found",
                    component: NotFoundView
                }
            ],
        },
        {
            path: "/",
            component: RouterView,
            beforeEnter: Tr.routeMiddleware
        }
    ]

})

export default router