import React from 'react'
import { useState } from 'react'
const UserList = () => {


    let data = [
        {id: 1, name: 'Alex', age: 30, salary: 3400},
        {id: 2, name: 'Steven', age: 28, salary: 1300},
        {id: 3, name: 'Neena', age: 24, salary: 4540},
        {id: 4, name: 'Willyam', age: 33, salary: 900},
    ]



    let [users, setUsers] = useState(data)

 function removeFirstUser() {
    setUsers(users.slice(1))
 }
 


function removeLastUser() {
  setUsers(users.slice(0, -1))
}


// Задание: 
    // 1) Сделайте кнопку, которая будет увеличивать зарплату сотрудников на 10% (округляя по правилам математики)
    // 2) Сделайте кнопку, которая будет фильтровать сотрудников по возрасту (от 30 лет включительно)
    // 3) Реализуйте удалению сотрудников по нажатию на карточку (по клику) (по id)
 

  return (
    <div>

        <h2>Users</h2>
        <button onClick={removeFirstUser}>Remove first user</button>
        <button onClick={removeLastUser}>Remove last user</button>
       

        <div className='user_wrapper'>
        {users.map(elem=>
        <div key={elem.id}>
            <h3>{elem.name}</h3>
            <p>Age:{elem.age}</p>
            <p>Salary:{elem.salary}</p>
         </div>
       
        )}
    </div>
    </div>
  )
}

export default UserList