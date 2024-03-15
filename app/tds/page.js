import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Tds() {
    const tds = getGamesByCategory("tds");
    return (
        <main className="main">
            <CardsList id="tds" title="tds" data={tds} />
        </main>
    );
}
