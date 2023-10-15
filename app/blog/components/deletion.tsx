'use client';

import { deleteBlogPost } from '@/app/(actions)/deleteBlogPost';

const DeletionPost = ({ postId }: { postId: string }) => {
  const handleClick = async () => {
    await deleteBlogPost(postId);
  };

  return <button onClick={handleClick}>Delete Post</button>;
};

export default DeletionPost;
