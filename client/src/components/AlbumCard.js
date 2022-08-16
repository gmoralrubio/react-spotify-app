import React from 'react'
import Card from './common/Card'
import { sliceText } from '../helpers'
import { Link } from 'react-router-dom'

export default function AlbumCard({ item }) {
  return (
    <Link to={`/album-tracks/${item.id}/${item.name}`}>
      <Card className="h-[250px] items-stretch gap-4 p-4">
        <img
          className="aspect-square rounded-md object-cover"
          src={
            item.images[0] ? item.images[0].url : 'https://via.placeholder.com/640x640'
          }
          alt=""
        />
        <h3 className="font-bold">{sliceText(item.name, 22)}</h3>
      </Card>
    </Link>
  )
}
