import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { products, sockets } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [socket, setSocket] = useState(searchParams.get("socket") ?? "all");
  const [temperature, setTemperature] = useState("all");
  const [stockOnly, setStockOnly] = useState(false);
  const [powerMin, setPowerMin] = useState("all");
  const [brightnessMin, setBrightnessMin] = useState("all");
  const [priceMax, setPriceMax] = useState("all");
  const [sort, setSort] = useState("popular");
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let result = products.filter((p) => (socket === "all" ? true : p.socket === socket));
    result = result.filter((p) => (temperature === "all" ? true : String(p.temperatureK) === temperature));
    result = result.filter((p) => (powerMin === "all" ? true : p.powerW >= Number(powerMin)));
    result = result.filter((p) => (brightnessMin === "all" ? true : p.brightnessLm >= Number(brightnessMin)));
    result = result.filter((p) => (priceMax === "all" ? true : p.price <= Number(priceMax)));
    result = result.filter((p) => (stockOnly ? p.inStock : true));

    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "new") result = [...result].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "popular") result = [...result].sort((a, b) => b.reviews * b.rating - a.reviews * a.rating);

    return result;
  }, [socket, temperature, powerMin, brightnessMin, priceMax, stockOnly, sort]);

  const toggleCompare = (slug: string) => {
    setCompare((prev) => (prev.includes(slug) ? prev.filter((p) => p !== slug) : prev.length < 3 ? [...prev, slug] : prev));
  };

  const compareProducts = products.filter((p) => compare.includes(p.slug));

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Каталог LED-ламп Dawn Knight"
        description="Каталог премиальных ламп Dawn Knight: фильтры по цоколю, температуре, мощности, яркости, наличию и цене."
      />
      <Header />
      <main className="container py-10">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Каталог ламп</h1>
        <div className="mb-8 grid gap-3 rounded-2xl border border-border/70 bg-card/50 p-4 md:grid-cols-7">
          <select value={socket} onChange={(e) => setSocket(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Фильтр цоколя">
            <option value="all">Все цоколи</option>
            {sockets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select value={temperature} onChange={(e) => setTemperature(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Фильтр температуры">
            <option value="all">Любая температура</option>
            {[4300, 5000, 6000].map((item) => (
              <option key={item} value={item}>{item}K</option>
            ))}
          </select>

          <select value={powerMin} onChange={(e) => setPowerMin(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Фильтр мощности">
            <option value="all">Мощность: любая</option>
            <option value="35">от 35W</option>
            <option value="40">от 40W</option>
            <option value="45">от 45W</option>
          </select>

          <select value={brightnessMin} onChange={(e) => setBrightnessMin(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Фильтр яркости">
            <option value="all">Яркость: любая</option>
            <option value="9000">от 9000 lm</option>
            <option value="11000">от 11000 lm</option>
            <option value="13000">от 13000 lm</option>
          </select>

          <select value={priceMax} onChange={(e) => setPriceMax(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Фильтр цены">
            <option value="all">Цена: любая</option>
            <option value="3000">до 3000 ₽</option>
            <option value="3500">до 3500 ₽</option>
            <option value="4500">до 4500 ₽</option>
          </select>

          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-border bg-background p-2" aria-label="Сортировка">
            <option value="popular">Популярное</option>
            <option value="price-asc">Цена ↑</option>
            <option value="price-desc">Цена ↓</option>
            <option value="new">Новинки</option>
          </select>

          <label className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm">
            <Checkbox checked={stockOnly} onCheckedChange={(v) => setStockOnly(Boolean(v))} /> Только в наличии
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Card key={product.id} className="border-border/70 bg-card/40 transition-smooth hover:-translate-y-1 hover:border-primary/60">
              <CardContent className="p-4">
                <img src={product.image} alt={product.name} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="mb-2 flex flex-wrap gap-2">
                  {product.canBus && <Badge>CAN-bus</Badge>}
                  {product.isNew && <Badge variant="outline">Новинка</Badge>}
                  {!product.inStock && <Badge variant="outline">Под заказ</Badge>}
                </div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{product.socket} · {product.temperatureK}K · {product.powerW}W · {product.brightnessLm} lm</p>
                <p className="mt-2 text-xs text-muted-foreground">{product.canBus ? "Без ошибок CAN-bus в большинстве авто" : "Оптимальный базовый комплект"}</p>
                <p className="mt-3 text-lg font-bold">{product.price.toLocaleString("ru-RU")} ₽</p>
                <div className="mt-4 flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to={`/products/${product.slug}`}>Заказать</Link>
                  </Button>
                  <Button variant="outline" onClick={() => toggleCompare(product.slug)} aria-label={`Сравнить ${product.name}`}>
                    Сравнить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {compareProducts.length > 0 && (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-card/40 p-4">
            <h3 className="mb-4 text-xl font-bold">Сравнение до 3 товаров</h3>
            <table className="w-full min-w-[640px] text-sm">
              <tbody>
                <tr><td className="py-2 text-muted-foreground">Модель</td>{compareProducts.map((p) => <td key={p.slug} className="font-medium">{p.name}</td>)}</tr>
                <tr><td className="py-2 text-muted-foreground">Яркость</td>{compareProducts.map((p) => <td key={p.slug}>{p.brightnessLm} lm</td>)}</tr>
                <tr><td className="py-2 text-muted-foreground">Мощность</td>{compareProducts.map((p) => <td key={p.slug}>{p.powerW}W</td>)}</tr>
                <tr><td className="py-2 text-muted-foreground">Температура</td>{compareProducts.map((p) => <td key={p.slug}>{p.temperatureK}K</td>)}</tr>
                <tr><td className="py-2 text-muted-foreground">CAN-bus</td>{compareProducts.map((p) => <td key={p.slug}>{p.canBus ? "Да" : "Нет"}</td>)}</tr>
                <tr><td className="py-2 text-muted-foreground">Гарантия</td>{compareProducts.map((p) => <td key={p.slug}>{p.warrantyMonths} мес.</td>)}</tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
