import Image from "next/image"

import img from '@/assets/pizza-bg.jpg'

const PhotoPage = () => {
    return (
        <div>
            <Image
                width={500}
                height={500}
                src={img} alt="photo" />

            <Image
                width={500}
                height={500}
                src="https://i.ibb.co/Gk3sH5s/sportsman-5055367-1920.jpg" alt="photo" />

            <img src="https://i.ibb.co/Gk3sH5s/sportsman-5055367-1920.jpg" alt="photo" width={500}
                height={500} />

        </div>
    )
}

export default PhotoPage