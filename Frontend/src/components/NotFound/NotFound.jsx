import "./NotFound.css";
import notFound from "../../assets/notFound.svg";

function NotFound() {
  return (
    <div className="notFound">
      <img className="notFound__image" src={notFound} alt="Not Found" />
      <h1 className="notFound__title">Nothing Found</h1>
      <p className="notFound__text">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
}

export default NotFound;
