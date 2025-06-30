import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OrderForm from "@/components/OrderForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OrderForm />
    </div>
  );
};

export default Index;
