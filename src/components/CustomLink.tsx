import { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import '../index.css';

interface CustomLinkProps {
  to: string;
  children?: ReactNode;
  restProps?: any;
}

const CustomLink: FC<CustomLinkProps> = (props) => {
  const { to, children, ...restProps } = props;

  const match = useMatch(to);

  return (
    <Link to={to} {...restProps} className={match ? 'active-link' : undefined}>
      {children}
    </Link>
  );
};

export default CustomLink;
