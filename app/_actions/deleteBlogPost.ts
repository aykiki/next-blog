'use server';

import { logger } from '@/logger';

export const deleteBlogPost = async (id: string) => {
  logger.info('Server deleteBlogPost called ');

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
};
