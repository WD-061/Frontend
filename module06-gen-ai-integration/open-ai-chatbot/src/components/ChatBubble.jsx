import Markdown from "marked-react";
import { Refractor, registerLanguage } from "react-refractor";

import bash from "refractor/lang/bash";
import js from "refractor/lang/javascript.js";
import php from "refractor/lang/php.js";
import python from "refractor/lang/python.js";

registerLanguage(bash);
registerLanguage(js);
registerLanguage(php);
registerLanguage(python);

const renderer = {
  code(snippet, lang) {
    if (!lang) lang = "bash";
    const allowedLangs = ["js", "php", "python"];

    if (!allowedLangs.includes(lang)) lang = "bash";

    return <Refractor key={this.elementId} language={lang} value={snippet} />;
  },
};

const ChatBubble = ({ role, content }) => {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex w-full my-4 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex ${
          isAssistant ? "flex-row" : "flex-row-reverse"
        } items-start gap-2 max-w-[80%]`}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-red-700 text-white shadow-md">
            {isAssistant ? "AI" : "You"}
          </div>
        </div>

        {/* Message content */}
        <div className="flex flex-col gap-1">
          <div
            className={`rounded-2xl px-4 py-2 shadow-md ${
              isAssistant
                ? "bg-secondary text-secondary-content"
                : "bg-primary text-primary-content"
            }`}
          >
            <Markdown gfm renderer={renderer}>
              {content}
            </Markdown>
          </div>
          <div className="text-xs opacity-70 px-2">
            {isAssistant ? "AI Assistant" : "You"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
