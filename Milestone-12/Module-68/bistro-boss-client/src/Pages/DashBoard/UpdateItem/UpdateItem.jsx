import { useLoaderData } from "react-router-dom"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import Swal from "sweetalert2";


// imgbb operations
const imageKey = import.meta.env.VITE_img_key;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageKey}`

const UpdateItem = () => {

    const oldItem = useLoaderData();
    const { name, image, category, price, recipe, _id } = oldItem

    const { register, handleSubmit, reset } = useForm();

    const publicAxios = useAxiosPublic();
    const secureAxios = useSecureAxios();

    const onSubmit = async (data) => {

        try {
            // image uploading activites / also i can make a hook for image upload
            const imageFile = { image: data.image[0] }
            const res = await publicAxios.post(image_hosting_url, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            // getting ready the menuItem
            const imageUrl = res?.data?.data?.display_url;
            data.image = imageUrl; //updated the image field
            data.price = parseFloat(data.price); //converted the price into a number


            // send to database remember only admin have this power
            const menuItem = data;
            const menuRes = await secureAxios.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes?.data)
            if (menuRes.data.modifiedCount) {
                // show success message
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Successfully updated ${menuItem.name}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // reset()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="-mt-14">
                <SectionTitle heading={'Add an item'} subHeading={`What's new?`} />
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input defaultValue={name} required {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-5">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-warning w-full">
                                <option disabled value={category}>Select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={price} required {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="my-2">
                        <input required {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn">
                            Update Item
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateItem