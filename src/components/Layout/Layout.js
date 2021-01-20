import PropTypes from 'prop-types';

import './Layout.css';

const Layout = ({ children }) => <div className="Layout">{children}</div>;

export default Layout;

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
