import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductPage = () => {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-24">
          <h1 className="text-3xl font-bold">Товар не найден</h1>
          <Button asChild className="mt-4">
            <Link to="/catalog">Вернуться в каталог</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: `${product.socket}, ${product.temperatureK}K, ${product.powerW}W, ${product.brightnessLm} lm`,
    sku: product.slug,
    brand: { "@type": "Brand", name: "Dawn Knight" },
    offers: {
      "@type": "Offer",
      url: `https://dawn-knight.ru/products/${product.slug}`,
      priceCurrency: "RUB",
      price: product.price,
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${product.name} — купить в Dawn Knight`}
        description={`${product.name}: ${product.brightnessLm} lm, ${product.temperatureK}K, ${product.powerW}W, гарантия ${product.warrantyMonths} мес.`}
        image={product.image}
        jsonLd={productLd}
      />
      <Header />
      <main className="container py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded-2xl border border-border/70 object-cover" loading="eager" />
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((thumb) => (
                <img key={thumb} src={product.image} alt={`${product.name} вид ${thumb}`} className="aspect-[4/3] w-full rounded-xl border border-border/60 object-cover opacity-90" loading="lazy" />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>
            <p className="text-sm text-muted-foreground">{product.inStock ? "В наличии" : "Под заказ"} · {product.socket} · {product.temperatureK}K</p>
            <p className="text-3xl font-extrabold">{product.price.toLocaleString("ru-RU")} ₽</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Купить</Button>
              <Button size="lg" variant="outline" asChild><a href="/#lead-form">Консультация</a></Button>
            </div>

            <Card className="border-border/70 bg-card/50">
              <CardContent className="space-y-2 p-4 text-sm">
                <p><b>Доставка:</b> 1–4 дня по РФ</p>
                <p><b>Оплата:</b> картой / СБП / при получении</p>
                <p><b>Гарантия:</b> {product.warrantyMonths} мес.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-border/70 bg-card/50">
            <CardContent className="p-4">
              <h2 className="mb-3 text-xl font-bold">Характеристики</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td className="py-2 text-muted-foreground">Серия</td><td>{product.series}</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Цоколь</td><td>{product.socket}</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Температура</td><td>{product.temperatureK}K</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Яркость</td><td>{product.brightnessLm} lm</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Напряжение</td><td>{product.voltage}</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Мощность</td><td>{product.powerW}W</td></tr>
                  <tr><td className="py-2 text-muted-foreground">Комплектация</td><td>{product.bundle}</td></tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/50">
            <CardContent className="space-y-3 p-4 text-sm">
              <h2 className="text-xl font-bold">Совместимость и подбор</h2>
              <p className="text-muted-foreground">Проверьте цоколь в мануале авто или напишите нам марку, модель и год — подскажем совместимость и оптимальную серию.</p>
              <p className="text-muted-foreground">Для авто с чувствительной электроникой рекомендуем серии с поддержкой CAN-bus.</p>
              <Button asChild variant="outline"><Link to="/#lead-form">Подобрать по автомобилю</Link></Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
