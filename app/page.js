import AccessForm from "@/components/accessForm/AccessForm";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/mainContent/MainContent";
import Navigation from "@/components/navigation/Navigation";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <header>
        <Navigation />
        <Header />
      </header>
      <MainContent />
      <section style={{ position: "relative" }}>
        <Testimonials />
        <AccessForm />
        <Footer />
      </section>
    </main>
  );
}
