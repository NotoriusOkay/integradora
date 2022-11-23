import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdUVU0KLInjbrUiRxURQUVHnh7i3lZNRE",
  authDomain: "integradora-a1ddb.firebaseapp.com",
  projectId: "integradora-a1ddb",
  storageBucket: "integradora-a1ddb.appspot.com",
  messagingSenderId: "708553371941",
  appId: "1:708553371941:web:1785c65440a9a81cb06acc"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

//Inicializar el server 
const app = express()

//Inicializamos el Middleware
app.use(express.static('public'))
app.use(express.json())

//Rutas del BACKEND
//Ruta Home
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

//Arancamos el server
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server in Port : ${PORT}`)
})