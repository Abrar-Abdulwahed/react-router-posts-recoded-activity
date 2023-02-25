import React, { useEffect, useState } from "react";

function Comments({ postId }) {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((resp) => resp.json())
      .then((date) => setcomments(date));
  }, [postId]);
  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-white p-3">Comments</h2>
      {comments.map((comment) => (
        <div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{comment.email}</span>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="/#"
            >
              {comment.name}
            </a>
            <p class="mt-2 text-gray-600">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
