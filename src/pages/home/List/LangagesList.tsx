import React, { useMemo, useState } from "react";
import ItemList from "../../../components/ItemList/ItemList";

// Définition du type Langage
interface Langage {
  name: string;
}

const LangagesList: React.FC = () => {
  const [langages] = useState<Langage[]>([
    { name: "Java" },
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "SQL" },
  ]);

  const items = useMemo(
    () =>
      langages.map((langage) => ({
        name: langage.name,
      })),
    [langages]
  );

  return <ItemList items={items} title="Langages de programmation" />;
};

export default LangagesList;
