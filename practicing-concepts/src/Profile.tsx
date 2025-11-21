import React, { useState } from 'react'

const Profile = () => {
    const [text, setText] = useState('Logged In');

  return (
    <div>
      <p> I am {text}</p>
    </div>
  )
}

export default Profile
