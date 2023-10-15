'use server';

import { revalidatePath } from 'next/cache';

export const createBlogPost = async (post: CreateBlogPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  // eslint-disable-next-line no-console
  console.log(response);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const createFormPost = async (form: CreateBlogPost) => {
  await createBlogPost(form);

  revalidatePath('/blog');
};
