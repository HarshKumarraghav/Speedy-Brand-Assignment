import { IoIosArrowDropright } from "react-icons/io";
import { Categories, Topic } from "../../Data/Data";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";
import AddTopicModal from "./AddTopicModal";

const Dashboard = () => {
/* These lines of code are initializing state variables using the `useState` hook. */
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addTopicModal, setAddTopicModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

/**
 * The function returns a merged array of predefined topics and custom topics retrieved from local
 * storage.
 * @returns The function `FinalTopics` returns an array that contains the topics from the `Topic` array
 * and the `CustomTopic` array retrieved from the local storage using `JSON.parse()`. The
 * `console.log()` statements are used to log the `CustomTopic` array, the `Topic` array, and the
 * `FinalTopic` array to the console for debugging purposes.
 */
const FinalTopics = () => {
  const CustomTopic = JSON.parse(localStorage.getItem("Topic") || "[]");
  console.log(CustomTopic , "topic", Topic);
  const FinalTopic = [...Topic, ...CustomTopic];
  console.log(FinalTopic);
  return FinalTopic;
};
/* `const [finalTopic] = useState(FinalTopics());` is initializing a state variable `finalTopic` using
the `useState` hook. The initial value of `finalTopic` is set to the return value of the
`FinalTopics` function, which is an array of topics retrieved from local storage and merged with the
predefined topics. The `useState` hook returns an array with two elements: the current state value
(`finalTopic`) and a function to update the state value. However, in this case, the update function
is not used since the state value is not expected to change during the component's lifecycle. The
destructuring assignment syntax is used to extract the first element of the array (`finalTopic`) and
assign it to the `finalTopic` constant. */
const [finalTopic] = useState(FinalTopics());
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
                className={`flex cursor-pointer w-32 md:w-auto gap-x-2 items-center text-md font-semibold justify-center py-2 px-4 ${
                  selectedCategory === category
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
              (topic, i) =>
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
                            className={`${
                              i % 3 === 0
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
                      <button className="text-md text-white bg-primary px-3 py-2 rounded-md flex gap-x-2 items-center ">
                        Write <HiOutlinePencil />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <AddTopicModal
        tags={tags}
        setTags={setTags}
        topic={topic}
        setTopic={setTopic}
        tagInput={tagInput}
        setTagInput={setTagInput}
        addTopicModal={addTopicModal}
        setAddTopicModal={setAddTopicModal}

      />
    </div>
  );
};

export default Dashboard;
