import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Phone,
  MapPin,
  Mail
} from "lucide-react";
import dawnKnightLogo from "@/assets/dawn-knight-logo.jpg";

export const Header = () => {
  const [cartItems, setCartItems] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>info@dawnknight.ru</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>Склад: Казань</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Бесплатная доставка от 3000₽</span>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Гарантия 2 года
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={dawnKnightLogo} 
              alt="Dawn Knight" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">
                Dawn Knight
              </h1>
              <p className="text-xs text-muted-foreground">
                LED освещение для авто
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Поиск по каталогу..."
                className="pl-10 border-primary/20 focus:border-primary transition-smooth"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="hidden md:flex hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-secondary text-secondary-foreground"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Поиск..." className="pl-10" />
                  </div>
                  
                  <nav className="flex flex-col gap-3">
                    <Link to="/">
                      <Button variant="ghost" className="justify-start w-full">
                        Каталог
                      </Button>
                    </Link>
                    <Link to="/instructions">
                      <Button variant="ghost" className="justify-start w-full">
                        Инструкции
                      </Button>
                    </Link>
                    <Link to="/forum">
                      <Button variant="ghost" className="justify-start w-full">
                        Форум
                      </Button>
                    </Link>
                    <Link to="/delivery">
                      <Button variant="ghost" className="justify-start w-full">
                        Доставка
                      </Button>
                    </Link>
                    <Link to="/warranty">
                      <Button variant="ghost" className="justify-start w-full">
                        Гарантия
                      </Button>
                    </Link>
                  </nav>
                  
                  <div className="border-t pt-4">
                    <Button className="w-full mb-2">
                      Войти
                    </Button>
                    <Button variant="outline" className="w-full">
                      Регистрация
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center gap-8 py-3">
            <Link to="/">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                Все товары
              </Button>
            </Link>
            <Link to="/catalog">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                H1/H3/H4/H7/H11
              </Button>
            </Link>
            <Link to="/instructions">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                Инструкции
              </Button>
            </Link>
            <Link to="/forum">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                Форум
              </Button>
            </Link>
            <Link to="/delivery">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                Доставка
              </Button>
            </Link>
            <Link to="/warranty">
              <Button variant="ghost" className="hover:text-primary transition-smooth">
                Гарантия
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};