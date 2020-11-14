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
    </div>
</template>

<script>
export default {
    name: 'teamBuilder'
}
</script>
