import { useEffect, useState } from "react";
import { getListTopic } from "../../services/topicServices";
import TopicItem from "./TopicItem";
function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    };
    fetchApi();
  }, []);

  // console.log(topics);
  return (
    <>
      <div className="topic">
        <h1 className="topic__title-head">Danh sách chủ đề</h1>
        {topics.length > 0 && (
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
                {topics.map((item) => (
                  <TopicItem item={item} key={item.id}></TopicItem>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
export default TopicList;
