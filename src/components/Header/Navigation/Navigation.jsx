import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';

export const Navigation = () => {

  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  )
}