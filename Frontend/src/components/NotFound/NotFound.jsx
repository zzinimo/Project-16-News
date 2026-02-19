import "./NotFound.css";
import notFound from "../../assets/notFound.svg";

function NotFound() {
  return (
    <>
      <div className="nothing__found-container">
        <img className="nothing__found-image" src={notFound} alt="" />
        <h1 className="nothing__found-title">Nothing Found</h1>
        <p className="nothing__found-sub-text">
          Sorry, but nothing matched your search terms
        </p>
      </div>
    </>
  );
}

export default NotFound;
