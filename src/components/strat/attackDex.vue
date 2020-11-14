<template>
    <div>
        <div class="input-group mb-2">
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search an attack" v-model="search">
            <div class="input-group-append">
                <div class="input-group-text">@</div>
            </div>
        </div>
        <div class="table table-responsive">
            <table class="table">
                <thead>
                    <th>Fr</th>
                    <th>En</th>
                    <th>Type</th>
                    <th>effet terrain</th>
                    <th>effet combat</th>
                    <th>type</th>
                    <th>Puissance</th>
                    <th>Precision</th>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        search: ''
    }
  },
  name: 'attackDex',
    
}
</script>