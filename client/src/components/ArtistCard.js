import Card from './common/Card'

export default function ArtistCard({ item }) {
  return (
    <Card className="h-[250px] items-stretch gap-4 p-4">
      <img
        className="aspect-square rounded-full object-cover"
        src={item.images[0] ? item.images[0].url : 'https://via.placeholder.com/640x640'}
        alt=""
      />
      <h3 className="font-bold">{item.name}</h3>
    </Card>
  )
}