import Hero from "./Hero";
import About from "./About";

import Contect from "./Contect";
import ProvideUser from "./ProvideUser";
import UserReview from "./UserReview";
import Counter from "./Counter";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProvideUser></ProvideUser>
      <About />
      <Counter />
      <UserReview />
      <Contect />
    </div>
  );
};

export default Home;
