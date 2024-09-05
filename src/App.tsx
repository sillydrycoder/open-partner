// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-1M1Yv12JMZaYmHpMLypF1bx1a6v9QA",
  authDomain: "ali-s-profile.firebaseapp.com",
  databaseURL: "https://ali-s-profile-default-rtdb.firebaseio.com",
  projectId: "ali-s-profile",
  storageBucket: "ali-s-profile.appspot.com",
  messagingSenderId: "740726260592",
  appId: "1:740726260592:web:be9373b55a98c5817905b5",
  measurementId: "G-V3F6DZ9DBF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ON AUTH STATE CHANGE

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <MantineProvider>
      <h1>Hello</h1>
    </MantineProvider>
  );
}
