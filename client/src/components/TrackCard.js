import React from 'react'
import Card from './common/Card'
import { sliceText } from '../helpers'

import { BsPlayCircleFill } from 'react-icons/bs'
import { useApp } from '../context/AppContext'

export default function TrackCard({ item }) {
  const { setPlayTrack } = useApp()

  const clickHandler = () => {
    setPlayTrack(item.uri)
  }

  return (
    <Card className="h-[250px] items-stretch gap-4 p-4" onClick={clickHandler}>
      <div className="relative">
        <BsPlayCircleFill
          className="w absolute bottom-2 right-2"
          size={30}
          color="#E11D48"
        />
        <img
          className="aspect-square rounded-md object-cover"
          src={
            item.album.images
              ? item.album.images[0].url
              : 'https://via.placeholder.com/640x640'
          }
          alt=""
        />
      </div>
      <h3 className="font-bold">{sliceText(item.name, 22)}</h3>
    </Card>
  )
}
