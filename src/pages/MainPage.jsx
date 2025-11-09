import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function MainPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <ProductCard />
            </main>
            <Footer />
        </div>
    );
}