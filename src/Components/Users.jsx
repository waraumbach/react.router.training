const Users = () => {
  const users = [
    "Alex",
    "Ben",
    "Hadi",
    "Marla",
    "Samuel",
    "Sheikh",
    "Vlada",
    "Wara",
  ];

  return (
    <>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </>
  );
};
export default Users;
