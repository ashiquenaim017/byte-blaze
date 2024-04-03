import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="mt-10 px-16">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={blogs[0].cover_image}
            className="rounded-lg shadow-2xl w-[60%]"
          />
          <div className="w-[40%]">
            <h1 className="text-4xl font-semibold hover:underline">{blogs[0].title}</h1>
            <p className="py-3">{new Date(blogs[0].published_timestamp).toLocaleDateString()}</p>
            <p className="py-6">
              {blogs[0].description}
            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {
        blogs.slice(1,blogs.length).map(blog=><Blog key={blog.id} blog={blog} ></Blog>)
      }
      </div>
    </div>
  );
};

export default Blogs;
