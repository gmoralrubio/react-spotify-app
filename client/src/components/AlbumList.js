import React from 'react'
import Card from './common/Card'
import PrimaryButton from './common/PrimaryButton'

export default function AlbumList({ albums }) {
  return (
    <div className="mt-10 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
      {albums &&
        albums.items.map(album => (
          <Card key={album.id}>
            <div className="flex h-full flex-col items-stretch gap-4" key={album.id}>
              <img className="rounded-t-" src={album.images[1].url} alt="" />
              <div className="flex h-full flex-col gap-4">
                <h2 className="text-xl font-bold">{album.name}</h2>
                <PrimaryButton href={album.external_urls.spotify}>
                  Listen on Spotify
                </PrimaryButton>
              </div>
            </div>
          </Card>
        ))}
    </div>
  )
}
