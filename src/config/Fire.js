import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDTT_S39NRiOMZQdMOdYoQGSS6DLBn_G7c",
    authDomain: "inner-peace-40625.firebaseapp.com",
    databaseURL: "https://inner-peace-40625.firebaseio.com",
    projectId: "inner-peace-40625",
    storageBucket: "inner-peace-40625.appspot.com",
    messagingSenderId: "234716031390"
};

const fire = firebase.initializeApp(config);
export default fire;