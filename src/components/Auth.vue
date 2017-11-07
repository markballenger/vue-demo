<template>

    <div>
        
        <v-layout row >
            <v-flex xs12 >
                <!-- <v-progress-circular center indeterminate v-bind:size="70" v-bind:width="7" color="primary"></v-progress-circular> -->
            </v-flex>
            </v-layout>
        <v-layout>
            
        <v-flex xs12 >
                <h1>Auth.vue</h1>
                <h2>accessToken</h2> 
                {{accessToken}}
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
                <h2>refreshToken:</h2> 
                {{refreshToken}}
            </v-flex>
        </v-layout>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    mounted () {
        if (this.$route.params.accessToken && this.$route.params.refreshToken) {
            this.setTokens(this.$route.params)
            this.$router.push('/search')
        }
    },
    computed: {
        ...mapGetters([
            'accessToken',
            'refreshToken'
        ])
    },
    methods: {
        ...mapActions([
            'setTokens'
        ])
    }
}
</script>

<style>

</style>