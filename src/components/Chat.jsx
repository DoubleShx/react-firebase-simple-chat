import { useState } from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./Loader";

import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const [value, setValue] = useState("");

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Chat_container">
      <div className="Chat">
        {messages.map((message) => (
          <div className="message">
              <span className="user_message_settings-wrapper">
                  <img className="avatar_profile" src={message.photoUrl}/>
                  <div><h3>{message.displayName}</h3></div>
              </span>
              <div className="message_text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-group mb-3 input_group_type">
        <div className="input-group-prepend">
          <button
            onClick={sendMessage}
            className="btn btn-secondary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Chat;
