import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="bg-gradient-dawn rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Подпишитесь на новости Dawn Knight
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Получайте первыми информацию о новых товарах, скидках и технических новинках
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="shrink-0">
              Подписаться
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gradient">Dawn Knight</h4>
            <p className="text-muted-foreground">
              Премиум светодиодные автомобильные лампы с 2020 года. 
              Гарантия качества и долговечности.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@dawnknight.ru</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>г. Казань, ул. Светодиодная, 15</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div className="space-y-4">
            <h4 className="font-semibold">Каталог</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Лампы H1
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Лампы H3
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Лампы H4
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Лампы H7
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Лампы H11
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Все товары
              </Button>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Информация</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Инструкции по установке
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Гарантия и возврат
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Доставка и оплата
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Форум сообщества
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Контакты
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                О компании
              </Button>
            </div>
          </div>

          {/* Support & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Поддержка</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                <MessageCircle className="h-4 w-4" />
                Онлайн-чат
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                <Phone className="h-4 w-4" />
                Заказать звонок
              </Button>
            </div>
            
            <div className="space-y-3">
              <h5 className="text-sm font-semibold">Мы в соцсетях</h5>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="hover:bg-primary/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Payment methods */}
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Принимаем к оплате</h5>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-muted rounded">💳 Visa</span>
                <span className="px-2 py-1 bg-muted rounded">💳 MC</span>
                <span className="px-2 py-1 bg-muted rounded">💳 МИР</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2024 Dawn Knight. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="link" className="h-auto p-0 text-xs text-muted-foreground">
                Политика конфиденциальности
              </Button>
              <Button variant="link" className="h-auto p-0 text-xs text-muted-foreground">
                Пользовательское соглашение
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs">
            <span>🚚 Доставка по всей России</span>
            <span>•</span>
            <span>🔒 Безопасная оплата</span>
            <span>•</span>
            <span>⭐ Гарантия 2 года</span>
          </div>
        </div>
      </div>
    </footer>
  );
};