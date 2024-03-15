import React from "react";

import { getGamesByCategory } from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function PixelGames() {
    const pixelGames = getGamesByCategory("pixel-games");
    return (
        <main className="main-inner">
            <CardsList id="pixel-games" title="pixel-games" data={pixelGames} />
        </main>
    );
}
