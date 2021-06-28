import { BrowserRouter } from "react-router-dom";
import NavbarHeader from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";

import { useContext } from "react";
import { Context } from ".";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";



function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  } else

  return (
    <BrowserRouter>
      <NavbarHeader user={user} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
