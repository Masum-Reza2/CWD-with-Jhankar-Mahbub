/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useGlobal from "../../../Hooks/useGlobal"
import useSecureAxios from "../../../Hooks/useSecureAxios";
import { FaDollarSign, FaJediOrder, FaList, FaUsers } from "react-icons/fa";

// recharts 
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, Tooltip, } from 'recharts';
import PiechartData from "./PiechartData";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     // {
//     //     name: 'Page E',
//     //     uv: 1890,
//     //     pv: 4800,
//     //     amt: 2181,
//     // },
//     // {
//     //     name: 'Page F',
//     //     uv: 2390,
//     //     pv: 3800,
//     //     amt: 2500,
//     // },
//     // {
//     //     name: 'Page G',
//     //     uv: 3490,
//     //     pv: 4300,
//     //     amt: 2100,
//     // },
// ];

const AdminHome = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();

    const { data: states = {} } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const res = await secureAxios.get('/admin-states')
            return res?.data;
        }
    })


    // war to separate category and price in client side
    const { data: testAnalysis = [] } = useQuery({
        queryKey: ['testAnalysis'],
        queryFn: async () => {
            const res = await secureAxios.get('/testAnalysis')
            return res?.data;
        }
    })
    // console.log(testAnalysis)
    const categories = testAnalysis.map(item => item.category) //seperate the categories from testAnalysis
    const uniqueCategory = [...new Set(categories)]; //unique categories
    // console.log(categories)
    const pricesByCategory = uniqueCategory.map(category => {
        // Find all items with the current category
        const itemsWithCategory = testAnalysis.filter(item => item.category === category);

        // Extract prices from the items
        const prices = itemsWithCategory.reduce((prev, curr) => prev + curr?.price, 0);

        // Return an object with the category and its corresponding prices
        return { category, prices };
    });
    console.log(pricesByCategory);
    // war to separate category and price in client side



    // recharts functions
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // recharts functions


    // >>>>>>>>pie chart
    const pieData = pricesByCategory.map(item => {
        return {
            name: item?.category,
            value: item?.prices
        }
    })
    // >>>>>>>>pie chart

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Welcome {user?.displayName || 'back'}</h1>
            <div className="py-5">
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className="text-2xl" />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${states?.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-2xl" />
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value">{states?.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaJediOrder className="text-2xl" />
                        </div>
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value">{states?.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaList className="text-2xl" />
                        </div>
                        <div className="stat-title">Menu Items</div>
                        <div className="stat-value">{states?.menuItems}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={pricesByCategory}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="prices" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {pricesByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>


                <div className="w-1/2">
                    <PiechartData pieData={pieData} />
                </div>
            </div>

        </div>
    )
}

export default AdminHome