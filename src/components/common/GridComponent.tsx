import { useEffect, useState } from "react";
import PokemonData from "../../types/PokemonData";
import PokemonCard from "./PokemonCard";

// const data = [
//   {
//     id: 1,
//     imageUrl: "https://placekitten.com/300/200",
//     title: "Fluffy Kitty",
//     text: "Adorable fluffy cat with soft fur.",
//     url: "https://example.com/cat1",
//   },
//   {
//     id: 2,
//     imageUrl: "https://placekitten.com/301/200",
//     title: "Playful Kitten",
//     text: "Playful kitten enjoying a sunny day.",
//     url: "https://example.com/cat2",
//   },
//   {
//     id: 3,
//     imageUrl: "https://placekitten.com/302/200",
//     title: "Sleeping Beauty",
//     text: "A cute cat taking a cozy nap.",
//     url: "https://example.com/cat3",
//   },
//   {
//     id: 4,
//     imageUrl: "https://placekitten.com/304/200",
//     title: "Four Cats",
//     text: "Four cats looking at something interesting.",
//     url: "https://example.com/cat4",
//   },
//   {
//     id: 5,
//     imageUrl: "https://placekitten.com/305/200",
//     title: "Cute Whiskers",
//     text: "Irresistible cat with adorable whiskers.",
//     url: "https://example.com/cat5",
//   },
//   {
//     id: 6,
//     imageUrl: "https://placekitten.com/308/150",
//     title: "Graceful Feline",
//     text: "Graceful cat striking a charming pose.",
//     url: "https://example.com/cat6",
//   },
//   {
//     id: 7,
//     imageUrl: "https://placekitten.com/306/150",
//     title: "Mischief Maker",
//     text: "Mischievous cat ready for some playtime.",
//     url: "https://example.com/cat7",
//   },
// ];

const GridComponent = () => {
  const [data, setData] = useState<PokemonData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const result = await response.json();

        const pokemonDetailsPromises = result.results.map(
          async (pokemon: { url: RequestInfo | URL }) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonResult = await pokemonResponse.json();
            return {
              name: pokemonResult.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonResult.id}.png`,
              text: `Type: ${pokemonResult.types
                .map((type: { type: { name: any } }) => type.type.name)
                .join(", ")}`,
              url: pokemon.url,
            };
          }
        );

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setData(pokemonDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;

    if (newSearchTerm.length >= 3 || newSearchTerm.length === 0) {
      setSearchTerm(newSearchTerm);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        onChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((pokemon) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        ) : (
          <p className="">No results found</p>
        )}
      </div>
    </>
  );
};

export default GridComponent;
