import React, { useState, Fragment } from "react"
// import { nanoid } from 'nanoid';
import './App.css';
import data from "./data.json"
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    person:"",
    order: {
    main: "",
    protein: "",
    rice: "",
    sauce: "",
    drink: "",
    cost: ""
    }
  });

  const [editFormData, setEditFormData] = useState ({
    person:"",
    order: {
    main: "",
    protein: "",
    rice: "",
    sauce: "",
    drink: "",
    cost: ""
    }
  })


  const[editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      // id: nanoid(),
      person: addFormData.person,
      order: {
      main: addFormData.main,
      protein: addFormData.protein,
      rice: addFormData.rice,
      sauce: addFormData.sauce,
      drink: addFormData.drink,
      cost: addFormData.cost,
      }
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      person: editFormData.person,
      order: {
      main: editFormData.main,
      protein: editFormData.protein,
      rice: editFormData.rice,
      sauce: editFormData.sauce,
      drink: editFormData.drink,
      cost: editFormData.cost,
      }
    }

    const newContacts = [ ...contacts];

    const index = contacts.findIndex((contact) => contact.person === editFormData.person);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.person);

    const formValues = {
      person: contact.person,
      order: {
      main: contact.main,
      protein: contact.protein,
      rice: contact.rice,
      sauce: contact.sauce,
      drink: contact.drink,
      cost: contact.cost,
      }
    }
    setEditFormData(formValues)
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [ ...contacts];

    const index = contacts.findIndex((contact) => contact.person === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  }

  return (
    <div className="App2"><div className="form">
    <div className="form2">
      <h2>Submit Order</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="person"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="main"
            required="required"
            placeholder="Enter a main dish..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="protein"
            required="required"
            placeholder="Enter a protein..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="rice"
            required="required"
            placeholder="Enter a rice..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="sauce"
            required="required"
            placeholder="Enter a sauce..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="drink"
            required="required"
            placeholder="Enter a drink..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="cost"
            required="required"
            placeholder="Enter a price..."
            onChange={handleAddFormChange}
          />
          <button type = 'submit'className="addButton">Add</button>
        </form>
      </div>
      </div>
    <form className="App" onSubmit={handleEditFormSubmit}>
    <div className="orderRow">
      {contacts.map ((contact) => (
        <Fragment>
          {editContactId === contact.person ? (
          <EditableRow editFormData = {editFormData}
          handleEditFormChange={handleEditFormChange}
          handleCancelClick = {handleCancelClick}
          /> 
          ):(  
          <ReadOnlyRow contact = {contact}
          handleEditClick = {handleEditClick}
          handleDeleteClick = {handleDeleteClick}
          />
          )}
        </Fragment>
      ))}
      </div>
      </form>
    </div>
  );
}

export default App;