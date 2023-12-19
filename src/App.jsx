import { FOLLOW_BUTTON } from "./assets/buttons";
import { Button } from "./components/button";

export function App() {
  return (
    <article>
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1683235367/28_400x400.jpg"
          alt="Imagen de usuario"
        />
        <div>
          <strong>Nombre de usuario</strong>
          <span>@usuario</span>
        </div>
      </header>

      <aside>
        <Button text="Boton 1" icon={FOLLOW_BUTTON} />
      </aside>
    </article>
  );
}
