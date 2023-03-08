import { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import '../index.css';

interface CustomLinkProps<T> {
  to: string;
  children?: ReactNode;
  restProps?: T;
}

const CustomLink: FC<CustomLinkProps<Object>> = (props) => {
  const { to, children, ...restProps } = props;

  const match = useMatch(to);

  return (
    <Link to={to} {...restProps} className={match ? 'active-link' : undefined}>
      {children}
    </Link>
  );
};

export default CustomLink;
