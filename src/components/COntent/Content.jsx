import { useLoaderData } from "react-router-dom";
import BlogDetailsCard from "../BlogDetailsCard/BlogDetailsCard";

const Content = () => {
  const blogDetails = useLoaderData();
  console.log(blogDetails)
  const {
    title,
    cover_image,
    tags,
    body_html,
  } = blogDetails || {};
  return (
    <div>
      <BlogDetailsCard
       
        cover_image={cover_image}
        tags={tags}
        title={title}
        body_html={body_html}
      ></BlogDetailsCard>
    </div>
  );
};

export default Content;
