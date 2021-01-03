import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTiEB0skFOgJK-3d5KoHMCCOVRCsvCLeE",
  authDomain: "emaillist-95caf.firebaseapp.com",
  projectId: "emaillist-95caf",
  storageBucket: "emaillist-95caf.appspot.com",
  messagingSenderId: "979830798550",
  appId: "1:979830798550:web:90d2d0340ac6af17f8b177",
  measurementId: "G-NN4GZRN5S2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
