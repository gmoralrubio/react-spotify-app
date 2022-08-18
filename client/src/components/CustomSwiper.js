import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import PlaylistCard from './PlayListCard'
import TrackCard from './TrackCard'
import { capitalizeFirstLetter } from './../helpers'

export default function CustomSwiper({ slides }) {
  return (
    <div className="rounded-md bg-slate-700 p-4">
      <h2 className="mb-4 text-xl font-bold text-white">
        {capitalizeFirstLetter(slides.items[0].type) + 's'}
      </h2>
      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => {}}
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
              {slides.items[0].type === 'album' && <AlbumCard item={item} />}
              {slides.items[0].type === 'artist' && <ArtistCard item={item} />}
              {slides.items[0].type === 'playlist' && <PlaylistCard item={item} />}
              {slides.items[0].type === 'track' && <TrackCard item={item} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
