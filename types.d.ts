type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type CreateBlogPost = Omit<BlogPost, 'userId' | 'id'>;
