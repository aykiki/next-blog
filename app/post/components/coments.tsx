import React from 'react';
import { getPostsComments } from '@/app/_actions/getPostsComments';
import Comment from './comment';

const Comments = async ({ id }: { id: string }) => {
  const comments: Array<CommentType> = await getPostsComments(id);

  return (
    <div>
      {comments.map((comment) => (
        <Comment {...comment} />
      ))}
    </div>
  );
};

export default Comments;
