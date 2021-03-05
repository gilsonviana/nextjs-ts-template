import { IMenuCategory, IProduct } from "./interface";

export const MENU_CATEGORIES_MOCK: IMenuCategory[] = [{
  imageUrl: '/assets/icons/png/smartphone-call-1.png',
  name: 'Smartphones',
  slug: 'smartphones',
  id: 77
}, {
  imageUrl: '/assets/icons/png/computer-1.png',
  name: 'Informática',
  slug: 'informatica',
  id: 2
}, {
  imageUrl: '/assets/icons/png/television-1.png',
  name: 'TV',
  slug: 'tv',
  id: 2852
}, {
  imageUrl: '/assets/icons/png/headphone-1.png',
  name: 'Eletrônicos',
  slug: 'eletronicos',
  id: 1
}, {
  imageUrl: '/assets/icons/png/blender-1.png',
  name: 'Eletrodomésticos',
  slug: 'eletrodomesticos',
  id: 116
}, {
  imageUrl: '/assets/icons/png/shirt-1.png',
  name: 'Moda',
  slug: 'moda',
  id: 2468
}, {
  imageUrl: '/assets/icons/png/couch-1.png',
  name: 'Móveis',
  slug: 'moveis',
  id: 2708
}, {
  imageUrl: '/assets/icons/png/table-lamp-1.png',
  name: 'Decoração',
  slug: 'decoracao',
  id: 2701
}, {
  imageUrl: '/assets/icons/png/soccer-1.png',
  name: 'Esporte',
  slug: 'esporte',
  id: 1328
}, {
  imageUrl: '/assets/icons/png/console-1.png',
  name: 'Games',
  slug: 'games',
  id: 2376
}]

export const HOME_PRODUCT_LIST: IProduct[] = [{
  id: 1,
  thumbnail: 'https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$',
  name: 'Product 1',
  price: 100,
  link: ''
}, {
  id: 2,
  thumbnail: 'https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$',
  name: 'Product 2',
  price: 102.99,
  link: ''
}, {
  id: 3,
  thumbnail: 'https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$',
  name: 'Product 3',
  price: 30,
  link: ''
}, {
  id: 4,
  thumbnail: 'https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$',
  name: 'Product 5',
  price: 99,
  link: ''
}, {
  id: 5,
  thumbnail: 'https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$',
  name: 'Product 6',
  price: 1000.12,
  link: ''
}]