import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionsService";

function Quiz() {
  const params = useParams();
  // console.log(params);
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestions, setDataQuestions] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic(params.id);
      setDataTopic(response);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(params.id);
      setDataQuestions(response);
    };
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  // console.log(dataTopic);
  return (
    <>
      <h2>Bài Quiz chủ đề: {dataTopic && <>{dataTopic.name}</>}</h2>
      <div className="form-quiz">
        <form onSubmit={handleSubmit}>
          {dataQuestions.map((item, index) => (
            <div className="form-quiz__item" key={item.id}>
              <p>
                Câu {index + 1}: {item.question}
              </p>
              {item.answers.map((itemAnswer, indexAnswer) => (
                <div className="form-quiz__answer" key={indexAnswer}>
                  <input
                    type="radio"
                    name={item.id}
                    value={indexAnswer}
                    id={`quiz-${item.id}-${indexAnswer}`}
                  ></input>
                  <label htmlFor={`quiz-${item.id}-${indexAnswer}`}>
                    {itemAnswer}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Nộp bài</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
