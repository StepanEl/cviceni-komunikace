import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");
 

  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
        <div>
        <button onClick = {(event) => setJmeno(event.target.textContent)} >Jirka</button>
        <button onClick = {(event) => setJmeno(event.target.textContent)}>Honza</button>
        <button onClick = {(event) => setJmeno(event.target.textContent)}>Tomáš</button>
        <button onClick = {(event) => setJmeno(event.target.textContent)}>Šimon</button>
      </div>
    </>
  );
};
