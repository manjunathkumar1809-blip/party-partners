import Navbar from '@/components/Navbar';
import Party3DHero from '@/components/Party3DHero';
import TrustBar from '@/components/TrustBar';
import CatalogGrid from '@/components/CatalogGrid';
import ContactVenue from '@/components/ContactVenue';
import Footer from '@/components/Footer';
import WishlistDrawer from '@/components/WishlistDrawer';
import ContactBar from '@/components/ContactBar';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-obsidian text-white relative">
      <Navbar />
      <Party3DHero />
      <TrustBar />
      <CatalogGrid />
      <ContactVenue />
      <Footer />
      <WishlistDrawer />
      <ContactBar />
    </main>
  );
}