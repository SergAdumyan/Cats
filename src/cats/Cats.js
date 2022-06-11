import matchers from '@testing-library/jest-dom/matchers'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
export default function Cats() {
    const dispatch = useDispatch()
    useEffect(()=>{https://api.thecatapi.com/images/search?category_ids={{selected_category.id}}
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 ').then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            dispatch({type:'data', payload:{data:data}})
        })
    }, [])
  return (
    <div>Cats</div>
  )
}
