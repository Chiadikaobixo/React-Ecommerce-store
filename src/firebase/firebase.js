import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig ={
    apiKey: "AIzaSyDaAY6sgpL3yu5BwU6uyp4VQngPiudCPvM",
    authDomain: "ecommerce-67d28.firebaseapp.com",
    projectId: "ecommerce-67d28",
    storageBucket: "ecommerce-67d28.appspot.com",
    messagingSenderId: "970967149022",
    appId: "1:970967149022:web:294a0f58c9fc0cd815d54f",
    measurementId: "G-L5WFZ7C84N"
};


firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const auth = firebase.auth()

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) { return }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

export {
    firestore,
    createUserProfileDocument,
    auth
}