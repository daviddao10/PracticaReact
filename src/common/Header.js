import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

const Header =({Link1, Link2})=>{

    return (
        <header>
            <nav>
                <div>
                    <Link to="/adverts/newAdverts">New Adverts</Link>
                </div>
                <div>
                    <NavLink to="/">undifine</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header