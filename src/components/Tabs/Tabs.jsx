import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const Tabs = ({id}) => {

    const [tab,setTab]=useState(0);
  return (
    <div className="flex justify-start ml-4">
      <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
        <Link
          onClick={()=>setTab(0)}
          to={`/blog/${id}`}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===0?"border-2 border-b-0" : "border-b-2"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Content</span>
        </Link>
        <Link
        onClick={()=>setTab(1)}
         to={'author'}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===1?"border-2 border-b-0" : "border-b-2"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
      </div>
    </div>
  );
};
Tabs.propTypes ={
  id: PropTypes.number
}
export default Tabs;
