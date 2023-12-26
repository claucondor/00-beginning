import { FOLLOW_BUTTON } from "../../assets/buttons";
import { Button } from "../button";
import "../button/follow-button/follow-button.css";

export function TwitterFollowCard({
  userName,
  children: name,
  isFollowing,
  formatUserName,
}) {
  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  const buttonClassName = isFollowing ? "cs-tw-follow-button" : "";

  return (
    <article className="cs-tw-followCard">
      <header className="cs-tw-followCard-header">
        <img
          className="cs-tw-followCard-avatar"
          src={imageSrc}
          alt="Imagen de usuario"
        />
        <div className="cs-tw-followCard-info">
          {name}
          <span className="cs-tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <Button icon={FOLLOW_BUTTON} className={buttonClassName}>
          {isFollowing ? "Siguiendo" : "Seguir"}
        </Button>
      </aside>
    </article>
  );
}
