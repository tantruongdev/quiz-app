import { Link } from "react-router-dom";

function AnswerItem({ item }) {
  return (
    <>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <Link to={"/result/" + item.id} className="button">
            Xem chi tiết
          </Link>
        </td>
      </tr>
    </>
  );
}

export default AnswerItem;
