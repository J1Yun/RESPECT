import PoolCard from "./components/PoolCard";
import PoolFilter from "./components/PoolFilter";
import "./styles/PoolPage.css";
const PoolPage = () => {
  const poolContainer = {
    position: "absolute",
    width: "900px",
    left: "180px",
    background: "#FFFFFF",
    marginTop: "75px",
    zIndex: "-2",
  };
  const poolCardContainer = {
    position: "relative",
    width: "750px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "-1",
  };

  return (
    <div style={poolContainer}>
      <div style={poolCardContainer}>
        <div className="pool-header"></div>
        <PoolFilter />
        <PoolCard />
      </div>
    </div>
  );
};

export default PoolPage;
