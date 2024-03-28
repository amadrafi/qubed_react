
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
const data = [
  { name: '25', understanding: 31, engagement: 60 }, 
  { name: '26', understanding: 45, engagement: 75 },
  { name: '27', understanding: 47, engagement: 80 },
  { name: '28', understanding: 42, engagement: 65 },
  { name: '29', understanding: 39, engagement: 70 },
  { name: '30', understanding: 50, engagement: 80 },
  { name: '31', understanding: 55, engagement: 75 }
];




function UnderstandingGraph(){
  return (
    <div className="w-full h-full bg-white rounded-lg">
      <h1 className='h-1/10 pl-5 pt-2 font-poppins text-black'> Analytics </h1>
      <ResponsiveContainer width="100%" height="90%" className='px-3'>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="grey"/>
          <Tooltip/>
          <Line type="monotone" dataKey="understanding" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }}/>
          <Line type="monotone" dataKey="engagement" stroke='#8f4215' strokeWidth={2} activeDot={{ r: 6 }}/>
        </ LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UnderstandingGraph;