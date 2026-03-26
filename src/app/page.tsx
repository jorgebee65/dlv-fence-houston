import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkGallery from '../components/WorkGallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WorkGallery />
      <Footer />
    </main>
  );
}
