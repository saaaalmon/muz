import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Гармошка',
        price: 5500,
        description: 'Ручные гармоники — музыкальные инструменты, составляющие основу семейства гармоник. Отличительными конструктивными особенностями подобных инструментов является наличие двух полукорпусов с клавиатурами, между которыми находится мех. Небольшие по размеру и массе гармони во время игры удерживают в руках на весу, гармоники побольше устанавливают на колени в положении сидя или подвешивают за плечевые ремни в положении стоя. Играют двумя руками, двигая левый или оба полукорпуса для разжатия и сжатия меха, что при одновременном нажатии клавиш приводит к поступлению воздуха на язычки гармоники и к их звучанию.',
        image: 'https://c.wallhere.com/photos/d2/69/globe_special_accordion_music_musical_instrument_macro_dance-928885.jpg!d',
        quantity: 2,
        category: 'Гармошки'
    },

    {
        id: 2,
        title: 'Гитара',
        price: 8200,
        description: 'Гита́ра — струнный щипковый музыкальный инструмент. Применяется в качестве аккомпанирующего или сольного инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз. Изобретённая в XX веке электрическая гитара произвела значительные изменения в музыке и тем самым оказала сильное влияние на массовую культуру. Также есть классическая гитара, гитара фламенко, испанская гитара и некоторые другие виды.',
        image: 'https://avatars.mds.yandex.net/i?id=9c8ab5bb420c1f7ee18b94a3600db070_l-11801521-images-thumbs&n=13',
        quantity: 7,
        category: 'Гитары'
    },
    {
        id: 3,
        title: 'Саксафоны',
        price: 10300,
        description: 'Саксофо́н (фр. saxophone) — духовой музыкальный инструмент с одинарной тростью. Сконструирован бельгийским мастером Адольфом Саксом в первой половине 1840-х годов. Обладает своеобразным выразительным звучанием и большой технической подвижностью[2]. С середины XIX века используется в духовом оркестре, реже — в симфоническом. Один из основных инструментов в джазе[2] и родственных ему жанрах, а также в эстрадной музыке.',
        image: 'https://stihi.ru/pics/2018/11/01/4957.jpg',
        quantity: 1,
        category: 'Саксафоны'
    },
    {
        id: 4,
        title: 'Арфа',
        price: 20400,
        description: 'А́рфа — щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между которыми натянуто множество струн. Один из древнейших инструментов, символ Ирландии. В XVIII столетии была изобретена педальная арфа, ставшая стандартом в классической музыке.',
        image: 'http://previewcf.turbosquid.com/Preview/2014/05/26__13_45_45/Harp_Musical_Instrument_05.jpg42f7d39d-85c7-4177-ba4b-09f47a93c86eLarger.jpg',
        quantity: 1,
        category: 'Арфы'
    },

    {
        id: 5,
        title: 'Акулеле',
        price: 3500,
        description: 'Укуле́ле — четырёхструнная разновидность гитары, используемая для аккордового сопровождения песен и игры соло[1].',
        image: 'https://cache3.youla.io/files/images/780_780/5d/6e/5d6eb16e93800009db55a825.jpg',
        quantity: 2,
        category: 'Акулели'
    },
    

];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));

    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                product={product}
            />
        </div>
    );
}