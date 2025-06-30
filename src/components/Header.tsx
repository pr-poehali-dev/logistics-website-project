import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-logistics-blue" />
            <span className="text-2xl font-montserrat font-bold text-logistics-dark">
              ЛогисТранс
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="font-open-sans text-logistics-dark hover:text-logistics-blue transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="font-open-sans text-logistics-dark hover:text-logistics-blue transition-colors"
            >
              Услуги
            </a>
            <a
              href="#fleet"
              className="font-open-sans text-logistics-dark hover:text-logistics-blue transition-colors"
            >
              Автопарк
            </a>
            <a
              href="#tracking"
              className="font-open-sans text-logistics-dark hover:text-logistics-blue transition-colors"
            >
              Отслеживание
            </a>
            <a
              href="#contact"
              className="font-open-sans text-logistics-dark hover:text-logistics-blue transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">
              Войти
            </Button>
            <Button className="bg-logistics-blue hover:bg-blue-600">
              Заказать доставку
            </Button>
            <Button variant="ghost" className="md:hidden" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
