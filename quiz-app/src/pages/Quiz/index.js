import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./Quiz.scss";
import { getListQuestion } from "../../services/questionServices";
import { getTopic } from "../../services/topicServices";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizServices";
function Quiz() {
  const params = useParams();
  const [questions, setQuestions] = useState([]);
  const [topic, setTopic] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(params.id);
      if (response) {
        setQuestions(response);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic(params.id);
      if (response) {
        setTopic(response.name);
      }
    };
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedAnswers = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;

        selectedAnswers.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }

    let options = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      answers: selectedAnswers,
    };

    const fetchApi = async () => {
      const response = await createAnswer(options);
      // console.log(response);
      if (response) {
        navigate(`/result/${response.id}`);
      }
    };
    fetchApi();
  };

  return (
    <>
      <div className="quiz">
        <h1 className="quiz__title-head">Bài Quiz chủ đề: {topic}</h1>

        {questions.length > 0 && (
          <form className="quiz__list" onSubmit={handleSubmit}>
            {questions.map((item, index) => (
              <div className="quiz__item" key={item.id}>
                <p className="quiz__title">
                  Câu {index + 1}: {item.question}
                </p>
                <div className="quiz__answers">
                  {item.answers.map((itemAns, indexAns) => (
                    <div className="quiz__answer" key={indexAns}>
                      <input
                        type="radio"
                        name={item.id}
                        value={indexAns}
                        id={`quiz-${item.id}-${indexAns}`}
                        required
                      ></input>
                      <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                        {itemAns}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="quiz__submit">
              Nộp bài
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Quiz;
