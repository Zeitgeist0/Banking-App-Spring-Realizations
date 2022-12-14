import AccountTable from "Components/AccountTable/AccountTable";
import React from "react";

const Customer = ({ customer }) => {
  return (
    <div>
      <p>Customer ID : {customer.id}</p>
      <p>
        {customer.name} , {customer.age} years old. Email : {customer.email}
      </p>
      <AccountTable accounts={customer.accounts} />
    </div>
  );
};

export default Customer;
