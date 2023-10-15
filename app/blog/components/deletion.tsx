'use client';

import { deleteBlogPost } from '@/app/_actions/deleteBlogPost';
/* Client button with server action to delete post */

const DeletionPost = ({ postId }: { postId: string }) => {
  const handleClick = async () => {
    await deleteBlogPost(postId);
  };

  return (
    <button
      onClick={handleClick}
      className="w-40 bg-rose-600 text-white rounded-2xl h-10 hover:bg-rose-700"
    >
      Delete Post
    </button>
  );
};

export default DeletionPost;
