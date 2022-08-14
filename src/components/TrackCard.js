import React from 'react'
import Card from './common/Card'
import sliceText from './../helpers/sliceText'
import { BsPlayCircleFill } from 'react-icons/bs'

export default function TrackCard({ item }) {
  return (
    <Card className="h-[250px] items-stretch gap-4 p-4">
      <div className="relative">
        <BsPlayCircleFill
          className="w absolute bottom-2 right-2"
          size={30}
          color="#E11D48"
        />
        <img
          className="aspect-square rounded-md object-cover"
          src={item.album.images ? item.album.images[0].url : null}
          alt=""
        />
      </div>
      <h3 className="font-bold">{sliceText(item.name, 22)}</h3>
    </Card>
  )
}
