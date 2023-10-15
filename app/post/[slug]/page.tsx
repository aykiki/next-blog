import React from 'react';
import { getBlogPost } from '@/app/_actions/getBlogPost';
import Comments from '../components/coments';
import { logger } from '@/logger';

const Post = async ({ params: { slug } }: { params: { slug: string } }) => {
  logger.info('Post page called ');

  const post: BlogPost = await getBlogPost(slug);

  return (
    <>
      <div className="flex flex-col w-[800px] mb-10 text-gray-600 p-4">
        <h1 className="text-4xl mb-3 font-semibold">{post.title}</h1>
        <p className="text-2xl">{post.body}</p>
      </div>
      <Comments id={slug} />
    </>
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
