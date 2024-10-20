import Link from "next/link";
export default function Header() {
  return (
    <div>
      <div className="flex bg-blue-800 text-white p-6 justify-center gap-9">
        <Link href="/">HOME PAGE </Link>
        <Link href="/login"> LOGIN </Link>
        <Link href="/signup"> SIGN UP </Link>
      </div>
    </div>
  );
}
