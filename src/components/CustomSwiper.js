import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import Card from './common/Card'
import sliceText from './../helpers/sliceText'
import PlaylistCard from './PlayListCard'
import TrackCard from './TrackCard'

export default function CustomSwiper({ type, slides }) {
  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => {}}
      mousewheel={true}
      direction={'horizontal'}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      {slides &&
        slides.items.map(item => (
          <SwiperSlide key={item.id}>
            {/* <Card className="h-[250px] items-stretch gap-4 p-4">
              <img
                className="aspect-square rounded-full object-cover"
                src={item.images ? item.images[0].url : item.album.images[0].url}
                alt=""
              />
              <h3 className="font-bold">{sliceText(item.name, 22)}</h3>
            </Card> */}

            {type === 'albums' && <AlbumCard item={item} />}
            {type === 'artists' && <ArtistCard item={item} />}
            {type === 'playlists' && <PlaylistCard item={item} />}
            {type === 'tracks' && <TrackCard item={item} />}
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
