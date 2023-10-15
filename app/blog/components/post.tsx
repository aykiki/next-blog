import React from 'react';
import Link from 'next/link';

const Post = ({ title, body, id }: BlogPost) => (
  <Link href={`/post/${id}`}>
    <section className="mb-5">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  </Link>
);

export default Post;
