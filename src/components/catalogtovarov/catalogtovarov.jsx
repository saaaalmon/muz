import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Гармошка',
        price: 5500,
        description: 'Ручные гармоники — музыкальные инструменты, составляющие основу семейства гармоник. Отличительными конструктивными особенностями подобных инструментов является наличие двух полукорпусов с клавиатурами, между которыми находится мех. Небольшие по размеру и массе гармони во время игры удерживают в руках на весу, гармоники побольше устанавливают на колени в положении сидя или подвешивают за плечевые ремни в положении стоя. Играют двумя руками, двигая левый или оба полукорпуса для разжатия и сжатия меха, что при одновременном нажатии клавиш приводит к поступлению воздуха на язычки гармоники и к их звучанию.',
        image: 'https://c.wallhere.com/photos/d2/69/globe_special_accordion_music_musical_instrument_macro_dance-928885.jpg!d',
        quantity: 0,
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


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Гармошка">Гармошка</option>
                <option value="Гитара">Гитара</option>
                <option value="Саксафоны">Саксафоны</option>
                <option value="Арфа">Арфа</option>
                <option value="Акулели">Акулели</option>

            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}