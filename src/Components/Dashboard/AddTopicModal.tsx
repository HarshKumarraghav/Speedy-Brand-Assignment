import { IoCloseSharp } from "react-icons/io5";
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
  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setAddTopicModal(false);
    }
  };

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
  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };
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
              onClick={() => setAddTopicModal(false)}
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
