import h7Image from "@/assets/dawn-knight-h7.jpg";
import h1Image from "@/assets/dawn-knight-h1.jpg";
import h11Image from "@/assets/dawn-knight-h11.jpg";
import h4Image from "@/assets/dawn-knight-h4.jpg";
import h3Image from "@/assets/dawn-knight-h3.jpg";
import h9005Image from "@/assets/dawn-knight-9005.jpg";

export type Product = {
  id: number;
  slug: string;
  name: string;
  series: "Premium" | "Ultra" | "Pro" | "Classic";
  socket: string;
  temperatureK: number;
  powerW: number;
  brightnessLm: number;
  voltage: string;
  canBus: boolean;
  warrantyMonths: number;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  isNew?: boolean;
  isHit?: boolean;
  rating: number;
  reviews: number;
  bundle: string;
};

export const products: Product[] = [
  { id: 1, slug: "dawn-knight-h7-premium-6000k", name: "Dawn Knight H7 Premium 6000K", series: "Premium", socket: "H7", temperatureK: 6000, powerW: 35, brightnessLm: 12000, voltage: "9-16V", canBus: true, warrantyMonths: 24, price: 2890, oldPrice: 3490, image: h7Image, inStock: true, isHit: true, rating: 4.9, reviews: 456, bundle: "2 лампы, драйвер, инструкция" },
  { id: 2, slug: "dawn-knight-h1-classic-5000k", name: "Dawn Knight H1 Classic 5000K", series: "Classic", socket: "H1", temperatureK: 5000, powerW: 35, brightnessLm: 9800, voltage: "9-16V", canBus: false, warrantyMonths: 18, price: 2690, image: h1Image, inStock: true, rating: 4.8, reviews: 234, bundle: "2 лампы, инструкция" },
  { id: 3, slug: "dawn-knight-h11-ultra-6000k", name: "Dawn Knight H11 Ultra 6000K", series: "Ultra", socket: "H11", temperatureK: 6000, powerW: 40, brightnessLm: 13500, voltage: "9-18V", canBus: true, warrantyMonths: 24, price: 3190, oldPrice: 3890, image: h11Image, inStock: true, isHit: true, rating: 4.9, reviews: 789, bundle: "2 лампы, драйвер, антифликер" },
  { id: 4, slug: "dawn-knight-h4-pro-dual-beam", name: "Dawn Knight H4 Pro Dual Beam", series: "Pro", socket: "H4", temperatureK: 6000, powerW: 50, brightnessLm: 14500, voltage: "12V", canBus: true, warrantyMonths: 24, price: 4290, oldPrice: 4990, image: h4Image, inStock: true, isNew: true, rating: 4.7, reviews: 123, bundle: "2 лампы, драйвер, крепления" },
  { id: 5, slug: "dawn-knight-h3-fog-6000k", name: "Dawn Knight H3 Fog Light 6000K", series: "Classic", socket: "H3", temperatureK: 6000, powerW: 30, brightnessLm: 8500, voltage: "9-16V", canBus: false, warrantyMonths: 12, price: 2390, image: h3Image, inStock: true, rating: 4.6, reviews: 167, bundle: "2 лампы, инструкция" },
  { id: 6, slug: "dawn-knight-9005-high-beam", name: "Dawn Knight 9005 High Beam", series: "Ultra", socket: "9005", temperatureK: 6000, powerW: 45, brightnessLm: 14000, voltage: "12V", canBus: true, warrantyMonths: 24, price: 3590, oldPrice: 4190, image: h9005Image, inStock: true, isHit: true, rating: 4.8, reviews: 298, bundle: "2 лампы, драйвер" },
  { id: 7, slug: "dawn-knight-h7-warm-4300k", name: "Dawn Knight H7 Warm 4300K", series: "Premium", socket: "H7", temperatureK: 4300, powerW: 35, brightnessLm: 10800, voltage: "9-16V", canBus: true, warrantyMonths: 24, price: 2790, image: h7Image, inStock: true, rating: 4.5, reviews: 145, bundle: "2 лампы, драйвер" },
  { id: 8, slug: "dawn-knight-h11-compact-5000k", name: "Dawn Knight H11 Compact 5000K", series: "Classic", socket: "H11", temperatureK: 5000, powerW: 35, brightnessLm: 9900, voltage: "9-16V", canBus: false, warrantyMonths: 18, price: 2990, image: h11Image, inStock: false, isNew: true, rating: 4.7, reviews: 234, bundle: "2 лампы, инструкция" }
];

export const sockets = ["H1", "H3", "H4", "H7", "H11", "9005"];
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
