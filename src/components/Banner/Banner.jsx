import { Link } from "react-router-dom";
import img from "../../assets/wave.svg";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-120px)] space-y-5 text-center relative">
      <h1 className="text-5xl font-bold">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-700 via-pink-500 to-pink-400 text-transparent bg-clip-text animate-gradient bg-300%">
          ByteBlaze
        </span>
      </h1>
      <p>
        ByteBlaze is the bridge between the complex world of technology and{" "}
        <br /> the curious minds eager to understand it
      </p>
      <div className="flex gap-4">
        <Link
          to={'/blogs'}
          className="relative inline-block px-4 py-2 font-medium group z-10"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-600 group-hover:bg-blue-700"></span>
          <span className="relative text-black group-hover:text-white">
            Read Blogs
          </span>
        </Link>
        <Link
          to={'/bookmarks'}
          className="relative inline-block px-4 py-2 font-medium group z-10 "
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-600 group-hover:bg-blue-700"></span>
          <span className="relative text-black group-hover:text-white">
            Bookmarks
          </span>
        </Link>
      </div>
      <img className="absolute bottom-0 w-full" src={img} alt="" />
    </div>
  );
};

export default Banner;
