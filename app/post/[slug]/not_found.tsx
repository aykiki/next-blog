import Link from 'next/link';

const NotFound = () => (
  <div className="flex flex-col w-[600px] items-center justify-center">
    <p className="text-rose-500 text-xl">Not Found</p>
    <p>Could not find requested resource</p>
    <p>
      View <Link href="/blog">all posts</Link>
    </p>
  </div>
);

export default NotFound;
