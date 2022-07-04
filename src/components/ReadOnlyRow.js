import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <div className="orders">  
            <h1>{contact.person}</h1>
            <p>Main: {contact.order.main}</p>
            <p>Protein: {contact.order.protein}</p>
            <p>Rice: {contact.order.rice}</p>
            <p>Sauce: {contact.order.sauce}</p>
            <p>Drink: {contact.order.drink}</p>
            <p>Cost: {contact.order.cost}</p>
        {/* <p>{contact.paid}</p> */}
            <p>
                <button type="button" 
                onClick = {(event) => handleEditClick(event, contact)}
                >
                Edit
                </button> 
                <button type='button' onClick={() => handleDeleteClick(contact.person)}>Delete</button>
            </p>
      </div>
    )
}

export default ReadOnlyRow