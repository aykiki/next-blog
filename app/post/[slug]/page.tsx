import React from 'react';
import { getBlogPost } from '@/app/(actions)/getBlogPost';
import { logger } from '@/logger';

const Post = async ({ params: { slug } }: { params: { slug: string } }) => {
  logger.info('Post page called ');

  const post: BlogPost = await getBlogPost(slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Array<BlogPost> = await response.json();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default Post;
