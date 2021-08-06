import { Link } from "react-router-dom";

const Contracts = () => {
  return (
    <section>
      <h1>The Contracts Page</h1>
      <ul>
        <li>
          <Link to="/contracts/c1">A Book</Link>
        </li>
        <li>
          <Link to="/contracts/c2">A Carpet</Link>
        </li>
        <li>
          <Link to="/contracts/c3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Contracts;
