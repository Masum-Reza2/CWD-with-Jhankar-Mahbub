import axios from "axios"
import { useEffect, useState } from "react"
import { Audio } from "react-loader-spinner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';



const AxiosChart = () => {
    let isRed = true
    const [loading, setLoading] = useState(true)

    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => setPhones(data.data.data))//axios automatically converts into json()
        setLoading(false)
    }, [])

    let fakephoneData = phones.map(phone => {
        let fakePhone = {
            name: phone.phone_name,
            price: parseFloat(phone.slug.split('-')[1]),
            downPrice: parseFloat(phone.slug.split('-')[1]) - 2000,
        }
        return fakePhone
    })

    return (
        <>
            {loading &&

                <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            }

            <div>
                <h1 className={isRed?'text-red-500':'text-blue-500'}>Hi testing</h1>
                <BarChart
                    width={1200}
                    height={300}
                    data={fakephoneData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nanme" />
                    <YAxis dataKey={'price'} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                    <Bar dataKey="downPrice" fill="#82ca9d" />
                </BarChart>
            </div>
        </>
    )
}

export default AxiosChart