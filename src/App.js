

function App() {
  return (
    <>
    <header>
      <h1>Lotion</h1>
      <p id="subh"> Like Notion, but worse. </p>
    </header>
    <button type="button" id="lefttoggle">&#9776;</button>
    <div className="contentpage">
      <div id="sidebar">
        <div id="sidetext">
          <p>Note</p>
          <button type="button" id="newnote">&#43;</button>
        </div>
        <div id="buttoncontainer">
          <button type="button" id="1">untitled</button>
        </div>
      </div>
      <div id="content">
        <p id="refprompt">Select a note, or create a new one.</p>
      </div>
    </div>
  </>
  )
};

export default App;
