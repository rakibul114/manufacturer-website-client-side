import React from 'react';

const Users = () => {
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch("https://shielded-beach-28674.herokuapp.com/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }

    return (
      <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;