// import List from "../practice/List";
//  <List />

import DocterCard from "../Components/DocterCard";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";

const Home = () => {
  return (
    <section className="HomeContainer">
      <Navbar />
      <Services />
      <DocterCard />
    </section>
    // <List />
  );
};

export default Home;

//navbar --> which is going to have user name after login  --> navbar component
//Doctor services section related to hospital --> Service component
//Docter information in cards --> card components
