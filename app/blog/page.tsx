import { getBlogList } from '@/app/_actions/getBlogList';
import Post from '@/app/blog/components/post';
import { logger } from '@/logger';

const BlogList = async () => {
  logger.info('BlogList page called ');

  const blogList: Array<BlogPost> = await getBlogList();

  return (
    <div>
      {blogList.map((item) => (
        <Post {...item} key={item.id} />
      ))}
    </div>
  );
};

export default BlogList;
