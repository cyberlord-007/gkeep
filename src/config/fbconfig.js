import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAZjVwNR0fLMZPupWM2rWXsuBdggd2mWrA",
	authDomain: "gkeep-624d0.firebaseapp.com",
	projectId: "gkeep-624d0",
	storageBucket: "gkeep-624d0.appspot.com",
	messagingSenderId: "950291810083",
	appId: "1:950291810083:web:11537aedafa27241e0ae96",
	measurementId: "G-KM640PNZRV",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
