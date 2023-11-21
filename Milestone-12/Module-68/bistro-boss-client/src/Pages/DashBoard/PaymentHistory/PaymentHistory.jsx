import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios"
import useGlobal from "../../../Hooks/useGlobal";

const PaymentHistory = () => {
    const secureAxios = useSecureAxios();
    const { user } = useGlobal()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    console.log(payments)
    return (
        <div>
            <h1 className="text-2xl font-bold">Total payments {payments?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments?.map((payment, index) => <tr key={payment?._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{payment?.email}</td>
                                <td>${payment?.price}</td>
                                <td>{payment?.transactionId}</td>
                                <td>{payment?.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory