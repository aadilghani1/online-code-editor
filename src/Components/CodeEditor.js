import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/xq-light.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import "./CodeEditor.css";
import { useState } from "react";

const CodeEditor = ({ fileName, languageToggle, value, onChange }) => {
  const onChangeControlled = (editor, data, value) => {
    onChange(value);
  };
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="codeEditor">
      <div className="codeEditor--head">
        {fileName}
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
      <Controlled
        onBeforeChange={onChangeControlled}
        value={value}
        className="controlled--Css"
        options={{
          lineWrapping: true,
          lint: true,
          theme: darkMode ? "ayu-dark" : "xq-light",
          mode: languageToggle,
        }}
        autoScroll={true}
      />
    </div>
  );
};

export default CodeEditor;
