import React, { useState, useEffect } from 'react'
import './FactsList.css'

import { Link, useNavigate } from 'react-router-dom'

const FactsList = () => {
  const [facts, editFacts] = useState(null)

  const navigate = useNavigate()

  const onDetail = (userid, id) => {
    navigate('facts/detail/' + userid + '/' + id)
  }


  useEffect(() => {
    fetch("http://localhost:8000/factsList")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        editFacts(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='facts-list-main-div'>
      <div className='facts-list-header-cont'>
        <h1 className='facts-list-header-cont-head'>Dashboard</h1>
        <button className='facts-list-create-new-post-btn'><Link className='facts-list-create-btn' to='facts/create'>Create New Post</Link></button>
      </div>
      <div className='facts-list-body-cont'>

        <table>
          <thead>
            <tr>
              <th className='th'>Userid</th>
              <th className='th'>id</th>
              <th className='th'>title</th>
              <th className='th'>action</th>
            </tr>
          </thead>
          <tbody>
            {facts && facts.map(obj =>
              <tr>
                <td className='td'>{obj.userId}</td>
                <td className='td'>{obj.id}</td>
                <td className='td'>{obj.title}</td>
                <td className='td-btn'><button className='facts-list-knowmore-btn' onClick={() => { onDetail(obj.userId, obj.id) }}>knowmore</button></td>
              </tr>
            )

            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default FactsList