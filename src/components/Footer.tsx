import { Phone, Send, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container space-y-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold text-gradient">Dawn Knight</p>
            <p className="mt-2 text-sm text-muted-foreground">Премиальные LED-лампы для уверенного света и безопасного вождения.</p>
          </div>
          <div>
            <p className="mb-2 font-semibold">Контакты</p>
            <p className="text-sm text-muted-foreground">+7 (900) 123-45-67</p>
            <p className="text-sm text-muted-foreground">hello@dawn-knight.ru</p>
            <p className="text-sm text-muted-foreground">Казань, ул. Светодиодная, 15</p>
          </div>
          <div>
            <p className="mb-2 font-semibold">Мессенджеры</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Send className="h-4 w-4" /> Telegram</p>
              <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> Звонок</p>
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold">Документы</p>
            <p className="text-sm text-muted-foreground">Политика конфиденциальности</p>
            <p className="text-sm text-muted-foreground">Пользовательское соглашение</p>
            <p className="text-sm text-muted-foreground">ООО «Дон Найт», ИНН 1655000000</p>
          </div>
        </div>
        <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">© 2026 Dawn Knight. Все права защищены.</p>
      </div>
    </footer>
  );
};
