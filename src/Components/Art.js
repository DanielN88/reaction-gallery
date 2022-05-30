import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/currentArt/currentArtAPI'
import { randomize } from '../features/currentArt/currentArtSlice'

const Art = () => {
  const currentArt = useSelector((state) => state.currentArt)
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(randomize(currentArt, fetchData))}>
      <img src={currentArt}/>
    </div>
  )
}
export default Art
