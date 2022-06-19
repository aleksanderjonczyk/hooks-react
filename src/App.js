import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

// prettier-ignore
const items = [
  {
    title: "What is React?",
    content: "React is a front end JS library",
  },
  {
    title: "Why use React?",
    content: "Because React is epic",
  },
  {
    title: "How to use React?",
    content: "You know. Just type some code import it and it works just like that 😁👍",
  },
];

const options = [
  {
    label: "the color blue",
    value: "blue",
  },
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "a shade of green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <div>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Toggle Dropdown
          </button>
          {showDropdown ? (
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
          ) : null}
          <div style={{ color: selected.value }}>
            {`This text is ${selected.value}!`}
          </div>
        </div>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
