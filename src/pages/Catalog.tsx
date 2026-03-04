import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, socketOptions, temperatureOptions } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Catalog = () => {
  const [params] = useSearchParams();
  const [socket, setSocket] = useState<string>(params.get("socket") || "all");
  const [temperature, setTemperature] = useState<string>("all");
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("popular");
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = [...products].filter((p) => (socket === "all" ? true : p.socket === socket));
    list = list.filter((p) => (temperature === "all" ? true : p.temperatureK === Number(temperature)));
    list = list.filter((p) => (inStock ? p.stock !== "out" : true));
    if (sort === "price") list.sort((a, b) => a.price - b.price);
    if (sort === "new") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return list;
  }, [socket, temperature, inStock, sort]);

  const comparedProducts = products.filter((p) => compare.includes(p.slug));

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container section-space space-y-8 px-4">
        <h1 className="text-3xl font-bold">Каталог LED-ламп</h1>
        <Card className="surface-card"><CardContent className="grid gap-3 p-4 md:grid-cols-5">
          <select value={socket} onChange={(e) => setSocket(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option value="all">Все цоколи</option>{socketOptions.map((v) => <option key={v}>{v}</option>)}
          </select>
          <select value={temperature} onChange={(e) => setTemperature(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option value="all">Любая температура</option>{temperatureOptions.map((v) => <option key={v} value={v}>{v}K</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option value="popular">Популярное</option><option value="price">Цена</option><option value="new">Новинки</option>
          </select>
          <div className="flex items-center gap-2"><Checkbox checked={inStock} onCheckedChange={(v) => setInStock(Boolean(v))} id="stock" /><label htmlFor="stock">Только в наличии</label></div>
        </CardContent></Card>

        <div className="grid gap-4 md:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="surface-card overflow-hidden"><CardContent className="space-y-3 p-4">
              <img src={p.image} alt={p.name} loading="lazy" className="h-48 w-full rounded-lg bg-muted/30 object-contain" />
              <p className="text-xs text-primary">{p.shortTag}</p>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.socket} · {p.temperatureK}K · {p.powerW}W</p>
              <p className="text-xl font-bold">{p.price.toLocaleString()} ₽</p>
              <div className="grid grid-cols-2 gap-2">
                <Button asChild size="sm"><Link to={`/product/${p.slug}`}>Заказать</Link></Button>
                <Button size="sm" variant="outline" onClick={() => setCompare((prev) => prev.includes(p.slug) ? prev.filter((s) => s !== p.slug) : prev.length < 3 ? [...prev, p.slug] : prev)}>Сравнить</Button>
              </div>
            </CardContent></Card>
          ))}
        </div>

        {comparedProducts.length > 1 && (
          <Card className="surface-card"><CardContent className="overflow-x-auto p-4">
            <h2 className="mb-3 text-xl font-semibold">Сравнение товаров</h2>
            <table className="w-full min-w-[540px] text-sm"><thead><tr><th className="text-left">Параметр</th>{comparedProducts.map((p) => <th key={p.id} className="text-left">{p.socket}</th>)}</tr></thead><tbody>
              <tr><td>Яркость</td>{comparedProducts.map((p) => <td key={p.id}>{p.brightnessLm} lm</td>)}</tr>
              <tr><td>Температура</td>{comparedProducts.map((p) => <td key={p.id}>{p.temperatureK}K</td>)}</tr>
              <tr><td>CAN-bus</td>{comparedProducts.map((p) => <td key={p.id}>{p.canbus ? "Да" : "Нет"}</td>)}</tr>
              <tr><td>Гарантия</td>{comparedProducts.map((p) => <td key={p.id}>{p.warranty}</td>)}</tr>
            </tbody></table>
          </CardContent></Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
