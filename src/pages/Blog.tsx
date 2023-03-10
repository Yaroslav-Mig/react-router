import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage = (): JSX.Element => {
  const [posts, setPosts] = useState([] as Array<PostType>);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const mappedPosts = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    );
  });

  return (
    <div>
      <h2>Our news</h2>
      <Link to={'/posts/new'}>Add new post</Link>
      <ul>{mappedPosts}</ul>
    </div>
  );
};

export default BlogPage;
