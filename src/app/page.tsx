import { Page } from "../components/CharactersPage";

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
}

interface Props {
  characters: Character[];
}
async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) console.log("error fetching");
  const data = await res.json();

  return data;
}
export default async function Home() {
  const characters = await fetchCharacters();

  return (
    <div className=" max-w-[1500px] w-full min-h-screen mx-auto ">
      <Page characters={characters.results} />
    </div>
  );
}
