import React from 'react';
import Link from 'next/link';
import DeletionPost from '@/app/blog/components/deletion';

const Post = ({ title, body, id }: BlogPost) => (
  <div className="flex flex-col w-[600px] mb-5 text-gray-600 bg-gray-300 p-4 rounded-2xl">
    <Link href={`/post/${id}`}>
      <section className="mb-4">
        <h2 className="text-2xl mb-3 font-semibold">{title}</h2>
        <p>{body}</p>
      </section>
    </Link>
    <DeletionPost postId={id.toString()} />
  </div>
);

export default Post;
