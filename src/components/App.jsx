import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: ""
  });

  function update(event) {
    const { value, name } = event.target;
    setContact((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else {
        return { lName: value, fName: prevValue.fName };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <form>
        <input onChange={update} name="fName" placeholder="First Name" />
        <input onChange={update} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
