import { TwitterFollowCard } from "../../components/twitter-follow-card";
import "./App.css";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="elcondor99"
        name="Claudio Condor"
        isFollowing={true}
      />
      <TwitterFollowCard
        userName="dixonortizch"
        name="Dixon Alberto Ortiz Chandia"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName="ocandocrypto"
        name="Angela"
        isFollowing={true}
      />
    </section>
  );
}
