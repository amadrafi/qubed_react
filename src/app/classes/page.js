import Link from "next/link";

export default function Classes() {
  return (
    <div className="bg-slate-100 min-h-full text-black">
      <h1>This is classes</h1>
      <Link href="/">This is to go back home</Link>
    </div>
  );
}