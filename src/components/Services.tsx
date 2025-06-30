import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Truck",
      title: "Автоперевозки",
      description: "Полный спектр автомобильных перевозок по всей стране",
      features: ["Фуры и тенты", "Рефрижераторы", "Контейнеровозы"],
    },
    {
      icon: "Plane",
      title: "Авиаперевозки",
      description: "Быстрая доставка авиатранспортом по всему миру",
      features: [
        "Срочная доставка",
        "Международные перевозки",
        "Таможенное оформление",
      ],
    },
    {
      icon: "Ship",
      title: "Морские перевозки",
      description: "Контейнерные перевозки морским транспортом",
      features: [
        "Контейнеры 20'40'",
        "Мультимодальные перевозки",
        "Складские услуги",
      ],
    },
    {
      icon: "Package",
      title: "Складские услуги",
      description: "Полный цикл складской обработки грузов",
      features: [
        "Хранение грузов",
        "Комплектация заказов",
        "Упаковка и маркировка",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-logistics-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-logistics-dark mb-4">
            Наши услуги
          </h2>
          <p className="text-xl font-open-sans text-logistics-gray max-w-2xl mx-auto">
            Предоставляем полный спектр логистических услуг для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-logistics-blue/10 rounded-full w-fit group-hover:bg-logistics-blue group-hover:text-white transition-all">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-logistics-blue group-hover:text-white"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-logistics-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-open-sans text-logistics-gray">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm font-open-sans text-logistics-gray"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-logistics-blue mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-logistics-blue group-hover:text-white group-hover:border-logistics-blue"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
