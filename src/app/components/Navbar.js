import Link from "next/link";
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function Navbar() {
  return (
    <div className=" w-48 flex flex-initial min-h-lvh bg-zinc-900 content-center">
      <div className="w-full h-56 self-center ">
        <ul className="text-right font-poppins text-sm px-2 py-auto font-medium text-lg antialiased">
          <li className="py-4 hover:bg-zinc-800 rounded-lg pl-4 pr-2"><Link href='/'>Overview <BarChartRoundedIcon /></Link></li>
          <li className="py-4 hover:bg-zinc-800 rounded-lg pl-4 pr-2"><Link href='/classes'>Classes <ClassRoundedIcon /></Link></li>
          <li className="py-4 hover:bg-zinc-800 rounded-lg pl-4 pr-2"><Link href='/add_lessons'>Add Lesson <AddCircleOutlineRoundedIcon /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
