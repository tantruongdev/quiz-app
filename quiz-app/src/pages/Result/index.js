import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./Result.scss";
import { getListQuestion } from "../../services/questionServices";

import { getAnswer } from "../../services/answerServices";
import { getTopic } from "../../services/topicServices";
function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [topic, setTopic] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestions = await getListQuestion(dataAnswers.topicId);

      let resultFinal = [];

      for (let i = 0; i < dataQuestions.length; i++) {
        // const answerId = dataAnswers.answers.find(
        //   (item) => item.questionId === dataQuestions[i].id
        // );
        // console.log(answerId.answer);
        resultFinal.push({
          ...dataQuestions[i],
          ...dataAnswers.answers.find(
            (item) => item.questionId === dataQuestions[i].id
          ),
        });
      }

      setDataResult(resultFinal);

      const response = await getTopic(resultFinal[0].topicId);
      if (response) {
        setTopic(response.name);
      }
    };
    fetchApi();
  }, []);

  const handleRework = () => {
    navigate(`/quiz/${dataResult[0].topicId}`);
  };

  const totalAnswer = dataResult.length;
  const totalCorrectAnswer = dataResult.reduce((total, item) => {
    return total + (item.answer === item.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <>
      <div className="result">
        <h1 className="result__title-head">Result: Chủ đề {topic}</h1>

        <div className="result__overview">
          <span>
            Đúng: <b>{totalCorrectAnswer}</b>{" "}
          </span>
          |{" "}
          <span>
            Sai: <b>{totalAnswer - totalCorrectAnswer}</b>{" "}
          </span>
          |{" "}
          <span>
            Tổng số câu: <b>{totalAnswer}</b>{" "}
          </span>
          |{" "}
          <span>
            Tỷ lệ chính xác:{" "}
            <b>{((totalCorrectAnswer / totalAnswer) * 100).toFixed(2)}%</b>
          </span>
        </div>
        {dataResult.length > 0 && (
          <div className="result__list">
            {dataResult.map((item, index) => (
              <div className="result__item" key={item.id}>
                <p className="result__title">
                  Câu {index + 1}: {item.question}
                  {item.correctAnswer === item.answer ? (
                    <span className="result__tag result__tag--true">Đúng</span>
                  ) : (
                    <span className="result__tag result__tag--false">Sai</span>
                  )}
                </p>
                <div className="result__answers">
                  {item.answers.map((itemAns, indexAns) => {
                    let className = "";
                    let checked = false;

                    if (item.answer === indexAns) {
                      checked = true;
                      className = "result__item--selected";
                    }

                    if (item.correctAnswer === indexAns) {
                      className += " result__item--result";
                    }

                    return (
                      <div className="result__answer" key={indexAns}>
                        <input type="radio" checked={checked} disabled></input>
                        <label className={className}>{itemAns}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <button className="result__submit" onClick={handleRework}>
              Làm lại
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Result;
