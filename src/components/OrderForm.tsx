import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    cargoType: "",
    from: "",
    to: "",
    weight: "",
    dimensions: "",
    date: "",
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-logistics-dark mb-4">
            Заказать доставку
          </h2>
          <p className="text-xl font-open-sans text-logistics-gray max-w-2xl mx-auto">
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-logistics-dark to-slate-800 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-montserrat flex items-center">
                <Icon name="FileText" size={24} className="mr-3" />
                Форма заказа
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="cargoType"
                      className="font-open-sans font-medium"
                    >
                      Тип груза
                    </Label>
                    <Select
                      value={formData.cargoType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, cargoType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип груза" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Общие грузы</SelectItem>
                        <SelectItem value="refrigerated">
                          Рефрижератор
                        </SelectItem>
                        <SelectItem value="dangerous">Опасные грузы</SelectItem>
                        <SelectItem value="oversized">
                          Крупногабаритные
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="weight"
                      className="font-open-sans font-medium"
                    >
                      Вес (кг)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Укажите вес"
                      value={formData.weight}
                      onChange={(e) =>
                        setFormData({ ...formData, weight: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="from"
                      className="font-open-sans font-medium"
                    >
                      Откуда
                    </Label>
                    <Input
                      id="from"
                      placeholder="Город отправления"
                      value={formData.from}
                      onChange={(e) =>
                        setFormData({ ...formData, from: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="to" className="font-open-sans font-medium">
                      Куда
                    </Label>
                    <Input
                      id="to"
                      placeholder="Город назначения"
                      value={formData.to}
                      onChange={(e) =>
                        setFormData({ ...formData, to: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="dimensions"
                      className="font-open-sans font-medium"
                    >
                      Габариты (см)
                    </Label>
                    <Input
                      id="dimensions"
                      placeholder="Длина x Ширина x Высота"
                      value={formData.dimensions}
                      onChange={(e) =>
                        setFormData({ ...formData, dimensions: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="date"
                      className="font-open-sans font-medium"
                    >
                      Желаемая дата
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-montserrat font-semibold text-logistics-dark mb-4">
                    Контактная информация
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="font-open-sans font-medium"
                      >
                        Имя
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="font-open-sans font-medium"
                      >
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="font-open-sans font-medium"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="font-open-sans font-medium"
                  >
                    Описание груза
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Дополнительная информация о грузе..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-logistics-blue hover:bg-blue-600 flex-1"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
