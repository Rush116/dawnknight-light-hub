import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  MessageCircle, 
  Users, 
  ArrowRight,
  Wrench,
  HelpCircle,
  Star,
  Clock
} from "lucide-react";

const forumTopics = [
  {
    id: 1,
    title: "Установка H7 на BMW X5 - пошаговая инструкция",
    author: "Алексей М.",
    replies: 23,
    views: 1245,
    lastReply: "2 часа назад",
    category: "Инструкции"
  },
  {
    id: 2,
    title: "Проблемы с мерцанием после установки H11",
    author: "Дмитрий К.",
    replies: 15,
    views: 856,
    lastReply: "5 часов назад",
    category: "Поддержка"
  },
  {
    id: 3,
    title: "Сравнение 5000K vs 6000K - какую выбрать?",
    author: "Сергей П.",
    replies: 45,
    views: 2340,
    lastReply: "1 день назад",
    category: "Обсуждение"
  }
];

const instructions = [
  {
    id: 1,
    title: "Доступные skills",
    description: "Используйте skill-creator для создания навыков и skill-installer для установки навыков в среду Codex.",
    cars: "skill-creator, skill-installer",
    difficulty: "Базовый",
    time: "2 мин",
    icon: "🧠"
  },
  {
    id: 2,
    title: "Как применять skills",
    description: "Открывайте SKILL.md только при необходимости, загружайте только релевантные файлы и используйте готовые scripts/assets.",
    cars: "SKILL.md, scripts, assets",
    difficulty: "Средний",
    time: "5 мин",
    icon: "📘"
  },
  {
    id: 3,
    title: "Координация и fallback",
    description: "Если подходит несколько skills — используйте минимальный набор по порядку, а при блокировке указывайте проблему и применяйте запасной подход.",
    cars: "Sequencing, fallback",
    difficulty: "Продвинутый",
    time: "4 мин",
    icon: "🛡️"
  }
];

export const InfoSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Инструкции и <span className="text-gradient">сообщество</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите профессиональную помощь по установке и настройке светодиодных ламп
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Instructions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Инструкции по установке</h3>
              <Link to="/instructions">
                <Button variant="outline" size="sm">
                  Все инструкции
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {instructions.map((instruction) => (
                <Card 
                  key={instruction.id} 
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{instruction.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                            {instruction.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {instruction.difficulty}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">
                          {instruction.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Wrench className="h-3 w-3" />
                            <span>{instruction.cars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{instruction.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Нужна персональная помощь?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Наши эксперты готовы помочь с установкой любых типов ламп
                </p>
                <Link to="/support">
                  <Button variant="outline" className="border-primary hover:bg-primary/10">
                    Задать вопрос эксперту
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Forum */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Форум сообщества</h3>
              <Link to="/forum">
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Перейти в форум
                </Button>
              </Link>
            </div>

            {/* Forum Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">15,420</p>
                  <p className="text-sm text-muted-foreground">Участников</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-4 text-center">
                  <MessageCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">3,847</p>
                  <p className="text-sm text-muted-foreground">Тем</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Topics */}
            <div className="space-y-3">
              <h4 className="font-semibold">Последние обсуждения</h4>
              
              {forumTopics.map((topic) => (
                <Card 
                  key={topic.id} 
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth cursor-pointer group"
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-smooth">
                          {topic.title}
                        </h5>
                        <Badge variant="outline" className="text-xs shrink-0">
                          {topic.category}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>by {topic.author}</span>
                        <span>{topic.lastReply}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>💬 {topic.replies}</span>
                        <span>👁 {topic.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Forum CTA */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6 text-center">
                <Star className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Присоединяйтесь к сообществу</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Делитесь опытом и получайте советы от экспертов
                </p>
                <Link to="/register">
                  <Button size="sm" className="w-full">
                    Зарегистрироваться
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
