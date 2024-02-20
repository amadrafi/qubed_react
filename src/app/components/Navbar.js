import Link from "next/link";
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function Navbar() {
  return (
    <div className=" w-40 flex flex-initial min-h-lvh bg-zinc-900 content-center">
      <div className="w-full h-56 self-center">
        <ul className="text-right text-sm px-4 py-6 font-medium text-lg antialiased">
          <li className="py-1"><Link href='/'>Overview <BarChartRoundedIcon /></Link></li>
          <li className="py-1"><Link href='/classes'>Classes <ClassRoundedIcon /></Link></li>
          <li className="py-1"><Link href='/add_lessons'>Add Lesson <AddCircleOutlineRoundedIcon /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
