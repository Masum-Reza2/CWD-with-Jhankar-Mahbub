import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [members, setMembers] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])
  // console.log(users)

  const handleForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email }

    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(user => setMembers([...members, user]))

  }

  return (
    <>
      <h1>All users : {members?.length}</h1>

      <form onSubmit={handleForm}>
        <input type="text" name='name' />
        <br />
        <input type="text" name='email' />
        <br />
        <button>Post</button>
      </form>

      {
        members?.map((member, index) => <p key={member.id}>{`${index + 1} ${member.name} __ ${member.email}`}</p>)
      }
    </>
  )
}

export default App