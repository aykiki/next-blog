type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type CreateBlogPost = Omit<BlogPost, 'userId' | 'id'>;

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
