import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative h-full'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl h-[60vh]" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-0 top-1/2 border-8 border-white h-[40vh]" />
                </div>
                <div className='lg:w-1/2'>
                    <h5 className='text-orange-500 font-bold'>About Us</h5>
                    <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-warning text-white">Get More Info</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs