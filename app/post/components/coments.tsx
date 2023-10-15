import { getPostsComments } from '@/app/_actions/getPostsComments';
import Comment from './comment';

/* List of all comment for post */

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
