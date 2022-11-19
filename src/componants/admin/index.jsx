import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminCmp = () => {
    const {data} = useSelector((state)=>state.UserInfo)
    const navigate = useNavigate
    // useEffect(()=>{
    //     if(data.Role=='User'){
    //         navigate('/home')
    //     }
    // },[])
  return (
    <div>AdminCmp</div>
  )
}

export default AdminCmp