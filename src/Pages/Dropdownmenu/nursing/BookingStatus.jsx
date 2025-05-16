import React from "react";

const BookingStatus = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Status</h2>
      <table className="w-full border text-left text-sm">
        <thead>
          <tr>
            <th className="border p-2">Booking ID</th>
            <th className="border p-2">Nurse</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">123</td>
            <td className="border p-2">Nurse A</td>
            <td className="border p-2 text-green-600">Completed</td>
          </tr>
          <tr>
            <td className="border p-2">124</td>
            <td className="border p-2">Nurse B</td>
            <td className="border p-2 text-yellow-600">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingStatus;