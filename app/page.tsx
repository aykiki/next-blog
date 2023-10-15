import Link from 'next/link';

export default function Home() {
  return (
    <nav className="py-40">
      <ul className="flex w-full items-center justify-center gap-6 text-4xl">
        <li className="rounded-md	h-32 flex items-center text-4xl justify-center w-[400px] bg-gray-300 text-gray-700 hover:bg-rose-400 cursor-pointer">
          <Link href="/blog">Blog List</Link>
        </li>
        <li>
          <Link
            href="/create"
            className="rounded-md	h-32 flex items-center text-4xl justify-center w-[400px] bg-gray-300 text-gray-700 hover:bg-rose-400 cursor-pointer"
          >
            Create post
          </Link>
        </li>
      </ul>
    </nav>
  );
}
