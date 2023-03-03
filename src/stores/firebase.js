import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

if (import.meta.env.DEV) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDIugA7Oqcx-MsvYNuqAfXAIM4SnHJIQC4',
    authDomain: 'wgapp-4bfbf.firebaseapp.com',
    projectId: 'wgapp-4bfbf',
    storageBucket: 'wgapp-4bfbf.appspot.com',
    messagingSenderId: '149934052912',
    appId: '1:149934052912:web:9ec7f014c345c7ed8afff5'
  }
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(auth, 'http://localhost:9099')
  connectStorageEmulator(storage, 'localhost', 9199)
}

const firebaseConfig = {
  apiKey: 'AIzaSyDIugA7Oqcx-MsvYNuqAfXAIM4SnHJIQC4',
  authDomain: 'wgapp-4bfbf.firebaseapp.com',
  projectId: 'wgapp-4bfbf',
  storageBucket: 'wgapp-4bfbf.appspot.com',
  messagingSenderId: '149934052912',
  appId: '1:149934052912:web:9ec7f014c345c7ed8afff5',
  measurementId: 'G-R6KNPY53RR'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')

export { db, auth, storage, analytics }
