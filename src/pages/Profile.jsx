import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.name,
    email: auth.currentUser.email,
  })
  const {name, email} = formData
  function onLogout(){
    auth.signOut()
    navigate('/')
  }

  return (
    <>
    <section>
      <h1>My Profile</h1>
      <div>
        <form>
          <input type="text" id="name" value={name} disabled/>
          <input type="email" id="email" value={email} disabled/>
          <div>
            <p>Do you want to change your name? <span>Edit</span></p>
            <p onClick={onLogout}>Sign Out</p>
            
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Profile