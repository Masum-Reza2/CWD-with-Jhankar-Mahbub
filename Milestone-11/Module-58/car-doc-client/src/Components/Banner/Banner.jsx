import slider1 from '../../assets/images/banner/1.jpg'
import slider2 from '../../assets/images/banner/2.jpg'
import slider3 from '../../assets/images/banner/3.jpg'
import slider4 from '../../assets/images/banner/4.jpg'
import BannerOverlay from '../Shared/BannerOverlay'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={slider1} className="w-full rounded-xl brightness-50" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                <BannerOverlay />

            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={slider2} className="w-full rounded-xl brightness-50" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <BannerOverlay />
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={slider3} className="w-full rounded-xl brightness-50" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <BannerOverlay />
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={slider4} className="w-full rounded-xl brightness-50" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <BannerOverlay />
            </div>
        </div>
    )
}

export default Banner