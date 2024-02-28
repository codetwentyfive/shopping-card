import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh ooh,this route doesnt exist</h1>
      <Link to="/"> You can go back clicking here! </Link>
    </div>
  );
};

export default ErrorPage;
