import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogFilter from '../components/BlogFilter';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage = (): JSX.Element => {
  const [posts, setPosts] = useState([] as Array<PostType>);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const postQuery: string = searchParams.get('post') || '';
  const postLatest: boolean = searchParams.has('latest');
  const countsPosts: number = postLatest ? 20 : 0;
	let filterPosts = posts;

  if (postLatest) {
    const start = filterPosts.length - countsPosts;
    filterPosts = filterPosts.slice(start);
  }
  if (postQuery) {
    filterPosts = filterPosts.filter((post) => post.title.includes(postQuery));
	}

  const mappedPosts: JSX.Element[] = filterPosts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    );
  });

  return (
    <div>
      <h2>Our news</h2>
      <BlogFilter postQuery={postQuery} postLatest={postLatest} setSearchParams={setSearchParams} />
      <Link to={'/posts/new'}>Add new post</Link>
      <ul>{mappedPosts}</ul>
    </div>
  );
};

export default BlogPage;
