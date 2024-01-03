import "../styles/header.styles.css";
const Header = () => {
  return (
    <div className="header-container">
      <div>Leetcode Clone</div>
      <div>
        <span className="hr"></span>
        Learn More{" "}
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
