import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './FactsDetails.css'


const FactsDetails = () => {
    const {userid,id}=useParams()
    const [facts,updFacts]=useState({})

    const navigate = useNavigate()

    const onClicked = () => {
        navigate('/facts/create')
    }

    useEffect(() => {
        fetch(`http://localhost:8000/factsList?userId=${userid}&id=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                updFacts(data[0])
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='facts-list-main-div'>
            <div className='facts-list-header-cont'>
                <h1 className='facts-list-header-cont-head'>Dashboard</h1>
                <button className='facts-list-create-new-post-btn' onClick={onClicked} >Create New Post</button>
            </div>
            <div className='facts-list-body-cont'>

                <h1 className='create-new-post-h1'>View Details</h1>

                <div className='col-lg-12 facts-create-user-id-input-cont'>
                    <label htmlFor='facts-create-userid-id'>UserId:</label>
                    <input type='text' className='facts-create-user-id-input-ele facts-edit-input-ele' id='facts-create-userid-id' value={facts.userId} />
                </div>
                <div className='col-lg-12 facts-create-user-id-input-cont'>
                    <label htmlFor='facts-create-id-id'>id:</label>
                    <input type='text' className='facts-create-user-id-input-ele' id='facts-create-id-id' value={facts.id} />
                </div>
                <div className='col-lg-12 facts-create-user-id-input-cont'>
                    <label htmlFor='facts-create-title-id'>title:</label>
                    <p className='facts-edit-para-ele'>{facts.title}</p>
                </div>
                <div className='col-lg-12 facts-create-user-id-input-cont'>
                    <label htmlFor='facts-create-title-id'>body:</label>

                    <p className='facts-edit-para-ele'>{facts.body}</p>
                </div>
            </div>

        </div>
    )
}

export default FactsDetails