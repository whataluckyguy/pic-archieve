import { useEffect, useState } from "react";
import "./App.css";
import Files from "./components/Files";
import Authentication from "./components/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(false);
  const [session, setSession] = useState(null);

  return (
    <>
      {user ? (
        <Files setUser={setUser} session={session} />
      ) : (
        <Authentication setUser={setUser} setSession={setSession} />
      )}
    </>
  );
}

export default App;
