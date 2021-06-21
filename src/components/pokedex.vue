<template>
    <div>
        <div class="input-group mb-2">
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search a pokemon" v-model="search">
            <div class="input-group-append">
                <div class="input-group-text">@</div>
            </div>
        </div>
        <div>
            <b-table 
                :fields="fields" 
                :items="listPokemon"
                :select-mode="selectMode"
                selectable
                @row-selected="showModal"
                >
            </b-table>
        </div>
        <b-modal id="modal-center" size="xl" centered :title="this.dex.name">
            <div class="row">
                <div class="col-md-6">
                    <p>HP : {{ this.dex.pv }} <b-progress :value="this.dex.pv" :max="255" class="mb-3" :variant="getVariant(this.dex.pv)"></b-progress></p>
                    <p>ATK : {{ this.dex.atk }} <b-progress :value="this.dex.atk" :max="255" class="mb-3" :variant="getVariant(this.dex.atk)"></b-progress></p>
                    <p>DEF : {{ this.dex.def }} <b-progress :value="this.dex.def" :max="255" class="mb-3" :variant="getVariant(this.dex.def)"></b-progress></p>
                    <p>SPE ATK : {{ this.dex.speatk }} <b-progress :value="this.dex.speatk" :max="255" class="mb-3" :variant="getVariant(this.dex.speatk)"></b-progress></p>
                    <p>SPE DEF : {{ this.dex.spedef }} <b-progress :value="this.dex.spedef" :max="255" class="mb-3" :variant="getVariant(this.dex.spedef)"></b-progress></p>
                    <p>SPEED : {{ this.dex.speed }} <b-progress :value="this.dex.speed" :max="255" class="mb-3" :variant="getVariant(this.dex.speed)"></b-progress></p>
                </div>
            </div>
            <hr>
            <div class="table">
                <table class="table table-responsive">
                    <thead>
                        <th v-for="n in 18" :key="n">{{ getTypePokemon(n) }}</th>
                    </thead>
                    <tr>
                        <td v-for="(value, j) in this.dex.weakness" :key="j" :style="{ backgroundColor : getColor(value) }">
                            {{ value }}
                        </td>
                    </tr>
                </table>
            </div>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import statistique from '../mixins/statistique'
export default {
    name: 'Pokedex',
    mixins: [statistique],
    data () {
        return {
            search: "",
            pokemons: [],
            selectMode: "single",
            dex: {
                name: "",
                type: "",
                type2: "",
                pv: "",
                atk: "",
                def: "",
                speatk: "",
                spedef: "",
                speed: "",
                weakness: "",
            },
            fields: ['image', {
                key: 'num_dex',
                label: 'Numero',
                sortable: true
            }, 'name', 'type']
        }
    },
    methods: {
        getImageType(type) {
            return require('../assets/type/Miniature_Type_'+type+'_EB.png');
        },
        showModal(number) {
            axios
            .get('http://192.168.1.33:8000/pokedex/num_dex/' + number[0]['num_dex'])
            .then((response) => {
                if(response.data) {
                    if(response.data.result) {
                        this.dex.name = response.data.pokemon.name
                        this.dex.type1 = response.data.pokemon.type[0]
                        if(response.data.pokemon.type[1]) {
                            this.dex.type2 = response.data.pokemon.type[1]
                        } else {
                            this.dex.type2 = null
                        }

                        this.dex.pv = parseInt(response.data.pokemon.hp)
                        this.dex.atk = parseInt(response.data.pokemon.atk)
                        this.dex.def = parseInt(response.data.pokemon.def)
                        this.dex.speatk = parseInt(response.data.pokemon.speAtk)
                        this.dex.spedef = parseInt(response.data.pokemon.speDef)
                        this.dex.speed = parseInt(response.data.pokemon.speed)

                        this.dex.weakness = this.getWeaknessByPokemon(response.data.pokemon.type)
                    }
                }
            })
            this.$root.$emit('bv::show::modal', 'modal-center', '#btnShow')
        },
    },
    mounted() {
        axios
            .get('http://192.168.1.33:8000/pokedex')
            .then((response) => {
                if(response.data.pokemons) {
                    this.pokemons = response.data.pokemons
                }
            })
    },
    computed: {
        listPokemon: function(){
            let pokemon =  this.pokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
            })

            return pokemon
        }
    }
    
}
</script>