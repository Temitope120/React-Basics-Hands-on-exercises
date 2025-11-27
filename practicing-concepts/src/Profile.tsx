import React, { useState } from 'react'
import Button from './Button';

const Profile = () => {
    const [text, setText] = useState('Logged In');

    function ToggleLoginText(){
        console.log('got here');
        setText(prevText => prevText === 'LoggedIn' ? 'LoggedOut' : 'LoggedIn')
        
    }

  return (
    <div className='mt-8 pt-8'>
        <h1>Profile</h1>
      <p> {text}</p>
      <Button handleTextToggle={ToggleLoginText}/>
    </div>
  )
}

export default Profile
