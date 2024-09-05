import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
      {user ? <Home user={user} /> : <SignIn />}
    </MantineProvider>
  );
}
