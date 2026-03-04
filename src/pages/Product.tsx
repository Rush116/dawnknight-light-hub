import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Product = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) ?? products[0];

  useEffect(() => {
    document.title = `${product.name} — купить Dawn Knight`;
    const desc = `${product.name}: ${product.shortTag}. Цена ${product.price} ₽, гарантия ${product.warranty}.`;
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
    setMeta("og:title", `${product.name} — Dawn Knight`, true);
    setMeta("og:description", desc, true);
  }, [product]);

  const productJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.shortTag,
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: product.price,
      availability: product.stock === "out" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
    },
  }), [product]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      <Header />
      <main className="container section-space grid gap-8 px-4 lg:grid-cols-2">
        <Card className="surface-card"><CardContent className="p-4"><img src={product.image} alt={product.name} className="h-[420px] w-full rounded-xl bg-muted/30 object-contain" /></CardContent></Card>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground">{product.shortTag}</p>
          <p className="text-3xl font-extrabold">{product.price.toLocaleString()} ₽</p>
          <p className="text-sm">Наличие: {product.stock === "out" ? "Нет в наличии" : "Есть в наличии"}</p>
          <div className="flex gap-3"><Button>Купить</Button><Button variant="outline" asChild><a href="#">Консультация</a></Button></div>

          <Card className="surface-card"><CardContent className="p-4 text-sm">
            <table className="w-full"><tbody>
              <tr><td>Цоколь</td><td>{product.socket}</td></tr>
              <tr><td>Температура</td><td>{product.temperatureK}K</td></tr>
              <tr><td>Напряжение</td><td>{product.voltage}</td></tr>
              <tr><td>Гарантия</td><td>{product.warranty}</td></tr>
              <tr><td>Комплектация</td><td>2 лампы, инструкция, гарантийный талон</td></tr>
            </tbody></table>
          </CardContent></Card>

          <Card className="surface-card"><CardContent className="space-y-2 p-4 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Совместимость:</strong> проверьте цоколь в руководстве авто или отправьте марку/модель менеджеру.</p>
            <p><strong className="text-foreground">Доставка и оплата:</strong> СДЭК, курьер, карта/СБП.</p>
            <p><strong className="text-foreground">Гарантия:</strong> быстрый обмен при заводском браке.</p>
          </CardContent></Card>

          <Button variant="outline" asChild><Link to="/catalog">← Вернуться в каталог</Link></Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
