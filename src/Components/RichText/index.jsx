import { useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const imageHandler = () => {
  // Create an input element of type 'file'
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  // When a file is selected
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();

    // Read the selected file as a data URL
    reader.onload = () => {
      const imageUrl = reader.result;
      const quillEditor = Quill.current.getEditor();

      // Get the current selection range and insert the image at that index
      const range = quillEditor.getSelection(true);
      quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
    };

    reader.readAsDataURL(file);
  };
};
const modules = {
  toolbar: {
    container: [
      [{ header: [2, 3, 4, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ color: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
  clipboard: {
    matchVisual: true,
  },
};

function RichText({onChange}) {

  return <ReactQuill className='[&>div]:border-[#22181C] [&>div]:border-1' modules={modules} onChange={onChange} style={{border: ""}} />;
}

export default RichText;