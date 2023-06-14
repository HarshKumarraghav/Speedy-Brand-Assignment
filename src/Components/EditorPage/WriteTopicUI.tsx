import { useState } from "react";
import {
  FaBold,
  FaCode,
  FaItalic,
  FaStrikethrough,
  FaSquareRootAlt,
} from "react-icons/fa";
import { MdAdd, MdImage } from "react-icons/md";
import { useParams } from "react-router-dom";

const WriteTopicUI = () => {
  const { topicid } = useParams<{ topicid: string }>();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [tone, setTone] = useState("");
  const handleBoldClick = () => {
    setText(text + "<strong>bold text</strong>");
  };

  const handleItalicClick = () => {
    setText(text + "<em>italic text</em>");
  };

  const handleStrikeThroughClick = () => {
    setText(text + "<del>strikethrough text</del>");
  };

  const handleMonoSpaceClick = () => {
    setText(text + "<code>monospace text</code>");
  };

  const handleVariableClick = () => {
    setText(text + "{{variable}}");
  };
  const handleSampleTextClick = () => {
    setText(
      text +
        "This is a sample text with <strong>bold text</strong>, <em>italic text</em>, <del>strikethrough text</del>, <code>monospace text</code>, and a {{variable}}"
    );
  };

  const handleImageDrop = (e: any) => {
    e.preventDefault();
    const droppedImage = e.dataTransfer.files[0];
    setImage(droppedImage);
  };

  const handleImageSelection = (e: any) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleEditImage = () => {
    alert(
      "This is edit image function! It is not implemented yet! because don't know what kind of edit we want to do!"
    );
  };
  const onSaveHandler = () => {
    const data: any = {
      topicid: topicid,
      tone: tone,
      text: text,
      image: image,
    };
    alert(JSON.stringify(data));
  };

  return (
    <section className="flex w-full justify-between h-[700px] p-8 mt-8 gap-x-8">
      <div className="w-8/12 bg-white rounded-md shadow-md border p-6 ">
        <h1 className="text-3xl font-semibold mb-4 text-center underline mt-3">
          Create a Blog Post
        </h1>
        <div className="flex flex-col items-center justify-between mb-6">
          <div className="w-3/4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="upload"
            >
              Upload and Edit the Image
            </label>
            <div
              className="h-48 border-dashed border-2 rounded-md p-4 flex flex-col justify-center items-center cursor-pointer"
              onDrop={handleImageDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {image ? (
                <div>
                  <img
                    src={URL?.createObjectURL(image)}
                    alt="Uploaded Image"
                    className="max-h-32 mx-auto mb-2 rounded-md"
                  />
                  <button
                    className="px-2 py-1 rounded bg-primary text-white text-sm"
                    onClick={handleEditImage}
                  >
                    Edit Image
                  </button>
                </div>
              ) : (
                <div>
                  <MdImage size={48} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-400 mb-2">
                    Drag and drop an image here
                  </p>
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex justify-center"
                  >
                    <MdAdd size={24} className="text-gray-400" />
                    <span className="text-gray-400 ml-2">Upload Image</span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelection}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-3/4 mt-2">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="body"
            >
              Write your blog post here
            </label>
            <div className="flex items-center justify-end mt-2 gap-x-1">
              <button
                className="px-2 py-1 rounded border"
                onClick={handleBoldClick}
              >
                <FaBold />
              </button>
              <button
                className="px-2 py-1 rounded border"
                onClick={handleItalicClick}
              >
                <FaItalic />
              </button>
              <button
                className="px-2 py-1 rounded border"
                onClick={handleStrikeThroughClick}
              >
                <FaStrikethrough />
              </button>
              <button
                className="px-2 py-1 rounded border"
                onClick={handleMonoSpaceClick}
              >
                <FaCode />
              </button>
              <button
                className="px-2 py-1 rounded border"
                onClick={handleVariableClick}
              >
                <FaSquareRootAlt />
              </button>
            </div>
            <textarea
              id="body"
              className="w-full h-48 p-2 border rounded text-gray-800 text-sm focus:outline-none resize-none"
              value={text}
              placeholder="Enter your text here"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex items-center justify-end mt-2 gap-x-1">
              <button
                className="px-2 py-1 flex items-center gap-x-2 rounded border text-primary"
                onClick={handleSampleTextClick}
              >
                <h1 className="text-lg font-medium">Add Sample Text</h1>
                <MdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12 bg-white rounded-md shadow-md border p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4 underline">
            Preview the Blog Post
          </h1>
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tone"
            >
              Tone:
            </label>
            <select
              id="tone"
              className="w-full h-10 px-4 border rounded-md text-gray-800 text-sm focus:outline-none"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="informative">Informative</option>
              <option value="educational">Educational</option>
              <option value="inspirational">Inspirational</option>
              <option value="funny">Funny</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="persuasive">Persuasive</option>
              <option value="motivational">Motivational</option>
              <option value="emotional">Emotional</option>
            </select>
          </div>
          <div className="w-full mt-6">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <div className="flex items-center justify-center w-full h-40 border-dashed border-2 rounded-md p-4">
              {image ? (
                <img
                  src={URL?.createObjectURL(image)}
                  alt="Uploaded Image"
                  className="max-h-32 mx-auto rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <MdImage size={48} className="text-gray-500 mb-2" />
                  <p className="text-gray-400">No Image</p>
                </div>
              )}
            </div>
            <div className="mt-4">
              {text === "" ? (
                <div className="w-full h-32 border border-dashed rounded-md text-gray-500 text-center flex items-center justify-center">
                  No Text
                </div>
              ) : (
                <div className="w-full h-32 border rounded-md p-2 text-gray-800 break-words overflow-auto"
                dangerouslySetInnerHTML={{ __html: text }
                }
                />
               
              )}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none"
              onClick={onSaveHandler}
            >
              Generate Blog
            </button>
            <button
              className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none"
              onClick={onSaveHandler}
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteTopicUI;
