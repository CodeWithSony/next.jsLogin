import React from 'react'

const UserManagementTable = () => {
  return (
    <table className="w-5/6 h-auto">
    <tr>
      <th className="text-left my-2">Name</th>
      <th className="text-left my-2" colSpan={4}>
        Email
      </th>
      <th className="text-left my-2">Status</th>
      <th className="text-left my-2">Block/Unblock</th>
      <th className="text-left my-2">Delete</th>
    </tr>

    <tr>
      <td className="my-2">Sony</td>
      <td colSpan={4} className="my-2">
        sony2343@gmail.com
      </td>
      <td className="my-2">Active</td>
      <td>
        {" "}
        <span className="bg-red-500 p-1">Block</span>
      </td>
      <td className="flex justify-start items-center my-2">
        <span className=" bg-red-500 p-1 w-8 h-7 flex justify-center items-center">
          {" "}
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </td>
    </tr>

    <tr>
      <td className="my-2">Sony</td>
      <td colSpan={4} className="my-2">
        sony2343@gmail.com
      </td>
      <td className="my-2">Active</td>
      <td>
        {" "}
        <span className="bg-red-500 p-1">Block</span>
      </td>
      <td className="flex justify-start items-center my-2">
        <span className=" bg-red-500 p-1 w-8 h-7 flex justify-center items-center">
          {" "}
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </td>
    </tr>
  </table>
  )
}

export default UserManagementTable
