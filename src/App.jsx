import { useState } from "react";
import './App.css'
import AuthPage from "./components/AuthPage";
import ChatsPage from "./components/ChatsPage";

export default function App() {
  const [user, setUser] = useState()

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}