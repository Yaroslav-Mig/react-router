import React from 'react';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  return <h3> Edit post #{id} </h3>;
};

export default EditPost;
