import { useState } from "react";
import "./App.css";
import CodeEditor from "./Components/CodeEditor";

function App() {
  const [htmlVal, setHtmlVal] = useState(
    "<h1>Hello World!</h1> \n<p>I am a Live Server created with ❤ by Aadil</p>\n<p>Go ahead and edit me</p>"
  );
  const [cssVal, setCssVal] = useState(`body{
    background-color: #FFFFFF;
  }`);
  const [jsVal, setJsVal] = useState("");

  const [htmlToggle, setHtmlToggle] = useState(true);
  const [cssToggle, setCssToggle] = useState(false);
  const [jsToggle, setJsToggle] = useState(false);

  const htmlToggleFunc = () => {
    setJsToggle(false);
    setCssToggle(false);
    setHtmlToggle(true);
  };

  const cssToggleFunc = () => {
    setJsToggle(false);
    setHtmlToggle(false);
    setCssToggle(true);
  };

  const jsToggleFunc = () => {
    setCssToggle(false);
    setHtmlToggle(false);
    setJsToggle(true);
  };

  const iframeDocument = `
  <html>
  <body>${htmlVal}</body>
  <style>${cssVal}</style>
  <script>${jsVal}</script>
  </html>`;

  return (
    <div className="mainDocument">
      <h1 className="mainDocument--Head">
        Online Code Editor with hot-reload Live-View by Aadil Abdul Ghani
      </h1>
      <div className="app">
        <div className="explorer--Explorer">
          <div className="explorer--Head">File Explorer</div>
          <ul className="explorer--List">
            <li
              className="listClass"
              onClick={htmlToggleFunc}
              style={
                htmlToggle
                  ? {
                      color: "#00ff4c",
                    }
                  : { color: "#ffffff" }
              }
            >
              index.html
            </li>
            <li
              className="listClass"
              onClick={cssToggleFunc}
              style={cssToggle ? { color: "#00ff4c" } : { color: "#ffffff" }}
            >
              index.css
            </li>
            <li
              className="listClass"
              onClick={jsToggleFunc}
              style={jsToggle ? { color: "#00ff4c" } : { color: "#ffffff" }}
            >
              index.js
            </li>
          </ul>
        </div>
        <div className="app--CodeEditor">
          {htmlToggle ? (
            <CodeEditor
              fileName="HTML"
              languageToggle="xml"
              value={htmlVal}
              onChange={setHtmlVal}
            />
          ) : null}

          {cssToggle ? (
            <CodeEditor
              languageToggle="css"
              fileName="CSS"
              value={cssVal}
              onChange={setCssVal}
            />
          ) : null}

          {jsToggle ? (
            <CodeEditor
              languageToggle="javascript"
              fileName="JS"
              value={jsVal}
              onChange={setJsVal}
            />
          ) : null}
        </div>
        <div className="app--LiveServer">
          <div className="liveServer--Head">Live Server</div>
          <iframe
            srcDoc={iframeDocument}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
