import 'normalize.css';
import "the-new-css-reset/css/reset.css"

import './base-layout.scss';

const BaseLayout = ({ children }) => (
  <div className='wrapper'>
    {children}
  </div>
)

export default BaseLayout