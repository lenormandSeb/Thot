export default {
    data () {
        return {
            id: {
                0: "Normal",
                1:"Plante",
                2:"Feu",
                3:"Eau",
                4:"Electrik",
                5:"Glace",
                6:"Combat",
                7:"Poison",
                8:"Sol",
                9:"Vol",
                10:"Psy",
                11:"Insecte",
                12:"Roche",
                13:"Spectre",
                14:"Dragon",
                15:"Tenebres",
                16:"Acier",
                17:"Fée",
            },
            type : {
            "Normal" : '1;1;1;1;1;1;2;1;1;1;1;1;1;0;1;1;1;1',
            "Plante": '1;0.5;2;0.5;0.5;2;1;2;0.5;2;1;2;1;1;1;1;1;1',
            "Feu" : '1;0.5;0.5;2;1;0.5;1;1;2;1;1;0.5;2;1;1;1;0.5;0.5',
            "Eau" : '1;2;0.5;0.5;2;0.5;1;1;1;1;1;1;1;1;1;1;0.5;1',
            "Electrik" : '1;1;1;1;0.5;1;1;1;2;0.5;1;1;1;1;1;1;0.5;1',
            "Glace" : '1;1;2;1;1;0.5;2;1;1;1;1;1;2;1;1;1;2;1',
            "Combat" : '1;1;1;1;1;1;1;1;1;2;2;0.5;0.5;1;1;0.5;1;2',
            "Poison" : '1;0.5;1;1;1;1;0.5;0.5;2;1;2;0.5;1;1;1;1;1;0.5',
            "Sol" : '1;2;1;2;0;2;1;0.5;1;1;1;1;0.5;1;1;1;1;1',
            "Vol" : '1;0.5;1;1;2;2;0.5;1;0;1;1;0.5;2;1;1;1;1;1',
            "Psy" : '1;1;1;1;1;1;0.5;1;1;1;0.5;2;1;2;1;2;1;1',
            "Insecte" : '1;0.5;2;1;1;1;0.5;1;0.5;2;1;1;2;1;1;1;1;1',
            "Roche" : '0.5;2;0.5;2;1;1;2;0.5;2;0.5;1;1;1;1;1;1;2;1',
            "Spectre" : '0;1;1;1;1;1;0;0.5;1;1;1;0.5;1;2;1;2;1;1',
            "Dragon" : '1;0.5;0.5;0.5;0.5;2;1;1;1;1;1;1;1;1;2;1;1;2',
            "Tenebres" : '1;1;1;1;1;1;2;1;1;1;0;2;1;0.5;1;0.5;1;2',
            "Acier" : '0.5;0.5;2;1;1;0.5;2;0;2;0.5;0.5;0.5;0.5;1;0.5;1;0.5;0.5',
            "Fée" : '1;1;1;1;1;1;0.5;2;1;1;1;0.5;1;1;0;0.5;2;1',
            }
        }
    },
    methods : {
        getTypePokemon: function (n) {
            return this.$data.id[n - 1]
        },
        getVariant(number) {
            if(number < 85) {
                return 'danger'
            } else if(number >= 85 && number <= 170) {
                return 'warning'
            } else {
                return 'info'
            }
        },
        getColor(number) {
            let a = '';
            switch(parseFloat(number)) {
                case 2:
                    a = "#FFAAAA"
                    break;
                case 1:
                    a = '#ffffaa'
                    break;
                case 0.5:
                    a = '#3AF24B'
                    break;
                case 0.25:
                    a = '#AAFFAA'
                    break;
                case 0 :
                    a = "#AAAAAA"
                    break
                default:
                    a = "#FF5E4D"
                    break;
            }
            return a
        },
        getWeaknessByPokemon: function(weakness) {
            const v = [];
            if(weakness.length == 2) {
                const a = this.type[weakness[0]].split(';')
                const b = this.type[weakness[1]].split(';')
                for(var i = 0; i < 18; i++) {
                    let calc = parseFloat(a[i]) * parseFloat(b[i])
                    v.push(calc)
                }
                return v
            } else {
                return this.type[weakness[0]].split(';')
            }
            
        },
        getWeaknessByType : function (typeofweakness, value) {
            let weak = []
            let t
            switch(typeofweakness) {
                case 'immune':
                    t = 0;
                    break;
                case 'resist':
                    t = 0.5
                    break;
                case 'neutral':
                    t = 1;
                    break;
                case 'weak':
                    t = 2
                    break;
            }
            if(typeof value.type1 === 'string') {
                this.$data.type[value.type1].split(';').forEach((index, element) => {
                    if (index == t) {
                        weak.push(this.$data.id[element])
                    }
                })

                if(typeof value.type2 === 'string') {
                    this.$data.type[value.type2].split(';').forEach((index, element) => {
                        if (index == t) {
                            weak.push(this.$data.id[element])
                        }
                    })
                }
            }

            if(weak.length === 0) {
                return `No ${typeofweakness}`
            }
            return weak.join(', ')
        }
    }
}