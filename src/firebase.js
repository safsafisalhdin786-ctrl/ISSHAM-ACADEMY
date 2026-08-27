import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP3-oVC5Q9mTG4Lj0Y10TXMQmf4BKXB18",
  authDomain: "issham-acadmy.firebaseapp.com",
  projectId: "issham-acadmy",
  storageBucket: "issham-acadmy.firebasestorage.app",
  messagingSenderId: "3012980900",
  appId: "1:3012980900:web:95dd7347dade35626c3631",
  measurementId: "G-9CFVEYM41T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

// تفعيل Offline Cache بالنظام الحديث المقبول من Vite و Firebase v10+
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});