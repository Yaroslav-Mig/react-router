import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { PostType } from './Blog';

const PostPage = (): JSX.Element => {
  const { id } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState<PostType | null>(null);

	const goBack = () => navigate(-1);
	const goHome = () => navigate('/', {replace: true})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
		<>
			<button onClick={goBack}>Go back</button>
			<button onClick={goHome}>Go home</button>
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
