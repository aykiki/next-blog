export const getBlogPost = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  if (!response) {
    return;
  }

  return response.json();
};
