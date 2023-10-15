'use server';

import { revalidatePath } from 'next/cache';
import { logger } from '@/logger';

export const createBlogPost = async (post: CreateBlogPost) => {
  logger.info('Server createBlogPost called ');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const createFormPost = async (form: CreateBlogPost) => {
  await createBlogPost(form);

  revalidatePath('/blog');
};
