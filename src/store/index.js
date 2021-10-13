import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import * as fb from '../firebase'

Vue.use(Vuex)

// access realtime firebase
fb.exercisesCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let exercisesArray = []

  snapshot.forEach(doc => {
    let exercise = doc.data()
    exercise.id = doc.id

    exercisesArray.push(exercise)
  })

  store.commit('setExercises', exercisesArray)
})

const store = new Vuex.Store({
  state: {
    users: {},
    exercises: [],
    
  },
  getters: {},
  mutations: {

    setUsers(state, val) {
      state.users = val
    },
    setExercises(state, val) {
      state.exercises = val
    }

  },
  actions: {

    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
  
      // fetch user profile and set in state
      dispatch('fetchUsers', user)
    },
    async fetchUsers({ commit }, user) {
      // fetch user profile
      const users = await fb.usersCollection.doc(user.uid).get()
  
      // set user profile in state
      commit('setUsers', users.data())
    
      // change route to dashboard
      router.push('/')
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user }  = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        username: form.username,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email  
        
      })
      // fetch user profile and set in state
      dispatch('fetchUsers', user)
      router.push('login')
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      commit('setUsers', null)
      router.push('/login')
    },

    async createExercise({ state }, exercise) {
      await fb.exercisesCollection.add({
        userId: fb.auth.currentUser.uid,
        username: state.users.username,
        createdOn: new Date(),
        date: exercise.date,
        muscle: exercise.muscle,
        location: exercise.location,
        startTime: exercise.startTime,
        endTime: exercise.endTime
      })
    }
    
  },
  modules: {
  }
})

export default store
