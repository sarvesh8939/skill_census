export const STRAPI_BASE = "https://fortunate-flower-452260042f.strapiapp.com"; // change to deployed URL later
export const BLOGS_API = `${STRAPI_BASE}/api/blogs?populate=*`;
export const BLOG_API = (id) => `${STRAPI_BASE}/api/blogs/${id}?populate=*`;
