import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Shooters() {
    const shooters = getGamesByCategory("shooters");
    return (
        <main className="main">
            <CardsList id="shooters" title="shooters" data={shooters} />
        </main>
    );
}
