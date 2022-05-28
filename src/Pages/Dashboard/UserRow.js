import React from "react";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://afternoon-sierra-85387.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          alert("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert(`Successfully made an admin`);
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs btn-success">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs btn-error">Remove User</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
