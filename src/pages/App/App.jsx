import { TwitterFollowCard } from "../../components/twitter-follow-card";
import "./App.css";

export function App() {
  const formatUserName = (userName) => {
    return `@${userName}`;
  };
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="elcondor99"
        name="Claudio Condor"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="dixonortizch"
        name="Dixon Alberto Ortiz Chandia"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="ocandocrypto"
        name="Angela"
        isFollowing={true}
      />
    </section>
  );
}
