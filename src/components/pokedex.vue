<template>
    <div>
        <div class="input-group mb-2">
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search a pokemon" v-model="search">
            <div class="input-group-append">
                <div class="input-group-text">@</div>
            </div>
        </div>
        <div class="table table-responsive">
            <table class="table">
                <thead>
                    <th>image</th>
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="pokemon in listPokemon" v-bind:key="pokemon.num_dex">
                        <td>image here</td>
                        <td>{{ pokemon.num_dex }}</td>
                        <td>{{ pokemon.name }}</td>
                        <td><span><img :src="getImageType( pokemon.type.type1.name )" alt=""/></span> <span v-if="pokemon.type.type2.name != null"> - <img :src="getImageType( pokemon.type.type2 )" alt=""/></span> </td>
                        <td>
                            <div class="btn-group btn-group-sm" role="group">
                                <button class="btn btn-primary">Ajouter à l'équipe</button>
                                <button class="btn btn-primary">Ajouter à la Shasse</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pokedex',
  methods: {
      getImageType(type) {
          return require('../assets/type/Miniature_Type_'+type+'_EB.png');
      },
  },
  data () {
    return {
        search: "",
        pokemons: []
    }
  },
  mounted() {
      axios
        .get('http://192.168.1.33:8000/pokedex')
        .then((response) => {
            if(response.data.pokemons) {
                console.log(response.data.pokemons.type)
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