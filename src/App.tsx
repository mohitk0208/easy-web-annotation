import * as React from "react";
import "./App.css";

const App = () => {

  const [isEditorMode, setIsEditorMode] = React.useState(false)

  function changeModeHandler() {

    setIsEditorMode(prev => !prev)

  }

  return (
    <div className="app-container">
      <div className={`switch-box ${isEditorMode ? "editor-mode" : "reader-mode"} `} onClick={changeModeHandler}>
      </div>
      <p className="current-state">
        {isEditorMode ? 'Editor Mode' : 'Reader Mode'}
      </p>
    </div>
  );
};

export default App;
