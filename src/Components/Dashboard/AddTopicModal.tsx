import { IoCloseSharp } from "react-icons/io5";

 /* The type defines the props for an AddTopicModal component in a TypeScript React application. */
type AddTopicModalProps = {
  tags: string[];
  setTags: any;
  tagInput: string;
  setTagInput: (value: string) => void;
  topic: string;
  setTopic: (value: string) => void;
  addTopicModal: boolean;
  setAddTopicModal: (value: boolean) => void;
};
const AddTopicModal = ({
  tags,
  setTags,
  tagInput,
  setTagInput,
  topic,
  setTopic,
  addTopicModal,
  setAddTopicModal,
}: AddTopicModalProps) => {
/**
 * This function creates a custom category with a random ID, adds it to a list of topics stored in
 * local storage, and resets the topic and tags state variables.
 */
  const handlerCustomCategory = () => {
    const random = Math.floor(Math.random() * 10000) + 1;
    const Topic = JSON.parse(localStorage.getItem("Topic") || "[]");
    const customCategory = {
      id: random,
      business_id: 79,
      category: "Custom",
      topic: topic,
      keywords: tags,
    };
    if (topic !== "" && tags.length !== 0) {
      Topic.push(customCategory);
      setTopic("");
      setTags([]);
      setAddTopicModal(false);
      localStorage.setItem("Topic", JSON.stringify(Topic));
    }
  };

/**
 * The function handleClose sets the state of AddTopicModal to false if the event target's id is
 * "modelContainer".
 * @param {any} e - The parameter "e" is an event object that is passed to the function. It is likely
 * an event object that is triggered when the user interacts with the UI, such as clicking on an
 * element.
 */
  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setAddTopicModal(false);
    }
  };

/**
 * This function adds a new tag to an array of tags when the "Enter" key is pressed in a tag input
 * field.
 * @param {any} event - The `event` parameter is an object that represents the event that triggered the
 * function. In this case, it is likely a keyboard event, specifically checking if the "Enter" key was
 * pressed.
 */
  const handleTagInput = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = event.target.value.trim();
      if (newTag !== "") {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };
/**
 * This function removes a specific tag from an array of tags and updates the state with the new array.
 * @param {string} tag - The `tag` parameter is a string representing the tag that needs to be removed
 * from the `tags` array. The function `handleTagRemove` filters the `tags` array to remove the tag
 * that matches the `tag` parameter and then updates the state of the `tags` array using the
 */
  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };
/* This line of code is checking if the `addTopicModal` prop is `false`. If it is `false`, it
immediately returns `null`, effectively rendering nothing. This is a common pattern in React
components to conditionally render content based on the value of a prop or state variable. In this
case, if the `addTopicModal` prop is `false`, the modal is not displayed. */
  if (!addTopicModal) return null;
  return (
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4"
      id="modelContainer"
      onClick={handleClose}
    >
      <div className="w-11/12 max-w-[500px] bg-white shadow-md rounded-md p-4 flex flex-col gap-y-4 items-center justify-center text-gray-700 ">
        <h1 className="text-2xl font-semibold">
          Create content with your own topic
        </h1>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="topic" className="text-sm font-semibold">
            Title of your Topic
          </label>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            name="topic"
            id="topic"
            placeholder="Enter your topic"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="topic" className="text-sm font-semibold">
            Enter the keywords for your topic
          </label>
          <div className="w-full flex flex-wrap gap-x-2 gap-y-1">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-x-2 bg-gray-100 px-2 py-1 rounded-md mb-2 "
              >
                <p className="text-xs">{tag}</p>
                <button onClick={() => handleTagRemove(tag)}>
                  <IoCloseSharp />
                </button>
              </div>
            ))}

            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInput}
              type="text"
              name="topic"
              id="topic"
              placeholder="Enter your topic"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-primary">*Press enter to add a tag</p>
          </div>

          <div className="w-full flex justify-end gap-x-3">
            <button
              onClick={() => setAddTopicModal(false)}
              className="w-32 bg-gray-300  py-2 rounded-md font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handlerCustomCategory}
              className="w-32 bg-primary text-white py-2 rounded-md font-semibold"
            >
              Create Topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTopicModal;
