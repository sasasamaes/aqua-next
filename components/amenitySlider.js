import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

const AmenitySlider = ({ amenities }) => {
  return (
    <Carousel indicators={false}>
      {amenities &&
        amenities?.map((amenity, index) => {
          if (amenity.madal !== null) {
            return (
              <Carousel.Item key={`slide-${index}`}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '20%',
                  }}
                >
                  <img src={amenity.modal?.url} alt={amenity.icon?.caption} />
                </div>
              </Carousel.Item>
            )
          }
          return null
        })}
    </Carousel>
  )
}

export default AmenitySlider
