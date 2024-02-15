import React from "react";

function App() {
  //Sets the state
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  //This function adds a new item to the list by re-rendering the list with the memory of the last state the list was in and adding one more "Thing".
  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
    });
  }

  //Adds a paragraph for each item from thingsArray and displays it under the add item button
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thignsElements}
    </div>
  );
}

export default App;
