import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// UUID
import { v4 as uuidv4 } from "uuid";

// Components
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import AddThought from "./components/AddThought/AddThought";

// CSS
import "./css/style.css";

function App() {
  // Thoughts
  const [thoughts, setthoughts] = useState({
    id: uuidv4(),
    description: "",
    mood: "",
    automaticthought: "",
    supportingfacts: "",
    contradictfacts: "",
    realisticthought: "",
    rateyourfeeling: "",
  });

  // Edit State
  const [editState, setEditState] = useState(false)

  // Update Form Values
  const updateFields = (e) => {
    setthoughts({ ...thoughts, [e.target.name]: e.target.value });
  };

  // Clear Fields After Submit
  const clearFields = () => {
    setthoughts({
      id: uuidv4(),
      description: "",
      mood: "",
      automaticthought: "",
      supportingfacts: "",
      contradictfacts: "",
      realisticthought: "",
      rateyourfeeling: "",
    });
  };

  // Thoughts stored in Local Storage
  const thoughtsFromLS = (JSON.parse(localStorage.getItem('thought')) === null) ? [] : JSON.parse(localStorage.getItem('thought'));

  // Form Handler
  const onSubmitForm = (e) => {
    e.preventDefault();
    const thoughtsArray = [];
    thoughtsArray.push(thoughts);
    const showList = thoughtsArray.concat(thoughtsFromLS);
    localStorage.setItem("thought", JSON.stringify(showList));
    clearFields();
    setEditState(false)
  };

  // Populate form in edit state
  const populateForm = (thought, e) => {
    setEditState(true);
    e.preventDefault();
    let LSthoughts = thoughtsFromLS.filter(thoughts => thoughts.id === thought.id);
    let everythingElse = thoughtsFromLS.filter(thoughts => thoughts.id !== thought.id);
    setthoughts(LSthoughts[0]);
    localStorage.setItem("thought", JSON.stringify(everythingElse));
  }

  // delete a thought
  const deleteThought = (thought, e) => {
    e.preventDefault();
    let LSthoughts = thoughtsFromLS;
    LSthoughts = thoughtsFromLS.filter(thoughts => thoughts.id !== thought.id);
    setthoughts(LSthoughts)
    localStorage.setItem("thought", JSON.stringify(LSthoughts));
  }

  // Delete all thoughts
  const deleteAllThoughts = () => {
    localStorage.clear();
    setthoughts({
      id: "",
      description: "",
      mood: "",
      automaticthought: "",
      supportingfacts: "",
      contradictfacts: "",
      realisticthought: "",
      rateyourfeeling: "",
    })
  }

  // Show thoughts on the side
  const getThoughtsFromLS = () => {
    if (thoughtsFromLS !== null) {
      return thoughtsFromLS.map((thought) => <li key={thought.id} className={thought.id}>
        <div className="thought-description">
          <span>
            {thought.description}
          </span>
        </div>

        <div className="thought-buttons">
          <button className="btn" onClick={(e) => deleteThought(thought, e)}><i className="fas fa-trash"></i></button>
          <button className="btn" onClick={(e) => populateForm(thought, e)}><i className="far fa-edit"></i></button>
        </div>
      </li>)
    }

    return 'Add a thought...'
  }

  return (
    <div className="App">
      <Router>
        <Nav />

        <div className="app-wrapper">
          <Route exact path="/" component={Header} />

          <Switch>
            <Route
              path="/thoughts"
              render={() =>
                <AddThought
                  thoughts={thoughts}
                  editState={editState}
                  updateFields={updateFields}
                  onSubmitForm={onSubmitForm}
                  populateForm={populateForm}
                  getThoughtsFromLS={getThoughtsFromLS()}
                  deleteAllThoughts={deleteAllThoughts}
                />
              }
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
