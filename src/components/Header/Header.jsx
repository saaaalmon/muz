import { Link, NavLink } from 'react-router-dom'
import { Btn } from '../Btn/Btn'
import s from './Header.module.css'
import logo from '../../assets/pngwing.com (15).png';
import { Btn2 } from '../Btn/Btn2';

export function Header(){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <nav className={s.nav}>
                        <NavLink to="/">О нас</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/user">Пользователи</NavLink>
                    </nav>
                    <img src={logo} className={s.logo}></img>
                    <div className={s.Buttonss}>
                    <Btn2/>
                    <Btn/>
                    </div>
                </div>
            </div>
        </header>
    )
}