import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import PropTypes from 'prop-types';

const BlogDetailsCard = ({cover_image, tags, title,body_html }) => {
  return (
    <div className="border-2 border-gray-200 p-3 overflow-x-hidden">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={cover_image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-3">
          <p className="flex gap-4 text-xl">
            {tags?.map((tag,i) => (
              <span key={i}>#{tag}</span>
            ))}
          </p>
          <h2 className="card-title text-3xl">{title}</h2>
          <div className="text-xl">
          <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogDetailsCard.propTypes={
cover_image:PropTypes.string,
tags:PropTypes.array,
title:PropTypes.string,
body_html:PropTypes.string
}
export default BlogDetailsCard;
