import { Link, useNavigation } from "react-router-dom";
import img from "../../assets/404.jpg";
import PropTypes from 'prop-types';
import { BeatLoader, RingLoader } from "react-spinners";


const Blog = ({ blog }) => {
  const navigation=useNavigation();
  const { id,title, description, published_timestamp, cover_image } = blog;

  if(navigation.state==="loading")
  {
    return <RingLoader color="pink"></RingLoader>
  }
  return (
    <div className="border-2 border-blue-200 p-3 hover:scale-105 hover:border-pink-600 transition duration-200">
      

      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || img}
        />
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">{new Date (published_timestamp).toLocaleDateString()}</span>
          <p>
           {description}
          </p>
        </div>
      </Link>
    </div>
  );
};
Blog.propTypes={
  blog: PropTypes.object
}
export default Blog;
