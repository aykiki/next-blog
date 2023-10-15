/* Comment for post */
const Comment = ({ name, body, email }: CommentType) => (
  <div className="flex flex-col mb-2 bg-white rounded p-4 w-[800px]">
    <h3 className="font-medium mb-2">{name}</h3>
    <p className="mb-2">{body}</p>
    <span>{email}</span>
  </div>
);

export default Comment;
