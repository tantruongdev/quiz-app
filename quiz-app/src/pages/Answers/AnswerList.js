import { useEffect, useState } from "react";

import AnswerItem from "./AnswerItem";
import { getAnswersByUserId } from "../../services/answerServices";
import { getListTopic } from "../../services/topicServices";
function AnswerList() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const answersByUserId = await getAnswersByUserId();
      const topics = await getListTopic();

      if (answersByUserId) {
        const result = [];
        for (let i = 0; i < answersByUserId.length; i++) {
          const topic = topics.find(
            (item) => item.id === answersByUserId[i].topicId
          );

          result.push({
            ...topic,
            ...answersByUserId[i],
          });
        }

        setAnswers(result.reverse());
      }
    };
    fetchApi();
  }, []);

  // console.log(topics);
  return (
    <>
      <div className="topic">
        <h1 className="topic__title-head">Danh sách bài đã luyện tập</h1>
        {answers.length > 0 && (
          <div className="topic__list">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tên chủ đề</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {answers.map((item) => (
                  <AnswerItem item={item} key={item.id}></AnswerItem>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
export default AnswerList;
