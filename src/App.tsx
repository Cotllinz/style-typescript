import React from "react";
import Index from "./routes";
interface Props {
  name?: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
      </header>
    </div>
  );
};

export default App;
