import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-primary" onClick={() => navigate("/")}>
      Trở về trang chủ
    </button>
  );
};
