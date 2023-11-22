import SectionTitle from "../SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://bistro-boss-server-eight-xi.vercel.app/review`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    // console.log(reviews)

    return (
        <section className="py-5">
            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'} />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide
                        key={review?._id}
                    >
                        <div className="text-center mx-24">
                            <div className="flex items-center justify-center py-8">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />
                            </div>
                            <p>icons</p>
                            <p>{review?.details}</p>
                            <p className="text-yellow-600 uppercase text-2xl">{review?.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    )
}

export default Testimonials