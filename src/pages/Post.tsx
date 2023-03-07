import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PostType } from './Blog';

const PostPage = (): JSX.Element => {
  const { id } = useParams();

  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
    <>
      {post && (
        <article>
          <h3>{post?.title}</h3>
					<p>{post?.body}</p>

          <Link to={`/posts/${id}/edit`}> Edit post</Link>
        </article>
      )}
    </>
  );
};

export default PostPage;
