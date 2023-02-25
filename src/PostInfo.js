import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function PostInfo() {
  const [post, setpost] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((resp) => resp.json())
      .then((date) => setpost(date));
  }, [postId]);
  return (
    <div className="p-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Title
      </h1>
      {post.title}
      {post.body}
      <div>
        <Comments postId={postId} />
      </div>
    </div>
  );
}

export default PostInfo;
