import { IoIosArrowDropright } from "react-icons/io";
import { Categories, Topic } from "../../Data/Data";
import { HiOutlinePencil } from "react-icons/hi";
import { Key, useEffect, useState } from "react";
import AddTopicModal from "./AddTopicModal";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
type TopicProps = {
  business_id: number;
  category: string;
  topic: string;
  keywords: string[];
  id: number;
};
/* `Dashboard` is a React component that displays a list of topics based on their categories. It
allows the user to filter the topics by category and add new topics to the list. The component
also includes a delete function that allows the user to remove a topic from the list. The
state of the component is managed using the `useState` hook, and the component uses the
`useEffect` hook to retrieve and store data in the `localStorage`. The component also renders
an `AddTopicModal` component that allows the user to add new topics to the list. */
const Dashboard = () => {
  const Router = useNavigate();
  /* These lines of code are initializing state variables using the `useState` hook. */
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addTopicModal, setAddTopicModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [finalTopic, setFinalTopic] = useState<any>([]);

  /* This is a `useEffect` hook that runs only once when the component mounts. It checks if there is
  any data stored in the `localStorage` with the key `"AllTopic"`. If there is no data, it sets the
  initial data to the `Topic` array and updates the `localStorage` with the `Topic` array. If there
  is data in the `localStorage`, it retrieves the data and sets the state of `finalTopic` to the
  retrieved data. This ensures that the data persists even after the user refreshes or closes the
  page. */
  useEffect(() => {
    if (localStorage.getItem("AllTopic") === null) {
      localStorage.setItem("AllTopic", JSON.stringify(Topic));
      setFinalTopic(Topic);
    } else {
      const _finalTopic = JSON.parse(localStorage.getItem("AllTopic") || "");
      setFinalTopic(_finalTopic);
    }
  }, []);

  /**
   * This function deletes a topic from a list and updates the list in local storage and state.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of a topic
   * that needs to be deleted. The function `DeleteHandler` takes this `id` as input and removes the
   * topic with the corresponding `id` from the `finalTopic` array. It then updates the `finalTopic
   */
  const DeleteHandler = (id: number) => {
    const _finalTopic = finalTopic.filter(
      (topic: TopicProps) => topic.id !== id
    );
    localStorage.setItem("AllTopic", JSON.stringify(_finalTopic));
    setFinalTopic(_finalTopic);
  };

  return (
    <div className="w-full h-5/6 ">
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="text-xl underline  md:text-2xl font-bold p-2 w-11/12">
          Categories
        </h1>
        <div className="w-11/12 flex justify-between items-center md:h-16 px-2 bg-white rounded-t-md mt-2 shadow-md border ">
          <div className="flex w-full md:w-2/4 justify-between">
            {Categories?.map((category, i) => (
              <div
                key={i}
                className={`flex cursor-pointer w-32 md:w-auto gap-x-2 items-center text-md font-semibold justify-center py-2 px-4 ${selectedCategory === category
                    ? "bg-primary text-white rounded-md"
                    : ""
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                <p>{category}</p>
              </div>
            ))}
          </div>

          <button
            className="flex px-4 p-2 rounded-lg bg-primary  items-center gap-x-2 text-xl text-white active:scale-95 transition-all ease-in-out"
            onClick={() => setAddTopicModal(true)}
          >
            <p>Add Topic</p> <IoIosArrowDropright />
          </button>
        </div>
        <div className="w-11/12 bg-gray-100 p-2 border-b text-sm text-primary font-semibold shadow-md border-x">
          <h1>Recommended Topics</h1>
        </div>
        <div className="w-11/12 h-full max-h-[70vh] bg-white shadow-md border rounded-b-md overflow-x-hidden">
          <div className="w-full h-full overflow-y-auto">
            {finalTopic?.map(
              (topic: TopicProps, i: Key | null | undefined) =>
                (selectedCategory === "All" ||
                  selectedCategory === topic.category) && (
                  <div
                    key={i}
                    className="flex  w-full justify-between items-center p-3 border-b text-sm text-gray-600 font-semibold"
                  >
                    <div className="flex flex-col gay-y-2">
                      <p>{topic.topic}</p>
                      <ul className="flex mt-2">
                        {topic?.keywords?.map((tag: string, i: any) => (
                          <li
                            key={i}
                            className={`${i % 3 === 0
                                ? "text-yellow-500 border-yellow-500 border-2 bg-yellow-50"
                                : i % 3 === 1
                                  ? "text-green-500 border-green-500 border-2 bg-green-50"
                                  : "text-red-500 border-red-500 border-2 bg-red-50"
                              } text-xs  px-2 py-1 rounded-lg mr-2`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-x-4">
                      <button
                        className="text-md text-white bg-primary px-3 py-2 rounded-md flex gap-x-2 items-center "
                        onClick={() => {
                          Router("/writetopic/" + topic.id);
                        }}
                      >
                        Write <HiOutlinePencil />
                      </button>
                      <button
                        className="text-md text-white bg-primary px-3 py-2 rounded-md flex gap-x-2 items-center "
                        onClick={() => {
                          DeleteHandler(topic.id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      {/* `<AddTopicModal>` is a component that is being imported and rendered within the `Dashboard`
 component. It is being passed several props, including `tags`, `setTags`, `topic`, `setTopic`,
 `tagInput`, `setTagInput`, `addTopicModal`, `setAddTopicModal`, `setFinalTopic`, and
 `setSelectedCategory`. These props are being used within the `AddTopicModal` component to manage
 the state of the modal and to add new topics to the list of topics. */}
      <AddTopicModal
        tags={tags}
        setTags={setTags}
        topic={topic}
        setTopic={setTopic}
        tagInput={tagInput}
        setTagInput={setTagInput}
        addTopicModal={addTopicModal}
        setAddTopicModal={setAddTopicModal}
        setFinalTopic={setFinalTopic}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Dashboard;
