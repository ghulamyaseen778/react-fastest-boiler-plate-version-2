import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeCmp = () => {
  const navigate= useNavigate()
  const ActiveUser = localStorage.getItem('User-Info')

  useEffect(()=>{
   if (!ActiveUser){
    navigate('/')
    }
  },[])
  return (
    <>
    <h1>helolo</h1>
    </>
    )
}

export default HomeCmp