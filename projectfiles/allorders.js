import React from 'react';

const orders = [
  { id: 1, item: 'Pizza', customer: 'Alice' },
  { id: 2, item: 'Biryani', customer: 'Bob' }
];

function allorders() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">All Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>{o.item} ordered by {o.customer}</li>
        ))}
      </ul>
    </div>
  );
}

export default allorders;