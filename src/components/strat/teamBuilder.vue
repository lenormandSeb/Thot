<template>
    <div>
        <div class="row">
            <div class="col-md-2" v-for="i in 6" v-bind:key="i">
                <div class="card">
                    <div class="card-header">
                        numero - nom - type1 - type2
                    </div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="table table-responsive">
            <table class="table table-bordered">
                <thead>
                    <th v-for="type in types" :key="type.name"><b-img :src='getImage(type.name)' fluid></b-img></th>
                </thead>
                <tr v-for="n in 6" :key="n">
                    <td>{{ n }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'teamBuilder',
    data() {
        return {
            types: [
                {name : 'Acier'},
                {name : 'Combat'},
                {name : 'Dragon'},
                {name : 'Eau'},
                {name : 'Electrik'},
                {name : 'Fée'},
                {name : 'Feu'},
                {name : 'Glace'},
                {name : 'Insecte'},
                {name : 'Normal'},
                {name : 'Plante'},
                {name : 'Poison'},
                {name : 'Psy'},
                {name : 'Roche'},
                {name : 'Sol'},
                {name : 'Spectre'},
                {name : 'Ténèbres'},
                {name : 'Vol'},
            ]
        }
    },
    methods: {
        getImage(name) {
            return require('@/assets/type/Miniature_Type_' + name + '_EB.png')
        }
    }
}
</script>
