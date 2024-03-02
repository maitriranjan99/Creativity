import logo from "../assets/monitor.png";
const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width: width }} />
    </div>
  );
};

export default Logo;
