import Card from './common/Card'
import { Link } from 'react-router-dom'

export default function ArtistCard({ item }) {
  return (
    <Link to={`/artist-albums/${item.id}`}>
      <Card className="h-[250px] items-stretch gap-4 p-4">
        <img
          className="aspect-square rounded-full object-cover"
          src={
            item.images[0] ? item.images[0].url : 'https://via.placeholder.com/640x640'
          }
          alt=""
        />
        <h3 className="font-bold">{item.name}</h3>
      </Card>
    </Link>
  )
}
