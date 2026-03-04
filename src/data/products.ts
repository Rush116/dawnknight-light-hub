import h7Image from "@/assets/dawn-knight-h7.jpg";
import h1Image from "@/assets/dawn-knight-h1.jpg";
import h11Image from "@/assets/dawn-knight-h11.jpg";
import h4Image from "@/assets/dawn-knight-h4.jpg";
import h3Image from "@/assets/dawn-knight-h3.jpg";
import h9005Image from "@/assets/dawn-knight-9005.jpg";

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortTag: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  socket: string;
  powerW: number;
  brightnessLm: number;
  temperatureK: number;
  voltage: string;
  warranty: string;
  stock: "in_stock" | "low" | "out";
  canbus: boolean;
  shipping: string;
  isNew?: boolean;
  isHit?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "h7-premium-6000k",
    name: "Dawn Knight H7 Premium 6000K",
    shortTag: "Без ошибок CAN-bus",
    price: 2890,
    oldPrice: 3490,
    rating: 4.9,
    reviews: 456,
    image: h7Image,
    socket: "H7",
    powerW: 35,
    brightnessLm: 12000,
    temperatureK: 6000,
    voltage: "12V",
    warranty: "24 месяца",
    stock: "in_stock",
    canbus: true,
    shipping: "Доставка за 1-2 дня",
    isNew: true,
    isHit: true,
  },
  {
    id: 2,
    slug: "h1-classic-5000k",
    name: "Dawn Knight H1 Classic 5000K",
    shortTag: "Стабильный свет без перегрева",
    price: 2690,
    rating: 4.8,
    reviews: 234,
    image: h1Image,
    socket: "H1",
    powerW: 35,
    brightnessLm: 9800,
    temperatureK: 5000,
    voltage: "12V",
    warranty: "18 месяцев",
    stock: "in_stock",
    canbus: true,
    shipping: "Доставка за 1-3 дня",
  },
  {
    id: 3,
    slug: "h11-ultra-6000k",
    name: "Dawn Knight H11 Ultra 6000K",
    shortTag: "Мощный световой пучок",
    price: 3190,
    oldPrice: 3890,
    rating: 4.9,
    reviews: 789,
    image: h11Image,
    socket: "H11",
    powerW: 40,
    brightnessLm: 14000,
    temperatureK: 6000,
    voltage: "12-24V",
    warranty: "24 месяца",
    stock: "low",
    canbus: true,
    shipping: "Доставка за 1 день",
    isHit: true,
  },
  {
    id: 4,
    slug: "h4-hi-lo-pro",
    name: "Dawn Knight H4 Hi/Lo Pro",
    shortTag: "Ближний + дальний в одном комплекте",
    price: 4290,
    oldPrice: 4990,
    rating: 4.7,
    reviews: 123,
    image: h4Image,
    socket: "H4",
    powerW: 50,
    brightnessLm: 16000,
    temperatureK: 6000,
    voltage: "12V",
    warranty: "24 месяца",
    stock: "in_stock",
    canbus: false,
    shipping: "Доставка за 2-3 дня",
    isHit: true,
  },
  {
    id: 5,
    slug: "h3-fog-light",
    name: "Dawn Knight H3 Fog Light",
    shortTag: "Чёткая граница света в тумане",
    price: 2390,
    rating: 4.6,
    reviews: 167,
    image: h3Image,
    socket: "H3",
    powerW: 30,
    brightnessLm: 9200,
    temperatureK: 6000,
    voltage: "12V",
    warranty: "18 месяцев",
    stock: "in_stock",
    canbus: false,
    shipping: "Доставка за 2 дня",
  },
  {
    id: 6,
    slug: "9005-high-beam",
    name: "Dawn Knight 9005 High Beam",
    shortTag: "Дальний свет с высокой фокусировкой",
    price: 3590,
    oldPrice: 4190,
    rating: 4.8,
    reviews: 298,
    image: h9005Image,
    socket: "9005",
    powerW: 45,
    brightnessLm: 15000,
    temperatureK: 6500,
    voltage: "12-24V",
    warranty: "24 месяца",
    stock: "out",
    canbus: true,
    shipping: "Ожидается поставка",
    isNew: true,
  },
];

export const socketOptions = ["H1", "H3", "H4", "H7", "H11", "9005"];
export const temperatureOptions = [4300, 5000, 6000, 6500];
