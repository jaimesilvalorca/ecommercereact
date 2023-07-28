import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkgQjHCb2iLzg1AR3tladxV3Nt-736z8c",
  authDomain: "ecommerce-ecjs.firebaseapp.com",
  projectId: "ecommerce-ecjs",
  storageBucket: "ecommerce-ecjs.appspot.com",
  messagingSenderId: "30825137240",
  appId: "1:30825137240:web:c047f164d431780485f62d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



