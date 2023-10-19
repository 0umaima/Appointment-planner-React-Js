import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        <option key={contact} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};