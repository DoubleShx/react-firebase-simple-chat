import { useContext } from "react";
import { Context } from "..";
import firebase from 'firebase'

function Login() {
  // 4- пункт
  const {auth} = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user)
  }

    return (
      <div className="Login_container">
        <div className="login_form">
          <button onClick={login} className="btn p-80 btn-secondary authenticating_button">Google Authenticate</button>
        </div>
      </div>
    );
  }
  
  export default Login;