import React from 'react';
import Link from 'next/link';
import DeletionPost from '@/app/blog/components/deletion';

const Post = ({ title, body, id }: BlogPost) => (
  <>
    <Link href={`/post/${id}`}>
      <section className="mb-5">
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
    </Link>
    <DeletionPost postId={id.toString()} />
  </>
);

export default Post;
