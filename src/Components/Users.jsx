const Users = () => {
  const students = [
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
      {students.map((student) => (
        <li>{student}</li>
      ))}
    </>
  );
};

export default Users;
