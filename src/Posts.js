import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((date) => setposts(date));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700 border-slate-500"
        >
          <div class="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {post.title.length > 20
                ? post.title.substring(0, 20) + "..."
                : post.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {post.body.length > 120
                ? post.body.substring(0, 120) + "..."
                : post.body}
            </p>
          </div>
          <div className="border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
            <Link
              to={`/${post.id}`}
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-cyan-500/10 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
