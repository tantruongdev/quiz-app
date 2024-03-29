import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  // console.log(navigate);
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={handleClick}>Trở lại</button>
    </>
  );
}

export default GoBack;
