import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart, 
  Filter,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  socket: string;
  power: string;
  color: string;
  isNew?: boolean;
  isSale?: boolean;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Dawn Knight H7 6000K",
    price: 2890,
    oldPrice: 3490,
    rating: 4.9,
    reviews: 456,
    image: "/api/placeholder/300/300",
    socket: "H7",
    power: "35W",
    color: "6000K",
    isNew: true,
    isSale: true,
    inStock: true
  },
  {
    id: 2,
    name: "Dawn Knight H1 5000K",
    price: 2690,
    rating: 4.8,
    reviews: 234,
    image: "/api/placeholder/300/300",
    socket: "H1",
    power: "35W",
    color: "5000K",
    inStock: true
  },
  {
    id: 3,
    name: "Dawn Knight H11 6000K",
    price: 3190,
    oldPrice: 3890,
    rating: 4.9,
    reviews: 789,
    image: "/api/placeholder/300/300",
    socket: "H11",
    power: "40W",
    color: "6000K",
    isSale: true,
    inStock: true
  },
  {
    id: 4,
    name: "Dawn Knight H4 Hi/Lo",
    price: 4290,
    rating: 4.7,
    reviews: 123,
    image: "/api/placeholder/300/300",
    socket: "H4",
    power: "50W",
    color: "6000K",
    inStock: false
  }
];

export const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Каталог товаров</h2>
            <p className="text-muted-foreground">
              Премиальные светодиодные лампы для всех типов автомобилей
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Цоколь
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Все цоколи</DropdownMenuItem>
                <DropdownMenuItem>H1</DropdownMenuItem>
                <DropdownMenuItem>H3</DropdownMenuItem>
                <DropdownMenuItem>H4</DropdownMenuItem>
                <DropdownMenuItem>H7</DropdownMenuItem>
                <DropdownMenuItem>H11</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Сортировка
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("popular")}>
                  По популярности
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price_asc")}>
                  По цене: дешевле
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price_desc")}>
                  По цене: дороже
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("rating")}>
                  По рейтингу
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover-lift bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-muted/50 flex items-center justify-center">
                    <div className="text-muted-foreground">
                      LED лампа {product.socket}
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isNew && (
                      <Badge variant="secondary" className="text-xs">
                        NEW
                      </Badge>
                    )}
                    {product.isSale && (
                      <Badge className="text-xs bg-secondary text-secondary-foreground">
                        СКИДКА
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          favorites.includes(product.id) 
                            ? 'fill-current text-red-500' 
                            : ''
                        }`} 
                      />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stock status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <Badge variant="destructive">Нет в наличии</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-smooth">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {product.socket}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.power}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.color}
                      </Badge>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-secondary text-secondary' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      {product.price.toLocaleString()}₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString()}₽
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full gap-2 shadow-button hover:shadow-glow transition-smooth"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {product.inStock ? 'В корзину' : 'Уведомить'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth"
          >
            Показать ещё товары
          </Button>
        </div>
      </div>
    </section>
  );
};