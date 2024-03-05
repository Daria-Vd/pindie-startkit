import Banner from "@/app/components/Banner/Banner";
import Promo from "@/app/components/Promo/Promo";
import PopularCardsList from "@/app/components/CardList/PopularCardsList";
import NewCardsList from "@/app/components/CardList/NewCardsList";

export default function Home() {
    return (
        <main className="main">
            <Banner />
            <PopularCardsList />
            <NewCardsList />
            <Promo />
        </main>
    );
}
