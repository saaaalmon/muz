import { Btn3 } from '../Btn/Btn3'
import s from './Banner.module.css'
export function Banner(){
    return(
        <header className={s.banner}>
                <div className={s.banner__inner}>
                </div>
                <div className={s.bbtn}>
                    <Btn3/>
                </div>
        </header>
    )
}