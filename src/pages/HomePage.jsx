import "./HomePage.css";
import HeroButton from "../components/buttons/HeroButton";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero hero-1">
          <p className="hero-text hero-text-primary">Miles without limits</p>
          <p className="hero-text hero-text-secondary">
            Every step, every breath, every mile – effortless
          </p>
          <HeroButton
            text="All products"
            onClick={() => navigate("/product/HF7357-900")}
          />
        </div>
        <div className="hero hero-2">
          <p className="hero-text hero-text-primary">
            Chase Your Fastest Split
          </p>
          <p className="hero-text hero-text-secondary">
            With the new Alphafly 3, for runners who redefine their limits
          </p>
          <HeroButton
            text="Shop now"
            onClick={() => {
              console.log("Navigating to product...");
              navigate("/product/HF7357-900");
            }}
          />
        </div>
      </div>
      <div className="hero hero-3">
        <p className="hero-text hero-text-primary">Fuel for the Finish Line</p>
        <p className="hero-text hero-text-secondary">
          Get your nutrition right for race day
        </p>
        <HeroButton text="Nutrition plan" onClick={() => {}} />
      </div>
    </div>
  );
}

export default HomePage;
