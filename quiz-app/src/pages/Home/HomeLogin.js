import { Link } from "react-router-dom";
function HomeLogin() {
  return (
    <>
      <div className="home-wrapper">
        <div className="content">
          <p>Chúc mừng bạn đã đăng nhập thành công</p>
          <div className="list">
            <Link to="/topic">Danh sách chủ đề ôn luyện</Link>
            <Link to="/answers">Danh sách bài đã luyện tập</Link>
          </div>
          <p>
            Website trắc nghiệm online lập trình Frontend là một nền tảng trực
            tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm
            tra, trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh
            vực lập trình Frontend.
          </p>
          <p>
            Đối với các lập trình viên Frontend, website trắc nghiệm online cung
            cấp các bài kiểm tra để giúp họ nâng cao kieensn thức và kỹ năng của
            mình trong các công nghệ và công cụ lập trình như HTMl, CSS,
            Javascript, jQuery, Bootstrap, Angular, React, Vue...
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeLogin;
