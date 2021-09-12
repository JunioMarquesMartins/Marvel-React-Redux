import React from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { CharacterList } from './styles';
import cutLongString from '../../Utils/cutLongString';

export default function Card({ pageCharacter }) {
    const character = useSelector((state) => state.character.characterData);

    return (
        <>
            <CharacterList>
                {!character.length && pageCharacter && <p>No results :(</p>}
                {character.map((card) => (
                    <li className="card" key={card.id}>
                        <header>
                            <img
                                src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
                                alt="character"
                            />
                        </header>
                        <div>
                            <strong>{card.name}</strong>
                            <p>
                                {card.description
                                    ? cutLongString(card.description)
                                    : '(No description available)'}
                            </p>
                        </div>
                        <div className="cta-area">
                            <a
                                href={card.urls[1].url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Read more
                                <FaArrowRight />
                            </a>
                        </div>
                    </li>
                ))}
            </CharacterList>
        </>
    );
}
