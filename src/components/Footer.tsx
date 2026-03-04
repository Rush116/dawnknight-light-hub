import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacts" className="border-t border-border/70 bg-card/40">
      <div className="container section-space px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Dawn Knight</h3>
            <p className="text-sm text-muted-foreground">Премиальные LED-лампы для безопасного и уверенного вождения.</p>
            <p className="text-sm text-muted-foreground">ИНН 1655000000 · ОГРН 1231600000000</p>
          </div>
          <div className="space-y-2 text-sm">
            <p>Телефон: <a href="tel:+78001234567" className="text-primary">+7 (800) 123-45-67</a></p>
            <p>Email: <a href="mailto:info@dawnknight.ru" className="text-primary">info@dawnknight.ru</a></p>
            <p>Склад: Казань, ул. Техническая, 21</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Мессенджеры</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild><a href="https://t.me" aria-label="Telegram"><Send className="h-4 w-4" /></a></Button>
              <Button variant="outline" size="sm" asChild><a href="https://wa.me" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /></a></Button>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 Dawn Knight · Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
