import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Pokedex from '../components/pokedex'
import Teambuilder from '../components/strat/teamBuilder'
import AttackDex from '../components/strat/attackDex'

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: Pokedex
        },
        {
            path: '/teambuilder',
            name: 'teambuilder',
            component: Teambuilder
        },
        {
            path: '/attackDex',
            name: 'attackDex',
            component: AttackDex
        }
    ],
})
