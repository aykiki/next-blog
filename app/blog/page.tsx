import {getBlogList} from "@/app/(lib)/actions/getBlogList";
import Post from "@/app/blog/components/post";

const BlogList = async () => {
    const blogList: Array<BlogPost> = await getBlogList();

    return (
        <div>
            {blogList.map((item) => (<Post {...item} key={item.id} />))}
        </div>
    );
};

export default BlogList;

