import React, { useEffect, useState } from "react";
import { BLOGS_API, STRAPI_BASE } from "../utils/api";
import "../styles/Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(BLOGS_API)
      .then((res) => res.json())
      .then((json) => {
        // Strapi v4/v5: data may be in json.data
        const items = json.data || [];
        setPosts(items);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(posts);
  return (
    <div className="container mt-5">
      <h2 className="text-center">Our Latest Blogs</h2>
      <div className="row mt-4">
        {posts.map((post) => {
          // const attr = post.attributes || {};
          const imgUrl = post.cover?.formats?.thumbnail?.url;
          // const imageUrl = imgPath
          //   ? `${STRAPI_BASE || "http://localhost:1337"}${imgPath}`
          //   : null;
          return (
            <div key={post.documentId} className="col-md-4 mb-4">
              <div
                className="card h-100 blog-card"
                onClick={() =>
                  window.open(`/blog/${post.documentId}`, "_blank")
                }
              >
                {imgUrl && (
                  <img src={imgUrl} className="card-img-top" alt={post.title} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="text-muted">
                    {new Date(post.date).toDateString()}
                  </p>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
