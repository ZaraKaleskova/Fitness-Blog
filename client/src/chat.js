import firebase from './config/fbConfig';
import chatStyle from './components/assets/css/chatStyle.css'
import { Redirect } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className={chatStyle.Chat}>
      <header>
        <h1 className="chatHeader">Share your toughts ✍️ </h1>       
      </header>

      <section>
      
        {user ? <ChatRoom /> : <Redirect to='/signin' /> }
      </section>

    </div>
  );
}



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(50);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
 
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="chatForm" onSubmit={sendMessage}>

      <input className="chatInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Leave a message 💬" />

      <button type="submit" disabled={!formValue}>✉️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>     
      <img className="chatImg"src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default Chat;