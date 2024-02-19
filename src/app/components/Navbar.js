import Link from "next/link";

function Navbar() {
  return (
    <div className=" w-44 flex flex-initial min-h-lvh bg-zinc-900 content-center">
      <div className="w-full h-64 self-center">
        <ul className="text-right px-8 py-6 font-medium text-lg antialiased">
          <li><Link href='/'>Dashboard</Link></li>
          <li><Link href='/classes'>Classes</Link></li>
          <li><Link href='/add_lessons'>Add Lesson</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
