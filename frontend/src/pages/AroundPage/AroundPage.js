import AroundCard from "./components/AroundCard";
import AroundFilter from "./components/AroundFilter";
import "./styles/AroundPage.css";
const AroundPage = () => {
  const AroundContainer = {
    position: "absolute",
    width: "900px",
    left: "180px",
    background: "#FFFFFF",
    marginTop: "75px",
    zIndex: "-2",
  };
  const AroundCardContainer = {
    position: "relative",
    width: "750px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "-1",
  };

  return (
    <div style={AroundContainer}>
      <div style={AroundCardContainer}>
        <div className="around-header"></div>
        <AroundFilter />
        <AroundCard />
      </div>
    </div>
  );
};

export default AroundPage;
