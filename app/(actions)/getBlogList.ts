import { logger } from '@/logger';

export const getBlogList = async () => {
  logger.info('Server getBlogList called ');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
