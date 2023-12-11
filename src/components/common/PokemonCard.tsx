import PokemonData from "../../types/PokemonData";

const PokemonCard: React.FC<PokemonData> = (pokemon) => (
  <a href={pokemon.url} className="group shadow-grey shadow-lg hover:shadow-xl">
    <div className="bg-white p-4 rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="w-full h-40 mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold mb-2">{pokemon.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{pokemon.text}</p>
    </div>
  </a>
);

export default PokemonCard;
