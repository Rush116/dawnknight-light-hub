import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-led-bulb.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚗 Премиум светодиодные лампы
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Dawn Knight</span>
                <br />
                Яркость нового
                <br />
                поколения
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Светодиодные автомобильные лампы премиум-класса с гарантией 2 года. 
                Увеличьте видимость на дороге до 300% и обеспечьте безопасность вождения.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">6000K</p>
                  <p className="text-sm text-muted-foreground">Холодный белый</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">50000 час</p>
                  <p className="text-sm text-muted-foreground">Срок службы</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">IP65</p>
                  <p className="text-sm text-muted-foreground">Защита</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-button hover:shadow-glow transition-smooth group"
              >
                Перейти к каталогу
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                Инструкции по установке
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 (2847 отзывов)</span>
              </div>
              
              <div className="h-4 w-px bg-border" />
              
              <div className="text-sm text-muted-foreground">
                ⚡ Более 50,000 довольных клиентов
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-card">
              <img
                src={heroImage}
                alt="Dawn Knight LED лампы"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 glow-card">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">-30%</p>
                <p className="text-sm text-muted-foreground">Скидка до конца месяца</p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 glow-card">
              <div className="text-center">
                <p className="text-lg font-bold">✈️ Доставка</p>
                <p className="text-sm text-muted-foreground">По всей России</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};