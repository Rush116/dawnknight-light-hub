import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, socketOptions } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneCall, Send, Shield, Gauge, Truck, Wrench, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-led-bulb.jpg";

const faqItems = [
  { q: "Подойдут ли лампы к моему авто?", a: "Да. Напишите марку, модель и год — подберём точный цоколь и серию." },
  { q: "Будут ли ошибки на панели?", a: "Для большинства авто рекомендуем серии с CAN-bus. В карточке это указано отдельно." },
  { q: "Какая гарантия?", a: "На премиальные линейки — до 24 месяцев с заменой при гарантийном случае." },
  { q: "Сколько занимает доставка?", a: "По крупным городам 1–2 дня, по РФ обычно 2–5 дней." },
];

const Index = () => {
  const [unknownSocket, setUnknownSocket] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Dawn Knight — премиум LED лампы для авто";
    const desc = "Премиальные LED-лампы Dawn Knight: высокая яркость, надёжное охлаждение, гарантия и подбор под ваш автомобиль.";
    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop ? `meta[property='${name}']` : `meta[name='${name}']`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (prop) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", desc);
    setMeta("og:title", "Dawn Knight — премиум LED лампы", true);
    setMeta("og:description", desc, true);
  }, []);

  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }), []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Dawn Knight",url:"https://dawnknight.ru",telephone:"+78001234567"})}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <Header />
      <main>
        <section className="container section-space grid items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="secondary">Премиальные LED-лампы для авто</Badge>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Яркий и точный свет <span className="text-gradient">Dawn Knight</span> без компромиссов</h1>
            <p className="max-w-xl text-lg text-muted-foreground">До 300% больше видимости, интеллектуальное охлаждение и гарантия до 24 месяцев. Подберём комплект под ваш автомобиль за 5 минут.</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild><Link to="/catalog">Подобрать лампы</Link></Button>
              <Button size="lg" variant="outline" asChild><a href="#lead-form">Консультация</a></Button>
            </div>
          </div>
          <div className="surface-card p-5">
            <img src={heroImage} alt="Премиальные LED лампы Dawn Knight" className="h-full w-full rounded-xl object-cover" loading="eager" />
          </div>
        </section>

        <section className="container section-space px-4">
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [Shield, "Гарантия 24 мес"],
              [Gauge, "Стабильная яркость"],
              [Cpu, "CAN-bus серии"],
              [Truck, "Быстрая доставка"],
              [Wrench, "Подбор и консультация"],
            ].map(([Icon, text], idx) => (
              <Card key={idx} className="surface-card"><CardContent className="flex items-center gap-3 p-4 text-sm"><Icon className="h-4 w-4 text-primary" />{text}</CardContent></Card>
            ))}
          </div>
        </section>

        <section className="container section-space px-4">
          <h2 className="mb-4 text-2xl font-bold">Подбор по цоколю</h2>
          <div className="flex flex-wrap gap-2">
            {socketOptions.map((socket) => (
              <Button key={socket} variant="outline" asChild><Link to={`/catalog?socket=${socket}`}>{socket}</Link></Button>
            ))}
          </div>
        </section>

        <section id="featured" className="container section-space px-4">
          <h2 className="mb-8 text-2xl font-bold">Хиты и рекомендуем</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <Card key={p.id} className="surface-card overflow-hidden">
                <CardContent className="space-y-3 p-4">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-52 w-full rounded-lg object-contain bg-muted/30" />
                  <p className="text-sm text-primary">{p.shortTag}</p>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-xl font-bold">{p.price.toLocaleString()} ₽</p>
                  <Button className="w-full" asChild><Link to={`/product/${p.slug}`}>Подробнее</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container section-space grid gap-8 px-4 lg:grid-cols-2">
          <Card className="surface-card"><CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-bold">Как выбрать за 3 шага</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li>1. Определите цоколь (или укажите авто — мы подскажем).</li>
              <li>2. Выберите серию по бюджету и яркости.</li>
              <li>3. Проверьте CAN-bus и оформите заказ в 1 клик.</li>
            </ol>
          </CardContent></Card>
          <Card className="surface-card"><CardContent className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Сравнение серий</h3>
            <div className="overflow-x-auto text-sm">
              <table className="w-full min-w-[320px]"><thead><tr className="text-left text-muted-foreground"><th>Серия</th><th>Яркость</th><th>CAN-bus</th></tr></thead><tbody>
                <tr><td>Classic</td><td>9 000–10 000 lm</td><td>Опция</td></tr>
                <tr><td>Premium</td><td>12 000+ lm</td><td>Да</td></tr>
                <tr><td>Ultra Pro</td><td>14 000–16 000 lm</td><td>Да</td></tr>
              </tbody></table>
            </div>
          </CardContent></Card>
        </section>

        <section className="container section-space px-4">
          <h2 className="mb-6 text-2xl font-bold">Отзывы клиентов</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {["Поставил H7 на Tiguan — свет ровный, без ошибок.", "Доставили в Екатеринбург за 2 дня, качество топ.", "Подбор по VIN сэкономил время, всё подошло с первого раза."].map((text, i) => (
              <Card key={i} className="surface-card"><CardContent className="p-5 text-sm text-muted-foreground">“{text}”</CardContent></Card>
            ))}
          </div>
        </section>

        <section id="faq" className="container section-space px-4">
          <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="surface-card px-4">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}><AccordionTrigger>{item.q}</AccordionTrigger><AccordionContent>{item.a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="lead-form" className="container section-space px-4">
          <Card className="surface-card"><CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-bold">Форма подбора ламп</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Марка" aria-label="Марка" />
              <Input placeholder="Модель" aria-label="Модель" />
              <Input placeholder="Год" aria-label="Год" />
              <Input placeholder="Цоколь" aria-label="Цоколь" disabled={unknownSocket} />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Checkbox id="unknown" checked={unknownSocket} onCheckedChange={(v) => setUnknownSocket(Boolean(v))} />
              <label htmlFor="unknown">Не знаю цоколь</label>
            </div>
            {sent ? <p className="text-sm text-primary">Заявка отправлена. Ответ придёт в Telegram/WhatsApp в течение 15 минут.</p> : <Button onClick={() => setSent(true)}>Отправить заявку</Button>}
          </CardContent></Card>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <Button asChild size="sm"><a href="#lead-form">Подбор</a></Button>
          <Button asChild size="sm" variant="outline"><a href="https://t.me"><Send className="h-4 w-4" /></a></Button>
          <Button asChild size="sm" variant="outline"><a href="tel:+78001234567"><PhoneCall className="h-4 w-4" /></a></Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
