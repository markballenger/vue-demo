<template>
  <v-layout row>
    

    
    <v-snackbar v-model="snackbar" top 
              :timeout="0"
              :multi-line="true">
      <v-text-field
              name="input-1"
              label="Search by Name"
              id="testing"
              autofocus
              :value="searchText"
              @input="updateSearchText"
            ></v-text-field>
      <v-btn flat color="primary" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    


    <v-flex xs12 sm12>
      <v-card>

        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon @click.native="snackbar = true">
            <v-icon>mdi-magnify</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title>Search</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>


        
        <v-list three-line >

          <template v-for="item in searchResults" >
            <v-list-tile avatar v-bind:key="item.id"  >
              
              <v-list-tile-avatar v-if="item.images && item.images.length > 0" >
                <img v-bind:src="item.images[0].url"  />
                <v-badge overlap ><span v-if="item.popularity" slot="badge">{{item.popularity}}</span></v-badge>
              </v-list-tile-avatar>

              <!-- Artist -->
              <v-list-tile-content v-if="item.type === 'artist'">
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                <v-list-tile-sub-title>genres: {{item.genres[0]}}</v-list-tile-sub-title>
                <v-list-tile-sub-title><small><i>{{item.followers.total}} followers </i></small></v-list-tile-sub-title>
              </v-list-tile-content>

              <!-- Album -->
              <v-list-tile-content  v-if="item.type === 'album'">
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                <v-list-tile-sub-title>by {{item.artists[0].name}}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon v-bind:color="item.active ? 'white' : 'grey'">star</v-icon>
              </v-list-tile-action>

            </v-list-tile>

            <v-divider :key="item.id"></v-divider>

          </template>

        </v-list>
      </v-card>


      
    </v-flex>


  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            snackbar: false
        }
    },
    mounted () {
        this.getSearchResults()
    },
    computed: {
        ...mapGetters([
            'searchResults',
            'searchText'
        ])
    },
    methods: {
        ...mapActions([
            'getSearchResults',
            'updateSearchText'
        ])
    }
}
</script>