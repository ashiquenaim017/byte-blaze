import { Outlet, useLoaderData,useParams } from "react-router-dom";
import Tabs from "../Tabs/Tabs";


const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const { blogId } = useParams();
  console.log(blogId);
  console.log(blogDetails);
  const {
    id,
    title,
    comments_count,
    public_reactions_count,
    published_timestamp,
    reading_time_minutes,
  } = blogDetails || {};

    
  return (
    <div>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
        <div className="w-full mx-auto space-y-8">
          <h1 className="text-5xl font-bold leading-none">{title}</h1>
          <div className="flex justify-between">
            <div className="flex gap-6">
              <span>{reading_time_minutes} mins read</span>
              <span>
                <ul className="list-disc">
                  <li>{new Date(published_timestamp).toLocaleDateString()}</li>
                </ul>
              </span>
            </div>

            <div className="flex gap-6">
              <span>{comments_count} comments</span>
              <span>
                <ul className="list-disc">
                  <li>{public_reactions_count} views</li>
                </ul>
              </span>
            </div>
          </div>

          {/* tab */}
          <Tabs id={id}></Tabs>

          <Outlet></Outlet>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
