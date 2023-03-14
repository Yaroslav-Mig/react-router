import { Link, Outlet } from 'react-router-dom';

const AboutPage = (): JSX.Element => {
  return (
    <div>
      <h2>About us</h2>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li>
          <Link to='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link to='/about/team'>Team</Link>
        </li>
			</ul>

			<Outlet />

    </div>
  );
};

export default AboutPage;
