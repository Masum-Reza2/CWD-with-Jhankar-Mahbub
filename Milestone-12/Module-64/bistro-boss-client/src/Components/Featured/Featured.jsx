import SectionTitle from "../SectionTitle/SectionTitle";
import featured from '../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className=" pb-20 pt-5 featured-bg bg-fixed">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
            <div className="flex items-center justify-center px-28 gap-10 text-white">
                <div>
                    <img className="rounded-lg" src={featured} alt="" />
                </div>
                <div className="bg-slate-600 bg-opacity-50 space-y-2 p-2">
                    <h5>March 20, 2023</h5>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured