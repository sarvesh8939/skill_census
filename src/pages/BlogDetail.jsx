import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOG_API, STRAPI_BASE } from "../utils/api";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(BLOG_API(id))
      .then((r) => r.json())
      .then((json) => setPost(json.data || null))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div className="container py-5">Loading...</div>;

  const imgPath = post.cover?.formats?.small?.url;
  const imageUrl = imgPath;
  // ? `${STRAPI_BASE || "http://localhost:1337"}${imgPath}`
  // : null;

  return (
    <div className="container py-5">
      <h1>{post.title}</h1>
      <p className="text-muted">{new Date(post.date).toDateString()}</p>
      {imageUrl && (
        <div className="text-center">
          <img
            src={imageUrl}
            alt={post.title}
            className="img-fluid mb-4 rounded shadow-sm"
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
