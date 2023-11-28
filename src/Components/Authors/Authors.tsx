import React, { FC, useEffect, useState } from 'react';

interface AuthorsProps { }

const Authors: FC<AuthorsProps> = () => {
    const [authors, setAuthors] = useState<any[]>([]);

    async function getAuthors() {
        try {
            const response = await fetch('http://127.0.0.1:3003/authors/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const authorsData = await response.json();
            return authorsData;
        } catch (error) {
            console.error('Error fetching authors:', error);
            return [];
        }
    }

    useEffect(() => {
        getAuthors().then((authorsData) => {
            setAuthors(authorsData);
        });
    }, []);

    return (
        <>
            <div>Authors:</div>
            <ul>
                {authors.map((author) => (
                    <article>
                        <img src='' alt="" />
                        <h2 key={author.id}>{author.name}</h2>
                        <p> {author.bio} </p>
                    </article>
                ))}
            </ul>
        </>
    );
};

export default Authors;
