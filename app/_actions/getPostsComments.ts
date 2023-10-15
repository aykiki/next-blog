import { logger } from '@/logger';

export const getPostsComments = async (id: string) => {
  logger.info('Server getPostsComments called ');

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  if (!response) {
    return;
  }

  return response.json();
};
