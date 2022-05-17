import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
function Result({ text }) {
  return (
    <div className="resultText">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default Result;
