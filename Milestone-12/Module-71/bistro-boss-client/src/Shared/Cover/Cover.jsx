/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';


const Cover = ({ titel, desc, img }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={50}
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-50 min-w-[40vw] 2xl:min-w-max py-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{titel}</h1>
                        <p className="mb-5 w-[60vw]">{desc}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Cover