import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


//  todo : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_pk);
const Payment = () => {

    // // >>>>>>Additional
    // const appearance = {
    //     theme: 'stripe',
    // };
    // const options = {
    //     clientSecret,
    //     appearance,
    // };
    // // >>>>>>Additional

    return (
        <div>
            <div className="-mt-14">
                <SectionTitle heading={'Payment'} subHeading={'Please pay to eat.'} />
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )
}

export default Payment