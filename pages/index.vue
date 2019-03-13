<template>
  <section class="container">
    <div class="row">
      <div class="counter col-sm-12">
        <h1>Current Counter Value : {{theCounter}}</h1>
      </div>
      
      <div class="user-inputs col-sm-6">
        
        <form @submit.prevent="">
          <div class="form-group">
            <label for="exampleInputEmail1">Enter a value</label>
            <input type="number" v-model.number="userIncrementValue" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Dont worry, we will keep a track of your values on your right. <br> <br> Adding via sync has a delay of 1 second to mimic functionality.<br> Adding via sync will add it instantly.</small>
          </div>
        </form>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button class="btn btn-secondary" @click="addViaAction(userIncrementValue)">Add asynchronously</button><br>
          <button class="btn btn-secondary" @click="addViaMutation(userIncrementValue)">Add synchronously</button>
        </div>  
        
      </div>
      
      <div class="last-added col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="(value, index) in theLastAddedValues" :key="index">
            {{value}}
          </li>
        </ul>
      </div> 
    </div>
  
  </section>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      userIncrementValue: 1
    }
  },
  computed: {
    ...mapGetters({
      theCounter: 'counter/getCounterValue',
      theLastAddedValues: 'counter/getLastAdded'
    })
  },
  methods: {
    // Should be used for Async operations
    ...mapActions({
      addViaAction: 'counter/incrementByAction' // map `this.addToCounter()` to `this.$store.dispatch('counter/incrementByAction')`
    }),

    // can use directly for non async but its good practice to use actions
    ...mapMutations({
      addViaMutation: 'counter/incrementByMutation'
    })
  }
}
</script>
