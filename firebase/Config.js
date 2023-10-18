import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTpYxARVAKi3tZ8Tr9l0KBElMJRY4bHo4",
    authDomain: "chat-48578.firebaseapp.com",
    projectId: "chat-48578",
    storageBucket: "chat-48578.appspot.com",
    messagingSenderId: "127263305444",
    appId: "1:127263305444:web:6ab459a740ec3f0b7c46f1"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
}