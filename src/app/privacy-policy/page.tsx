"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const App = () => {
  const [markdownSource, setMarkdownSource] = useState("");
  useEffect(() => {
    fetch("markdown/pricacy-policy.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdownSource(text);
      });
  }, []);

  return (
    <div className="px-6 py-24 mx-auto max-w-7xl container flex items-center justify-center">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose markdown"
      >
        {markdownSource}
      </ReactMarkdown>
    </div>
  );
};

export default App;
