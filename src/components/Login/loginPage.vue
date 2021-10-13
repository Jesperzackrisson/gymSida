<template>
  <div class="login">
      <div class="login-side">
          <div class="login-side-text">
              <h3>Logga in</h3>
              <div class="login-side-inputs">
                  <i class="fas fa-envelope icon"></i>
                  <input type="email" placeholder="Email" v-model="email">
                  <i class="fas fa-lock icon"></i>
                  <input type="password" placeholder="Password" v-model="password"> 
                  <!-- <p v-if="error" class="error">{{ error }}</p>     -->
                  <!-- <p>glömt inte bort att skriva in dina uppgifter</p> -->
              </div>
              <!-- <a href="#">Glömt ditt lösenord?</a> -->
              <div class="login-side-button btn">
                  <button @click="login">Logga in</button>
              </div>
          </div>
      </div>
      <div class="register-side">
          <div class="register-side-text">
              <h3>Inget konto?</h3>
              <p>Skapa ett konto på några sekunder genom att skriva in dina personuppgifter!</p>
              <div class="register-side-button btn">
                <button @click="$router.push('register')">Skapa konto</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import { auth } from '../firebase';
// console.log(auth);
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
            email: this.email,
            password: this.password
            })
            
        }
    }

        

        

    


        // authenticate() {
        //     this.login();
        // },
        // async login() {
        //     try {
        //         await auth.signInWithEmailAndPassword(this.email, this.password).then((newUser) => {
                    
        //              const { email, uid } = newUser.user
        //              this.$store.dispatch('setUser', {email, uid})
        //              this.$router.push('/')
        //         })
        //     } catch (error) {
        //         this.error = 'Du måste skriva in dina uppgifter för att logga in!'
        //     }
            
            
        // },
        
}

</script>

<style>



.login {
    margin: 0 auto;
}

.login-side {
    display: block;
    background-color: #F1F1F1;
    width: 50vw;
    height: 100vh;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    /* border: none; */
    /* border-top-left-radius: 15px;
    border-bottom-left-radius: 15px; */
}
.login-side-text {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
    .login-side-text > h3 {
        font-size: 48px;
        margin-bottom: 2rem;
        color: #1F4954;
    }
    .login-side-text > a {
        text-decoration: none;
        color: #333;
    }
    .login-side-inputs {
        margin-bottom: 2rem;
    }
    .login-side-inputs > input {
        display: block;
        margin: auto;
        width: 457px;
        height: 52px;
        margin-bottom: 1rem;
        padding-left: 3rem;
        border: none;
    }
    .login-side-inputs > input::placeholder {
        color: #333;
        opacity: .6;
    }
    .icon {
        color: #333;
        opacity: .6;
        position: fixed;
    }
        .fa-envelope {
            right: 94%;
            top: 33.1%;
        }
        .fa-lock {
            right: 94%;
            top: 53.2%;
        }
        .fa-user {
            right: 94%;
            top: 21%;
        }
    .btn {
        margin-top: 4rem;
    }
    .btn > button {
        width: 150px;
        height: 50px;
        border-radius: 100px;
    }
    .login-side-button > button {
        border: none;
        background-color: #333;
        color: #F1F1F1;
        cursor: pointer;
    }


.error {
    text-align: center;
    font-size: 12px;
    color: red;
}


.register-side {
    background-color: #1F4954;
    width: 50vw;
    height: 100vh;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    /* border-top-right-radius: 15px;
    border-bottom-right-radius: 15px; */
}

.register-side-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.register-side-text > h3 {
    font-size: 48px;
    margin-bottom: 2rem;
    color: #F1F1F1;
}
.register-side-text > p {
    color: #F1F1F1;
    line-height: 1.5rem;
}
.register-side-button > button {
    background: none;
    border: 1px solid #f1f1f1;
    color: #F1F1F1;
    cursor: pointer;
}
.register-side-button > button:hover {
    background-color: #F1F1F1;
    color: #1F4954;
}

.error {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 1rem;
}

</style>