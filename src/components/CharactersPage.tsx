import CharacterList from "@/components/CharacterList";
import { GetServerSideProps } from "next";

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

interface Props {
  characters: Character[];
}

export const Page = ({ characters }: Props) => {
  return (
    <div className=" max-w-[1500px] w-full min-h-screen mx-auto ">
      <h2 className="mt-32 text-center font-bold text-7xl">
        {" "}
        The Rick and Morty API
      </h2>

      <div className="mt-16 w-full">
        <CharacterList charcters={characters} />
      </div>
    </div>
  );
};
