import React from 'react';
import s from './tovar.module.css';
import tovarkart from '../../assets/tovar.png';
import { Link } from 'react-router-dom';

export function Tovar({ title, price, image, id, quantity }) {
    return (
        <div className={s.Tovars}>
            <img src={image} className={s.imagecart}></img>
            <p className={s.zagalov}>{title}</p>
            <div className={s.nizh}>
            <h3 className={s.tsena}>{price}</h3>
            <p className={s.quantity}>Кол-во:{quantity}</p>
            </div>
            <button className={s.button}><Link to={`/tovar/${id}`} className='Textik'>
                    Подробнее
                </Link></button>
                
            
        </div>
    );
}