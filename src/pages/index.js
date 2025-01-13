import React from 'react'

function HomePage() {
  const [users, setUsers] = React.useState([])
  const [newUser , setNewUser] = React.useState({
    name : "",
    password : ""
  })
  const loadUsers = async() => {
    const res = await fetch("http://localhost:3000/api/users")
    const users = await res.json()

    if (users.length > 0) {
      setUsers(users)
    }
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth" , {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newUser)
    })
    if (res.status === 201){
      alert("new user created")
      loadUsers();
    }
  }
  return (
    <>
    <button onClick={loadUsers}>Load Users</button>
    <h2>Users : </h2>

    <ul>
      {
        users.length > 0 ? users.map(user => (<p>{user.name}</p>) ) : <p>No Users</p>
      }
    </ul>

    <form onSubmit={formSubmitHandler}>
      <input value={newUser.name} type='text' placeholder='name' onChange={(e) => setNewUser({...newUser , name : e.target.value})} />
      <input value={newUser.password} type='password' placeholder='password' onChange={(e) => setNewUser({...newUser , password : e.target.value})} />
      <button type='submit'>Create User</button>
    </form>
    </>
  )
}

export default HomePage