import { logger } from '@/logger';

export const getBlogPost = async (id: string) => {
  logger.info('Server getBlogPost called ');

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  if (!response) {
    return;
  }

  return response.json();
};
