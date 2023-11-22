import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useGlobal from "../../../Hooks/useGlobal";
import useCarts from "../../../Hooks/useCarts";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const { user } = useGlobal();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    // from github docs
    const stripe = useStripe();
    const elements = useElements();

    // >>>>>>>>>>>>>>>>>>getting the client secret from stripe docs
    const [clientSecret, setClientSecret] = useState('')
    const { carts, refetch } = useCarts();
    const totalPrice = carts?.reduce((prev, curr) => prev + curr?.price, 0);
    const secureAxios = useSecureAxios();
    useEffect(() => {
        if (totalPrice > 0) {
            secureAxios.post(`/create-payment-intent`, { price: totalPrice })
                .then(res => {
                    setClientSecret(res?.data?.clientSecret)
                })
        }
    }, [secureAxios, totalPrice])
    // console.log(clientSecret)
    // >>>>>>>>>>>>>>>>>>getting the client secret

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // >>>>>>>>>Confirm card payment from another doc in the same web
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirm error', confirmError)
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment history on the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //convert to utc date ---> use moment js
                    cartIds: carts?.map(item => item?._id),
                    menuItemIds: carts?.map(item => item?.menuId),
                    status: 'pending',
                }

                // saving to data base and clearing the paid carts
                const dbResult = await secureAxios.post('/payments', payment)
                if (dbResult?.data?.deleteResult?.deletedCount && dbResult?.data?.paymentResult?.insertedId) {
                    Swal.fire(`Payment successful $${totalPrice}`);
                    refetch();
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {totalPrice ? <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
                Pay
            </button> : <button className="btn btn-sm btn-primary my-4" disabled>
                No items
            </button>}

            <p className="text-red-700 font-semibold">{error}</p>
            {transactionId && <p className="text-green-700">Your transaction id {transactionId}</p>}
        </form>
    )
}

export default CheckoutForm