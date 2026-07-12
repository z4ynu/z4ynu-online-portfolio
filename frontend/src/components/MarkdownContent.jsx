import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownContent = ({ src, className = "" }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load markdown content");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError("");
      })
      .catch(() => {
        setError("Unable to load markdown content.");
      });
  }, [src]);

  if (error) {
    return <p className="text-muted-foreground">{error}</p>;
  }

  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
