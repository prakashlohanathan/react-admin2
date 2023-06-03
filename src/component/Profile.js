import React from 'react'
import { Outlet } from 'react-router-dom'

function Profile() {
  return <>
    <div>
        <h1>Profile</h1>
<h3>The Sub Component are:</h3>

<ul>
    <a to='details'><li>Profile details</li></a>
    <a to='reset-password'><li>Reset Password</li></a>
</ul>
<Outlet/>
</div>
</>
}

export default Profile
