
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
const data = [
  { name: '25', understanding: 50, engagement: 60 }, 
  { name: '26', understanding: 45, engagement: 75 },
  { name: '27', understanding: 57, engagement: 80 },
  { name: '28', understanding: 63, engagement: 65 },
  { name: '29', understanding: 59, engagement: 70 },
  { name: '30', understanding: 68, engagement: 80 },
  { name: '31', understanding: 70, engagement: 75 }
];




function UnderstandingGraph(){
  return (
    <div className="w-full h-full bg-white rounded-lg">
      <h1 className='h-1/10 py-5 text-lg font-semibold text-center font-poppins text-black'> Analytics </h1>
      <ResponsiveContainer width="100%" height="90%" className='px-3'>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -30, bottom: 20 }}>
          <XAxis dataKey="name" stroke="grey"/>
          <YAxis domain={["dataMin", "dataMax"]} padding={{top: 20, bottom: 100}}/>
          <Tooltip/>
          <Line type="monotone" dataKey="understanding" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }}/>
          <Line type="monotone" dataKey="engagement" stroke='#8f4215' strokeWidth={2} activeDot={{ r: 6 }}/>
        </ LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UnderstandingGraph;