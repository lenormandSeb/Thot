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
                    <tr v-for="pokemon in listPokemon" v-bind:key="pokemon.id">
                        <td>image here</td>
                        <td>{{ pokemon.numero }}</td>
                        <td>{{ pokemon.nom }}</td>
                        <td><span><img :src="getImageType( pokemon.type.type1 )" alt=""/></span> <span v-if="pokemon.type.type2 != null"> - <img :src="getImageType( pokemon.type.type2 )" alt=""/></span> </td>
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
export default {
  name: 'Pokedex',
  methods: {
      getImageType(type) {
          return require('../assets/type/Miniature_Type_'+type+'_EB.png');
      },
    //   getImagePokemon(pokemon, chromatique) {
    //       //get Pokemon Sprite
    //   }
  },
  data () {
    return {
        search: "",
        pokemons: [
            {
                id: 1,
                numero: '001',
                nom: 'Bulbizarre',
                type: {
                    type1 : 'Plante',
                    type2 : 'Poison'
                }
            },
            {
                id: 2,
                numero: '002',
                nom: 'Herbizarre',
                type: {
                    type1 : 'Plante',
                    type2 : 'Poison'
                }
            },
            {
                id: 3,
                numero: '003',
                nom: 'Florizarre',
                type: {
                    type1 : 'Plante',
                    type2 : 'Poison'
                }
            },
            {
                id: 4,
                numero: '004',
                nom: 'Salameche',
                type: {
                    type1 : 'Feu'
                }
            }
        ]
    }
  },
  computed: {
      listPokemon: function(){
          return this.pokemons.filter(pokemon => {
              return pokemon.nom.toLowerCase().includes(this.search.toLowerCase())
          })
      }
  }
    
}
</script>