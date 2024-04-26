import { Link } from "react-router-dom";

function TopicItem({ item }) {
  return (
    <>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <Link to={"/quiz/" + item.id} className="button">
            Làm bài
          </Link>
        </td>
      </tr>
    </>
  );
}

export default TopicItem;
