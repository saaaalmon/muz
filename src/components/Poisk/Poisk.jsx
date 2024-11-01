import s from './Poisk.module.css'


export function PoiskTovarov({ handleChange }) {
    return (
        <input type="text" className={s.Poisk} onChange={handleChange} placeholder='Поиск' />
    );
}