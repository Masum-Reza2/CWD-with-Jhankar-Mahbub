import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChart = () => {

    const subjectsMark = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Bob", "math": 92, "physics": 87, "chemistry": 94 },
        { "id": 3, "name": "Charlie", "math": 78, "physics": 72, "chemistry": 85 },
        { "id": 4, "name": "David", "math": 90, "physics": 84, "chemistry": 91 },
        { "id": 5, "name": "Eva", "math": 88, "physics": 89, "chemistry": 92 },
        { "id": 6, "name": "Frank", "math": 72, "physics": 65, "chemistry": 78 },
        { "id": 7, "name": "Grace", "math": 94, "physics": 91, "chemistry": 88 },
        { "id": 8, "name": "Hannah", "math": 81, "physics": 76, "chemistry": 80 },
        { "id": 9, "name": "Ian", "math": 89, "physics": 84, "chemistry": 89 },
        { "id": 10, "name": "Jack", "math": 95, "physics": 92, "chemistry": 85 }
    ]



    return (
        <div className=' flex justify-center'>
            <LChart width={400} height={400} data={subjectsMark}>
                <Line type="monotone" dataKey="math" stroke="red" />
                <Line type="monotone" dataKey="physics" stroke="green" />
                <Line type="monotone" dataKey="chemistry" stroke="black" />
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
            </LChart>
        </div>
    )
}

export default LineChart