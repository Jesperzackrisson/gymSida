<template>
  <div class="login">
      <div class="login-side">
          <div class="login-side-text">
              <h3>Registrera dig!</h3>
              <div class="login-side-inputs">
                  <i class="fas fa-user icon icon-firstname"></i>
                  <input type="text" placeholder="Förnamn" v-model="firstName" >
                  <i class="fas fa-user icon icon-lastname"></i>
                  <input type="text" placeholder="Efternamn" v-model="lastName">
                  <i class="fas fa-user icon icon-username"></i>
                  <input type="text" placeholder="Username" v-model="username">
                  <i class="fas fa-envelope icon icon-email"></i>
                  <input type="text" placeholder="Email" v-model="email">
                  <i class="fas fa-lock icon icon-password"></i>
                  <input type="password" placeholder="Lösenord" v-model="password">
                  <!-- <p class="error">{{ error }}</p> -->
              </div>
              <div class="login-side-button btn">
                  <button @click.prevent="signup()">Skapa</button>
              </div>
          </div>
      </div>
      <div class="register-side">
          <div class="register-side-text">
              <h3>Har du ett konto?</h3>
              <p>Logga in med dina personuppgifter</p>
              <div class="register-side-button btn">
                <button @click="$router.push('login')">Logga in</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import 'firebase/compat/auth'
// import firebase from 'firebase/compat/app';
// import db from '../firebase/index.js'
// import { auth } from '../firebase'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {

        signup() {
            this.$store.dispatch('signup', {
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username
  })

}
    
        
  }




        // async signUp() {
        //     try {
        //         await auth.createUserWithEmailAndPassword(this.email, this.password)
        //         .then((newUser) => {
        //             const { email, uid } = newUser.user
        //             this.$store.dispatch('setUser', {email, uid})
        //             this.$router.push('login')
        //         })
        //     } catch (error) {
        //         this.error = 'Du måste skriva in dina uppgifter för att skapa ett konto!';
        //     }
            
        //     // alert('signup');
        // }

        // async signUp() {
        //     if (
        //         this.email !== '' &&
        //         this.firstName !== '' &&
        //         this.lastName !== '' &&
        //         this.username !== '' &&
        //         this.password !== '' 
        //     ) {
        //         this.error = false;
        //         this.errorMsg = '';
        //         const firebaseAuth = await firebase.auth();
        //         const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        //         const result = await createUser;
        //         // const dataBase = db.collection('users').doc(result.user.uid);
        //         const dataBase = db.collection('users').doc(result.user.uid)
        //         await dataBase.set({
        //             firstName: this.firstName,
        //             lastName: this.lastName,
        //             username: this.username,
        //             email: this.email
        //         })
        //         this.$router.push('/');
        //         return;
        //     }
        //     this.error = true;
        //     this.errorMsg = 'Du måste fylla i alla fält för att kunna skapa ett konto';
        //     return;
        // }




    }

</script>

<style scoped>

.error {
    position: absolute;
    top: 84%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 1rem;
}


.icon-firstname {
    top: 19.5%;
}
.icon-lastname {
    top: 32.6%;
}
.icon-username {
    top: 45.5%;
}
.icon-email {
    top: 58.6%;
}
.icon-password {
    top: 71.4%;
}









</style>