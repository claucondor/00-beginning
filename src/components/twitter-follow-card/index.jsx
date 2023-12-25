import { FOLLOW_BUTTON } from "../../assets/buttons";
import { Button } from "../button";
import "../button/follow-button/follow-button.css";

export function TwitterFollowCard({
  userName,
  name,
  isFollowing,
  formatUserName,
}) {
  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  return (
    <article className="cs-tw-followCard">
      <header className="cs-tw-followCard-header">
        <img
          className="cs-tw-followCard-avatar"
          src={imageSrc}
          alt="Imagen de usuario"
        />
        <div className="cs-tw-followCard-info">
          <strong>{name}</strong>
          <span className="cs-tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <Button
          text="Seguir"
          icon={FOLLOW_BUTTON}
          className="cs-tw-follow-button"
        />
      </aside>
    </article>
  );
}
