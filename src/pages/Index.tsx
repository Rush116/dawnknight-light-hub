import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { products, sockets } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-led-bulb.jpg";

const faqItems = [
  { q: "Как понять, какой цоколь подходит?", a: "Проверьте маркировку текущей лампы или отправьте нам марку, модель и год авто — подберём за 5 минут." },
  { q: "Будут ли ошибки на приборной панели?", a: "Серии Premium/Ultra/Pro поддерживают CAN-bus и в большинстве авто работают без ошибок." },
  { q: "Какая гарантия на лампы Dawn Knight?", a: "От 12 до 24 месяцев, в зависимости от серии." },
  { q: "Сколько длится доставка?", a: "Отправляем в день заказа. В среднем доставка по РФ занимает 1–4 дня." },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dawn Knight",
  url: "https://dawn-knight.ru",
  telephone: "+7-900-123-45-67",
  sameAs: ["https://t.me/dawnknight", "https://wa.me/79001234567"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const Index = () => {
  const [sent, setSent] = useState(false);
  const [unknownSocket, setUnknownSocket] = useState(false);
  const hits = useMemo(() => products.filter((product) => product.isHit).slice(0, 4), []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Dawn Knight — Премиум LED-лампы для авто"
        description="Премиальные LED-лампы Dawn Knight: высокая яркость, CAN-bus, гарантия до 24 месяцев и быстрый подбор под ваш автомобиль."
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-subtle">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(72,137,255,0.25),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(255,146,51,0.15),transparent_38%)]" />
          <div className="container relative grid gap-8 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary/10 text-primary">Премиум LED-лампы для автомобилей</Badge>
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Dawn Knight: больше света, больше уверенности на дороге</h1>
              <p className="max-w-xl text-lg text-muted-foreground">До 300% ярче штатного света, аккуратная СТГ, стабильная работа и официальная гарантия до 24 месяцев.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg"><Link to="/catalog">Подобрать лампы</Link></Button>
                <Button asChild size="lg" variant="outline"><a href="#lead-form">Консультация</a></Button>
              </div>
              <p className="text-sm text-muted-foreground">50 000+ клиентов · 4.9/5 средняя оценка</p>
            </div>
            <img src={heroImage} alt="Премиальная LED лампа Dawn Knight" loading="eager" className="aspect-[4/3] w-full rounded-2xl border border-border/70 object-cover shadow-card" />
          </div>
        </section>

        <section id="advantages" className="container py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Гарантия 12–24 месяца", "Интеллектуальное охлаждение", "CAN-bus без ошибок", "Доставка 1–4 дня", "Подбор и помощь в установке"].map((item) => (
              <Card key={item} className="border-border/70 bg-card/60">
                <CardContent className="p-6 text-sm font-medium">{item}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold">Подбор по цоколю</h2>
          <div className="flex flex-wrap gap-3">
            {sockets.map((socket) => (
              <Button asChild key={socket} variant="outline" className="rounded-full border-border/70"><Link to={`/catalog?socket=${socket}`}>{socket}</Link></Button>
            ))}
          </div>
        </section>

        <section id="hits" className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold">Хиты / Рекомендуем</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hits.map((product) => (
              <Link key={product.id} to={`/products/${product.slug}`} className="group rounded-2xl border border-border/70 bg-card/40 p-4 transition-smooth hover:-translate-y-1 hover:border-primary/60">
                <img src={product.image} alt={product.name} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-lg object-cover" />
                <p className="text-xs text-muted-foreground">{product.socket} · {product.temperatureK}K · {product.powerW}W · {product.brightnessLm} lm</p>
                <h3 className="mt-1 font-semibold group-hover:text-primary">{product.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{product.canBus ? "Поддержка CAN-bus" : "Базовая конфигурация"}</p>
                <p className="mt-3 font-bold">{product.price.toLocaleString("ru-RU")} ₽</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="how-to-choose" className="container grid gap-6 pb-16 lg:grid-cols-2">
          <Card className="border-border/70 bg-card/40">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-bold">Как выбрать за 3 шага</h2>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Определите цоколь (или оставьте заявку — подскажем).</li>
                <li>2. Выберите температуру: 4300K / 5000K / 6000K.</li>
                <li>3. Сравните яркость, мощность и поддержку CAN-bus.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/40">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Сравнение серий</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-2 text-muted-foreground">Classic</td><td>Доступная серия для базовой замены</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Premium</td><td>Оптимум цена/яркость + CAN-bus</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Ultra/Pro</td><td>Максимум света и расширенная комплектация</td></tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>

        <section className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold">Отзывы клиентов</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Поставил H11 Ultra — свет мощный и ровный, ночью ехать комфортно.",
              "Подбор через Telegram занял 10 минут, всё подошло с первого раза.",
              "Езжу 8 месяцев, ошибок и мерцаний нет, гарантия реально работает."
            ].map((review) => (
              <Card key={review} className="border-border/70 bg-card/40"><CardContent className="p-6 text-sm text-muted-foreground">“{review}”</CardContent></Card>
            ))}
          </div>
        </section>

        <section id="faq" className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="rounded-xl border border-border/70 bg-card/30 px-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="lead-form" className="container pb-24">
          <Card className="border-primary/40 bg-card/70">
            <CardContent className="space-y-5 p-6">
              <h2 className="text-2xl font-bold">Подобрать лампы под авто</h2>
              {!sent ? (
                <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <Input placeholder="Марка" required aria-label="Марка авто" />
                  <Input placeholder="Модель" required aria-label="Модель авто" />
                  <Input placeholder="Год" required aria-label="Год авто" />
                  <Input disabled={unknownSocket} placeholder="Цоколь (например, H7)" aria-label="Цоколь" />
                  <label className="col-span-full flex items-center gap-2 text-sm text-muted-foreground"><Checkbox checked={unknownSocket} onCheckedChange={(v) => setUnknownSocket(Boolean(v))} /> Не знаю цоколь</label>
                  <Button type="submit" className="md:col-span-2">Отправить заявку</Button>
                </form>
              ) : (
                <p className="rounded-lg border border-primary/50 bg-primary/10 p-4 text-sm">Спасибо! Ответ отправим в Telegram/WhatsApp в течение 15 минут в рабочее время.</p>
              )}
            </CardContent>
          </Card>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/70 bg-background/95 p-3 md:hidden">
        <div className="container grid grid-cols-3 gap-2">
          <Button asChild size="sm"><Link to="/catalog">Подбор</Link></Button>
          <Button size="sm" variant="outline" asChild><a href="https://t.me/dawnknight" aria-label="Написать в Telegram">Написать</a></Button>
          <Button size="sm" variant="outline" asChild><a href="tel:+79001234567" aria-label="Позвонить">Позвонить</a></Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
