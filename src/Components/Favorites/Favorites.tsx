import React, { FC, useEffect, useState } from 'react';
import Header from '../Header/Header';

interface FavoritesProps { }

const Favorites: FC<FavoritesProps> = () => {
    const [favorites, setFavorites] = useState<any[]>([]);

    async function getFavorites() {
        try {
            const response = await fetch('http://127.0.0.1:3003/favorites/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const favoritesData = await response.json();
            return favoritesData;
        } catch (error) {
            console.error('Error fetching favorites:', error);
            return [];
        }
    }

    useEffect(() => {
        getFavorites().then((favoritesData) => {
            setFavorites(favoritesData);
        });
    }, []);

    console.log(favorites);

    return (
        <>
            <Header></Header>
            <div>Favorites:</div>
            <ul>
                {favorites.map((favorite) => (
                    <h2 key={favorite.id}>{favorite.quote}</h2>
                ))}
            </ul>
        </>
    );
};

export default Favorites;
