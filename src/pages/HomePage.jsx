import "./HomePage.css";
import HeroButton from "../components/buttons/HeroButton";

// This is the most basic structure
function HomePage() {
  return (
    <div>
      <div className="hero-1">
        <p className="hero-1-text">Miles without limits</p>
        <p className="hero-1-text-2">
          Every step, every breath, every mile – effortless
        </p>
        <HeroButton text="Easy day shoes" onClick={() => {}} />
      </div>
      <div className="hero-2">
        <p className="hero-2-text">Chase Your Fastest Split</p>
        <p className="hero-2-text-2">
          With the new Alphafly 3, for runners who redefine their limits
        </p>
        <HeroButton text="Shop now" onClick={() => {}} />
      </div>
      <div className="hero-3">
        <p className="hero-3-text">Fuel for the Finish Line</p>
        <p className="hero-3-text-2">Get your nutrition right for race day</p>
        <HeroButton text="Nutrition plan" onClick={() => {}} />
      </div>
    </div>
  );
}

export default HomePage;
