import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
    <div>
        <h1>
            <input
              type="text"
              name="person"
              required="required"
              placeholder="Enter a name..."
              value={editFormData.person}
              onChange={handleEditFormChange}
            ></input>
        </h1>
        <p>
            <input
              type="text"
              name="main"
              required="required"
              placeholder="Enter a main dish..."
              value={editFormData.main} // figure out how to keep original input when editing
              onChange={handleEditFormChange}
            />
        </p>
        <p>
            <input
              type="text"
              name="protein"
              required="required"
              placeholder="Enter a protein..."
              value={editFormData.protein}
              onChange={handleEditFormChange}
            />
        </p>
        <p>
            <input
              type="text"
              name="rice"
              required="required"
              placeholder="Enter a rice..."
              value={editFormData.rice}
              onChange={handleEditFormChange}
            />
        </p>
        <p>
            <input
              type="text"
              name="sauce"
              required="required"
              placeholder="Enter a sauce..."
              value={editFormData.sauce}
              onChange={handleEditFormChange}
            />
        </p>
        <p>
         <input
              type="text"
              name="drink"
              required="required"
              placeholder="Enter a drink..."
              value={editFormData.drink}
              onChange={handleEditFormChange}
            />
        </p>
        <p>
            <input
              type="text"
              name="cost"
              required="required"
              placeholder="Enter a price..."
              value={editFormData.price}
              onChange={handleEditFormChange}
            />
        </p>
        <p>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        </p>
    </div>
)}

export default EditableRow