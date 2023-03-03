import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

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
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')
