import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-logistics-dark to-slate-900 text-white"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
              Надежная логистика
              <span className="text-logistics-blue">по всей России</span>
            </h1>

            <p className="text-xl font-open-sans text-gray-300 leading-relaxed">
              Перевозим ваши грузы безопасно и в срок. Опыт более 15 лет на
              рынке транспортных услуг.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-logistics-blue hover:bg-blue-600 text-lg px-8 py-3"
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Заказать доставку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-gray-300 text-white hover:bg-white hover:text-logistics-dark"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-logistics-blue">
                  500+
                </div>
                <div className="text-sm font-open-sans text-gray-400">
                  Городов доставки
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-logistics-blue">
                  24/7
                </div>
                <div className="text-sm font-open-sans text-gray-400">
                  Поддержка
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-logistics-blue">
                  99%
                </div>
                <div className="text-sm font-open-sans text-gray-400">
                  Доставка в срок
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-logistics-blue to-blue-600 rounded-lg blur opacity-20"></div>
            <Card className="relative bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-white">
                  Отследить груз
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Введите номер накладной"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-blue"
                    />
                    <Icon
                      name="Search"
                      size={20}
                      className="absolute right-3 top-3 text-gray-300"
                    />
                  </div>
                  <Button className="w-full bg-logistics-blue hover:bg-blue-600">
                    <Icon name="MapPin" size={20} className="mr-2" />
                    Отследить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
