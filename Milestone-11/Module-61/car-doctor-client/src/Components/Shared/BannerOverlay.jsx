const BannerOverlay = () => {
    return (
        <div className="absolute flex items-center h-full text-white pl-16">
            <div className='space-y-7'>
                <h1 className='text-5xl w-[40%] font-bold'>Affordable Price For Car Servicing</h1>
                <p className='w-8/12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='space-x-5'>
                    <button className='btn btn-error'>Discover More</button>
                    <button className='btn bg-transparent text-white hover:bg-transparent'>Latest Project</button>
                </div>
            </div>
        </div>
    )
}

export default BannerOverlay