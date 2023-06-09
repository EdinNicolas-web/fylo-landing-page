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
      <Testimonials />
    </main>
  );
}
