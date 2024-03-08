export const getGamesByCategory = (data, category) => {
    return data.filter((game) =>
        game.category.find(({ name }) => name === category)
    );
};
