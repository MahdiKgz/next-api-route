// Fake data Base
export const users = [
  { id: 1, name: "Mahdi", password: "Mahdi@gmail.com" },
];

export default (req, res) => {
  switch (req.method) {
    case "GET":
      return res.status(404).json({ message: "Method Not Allowed" });
    case "POST":
      const { name, password } = req.body;
      users.push({ id: crypto.randomUUID(), name, password });
      return res
        .status(201)
        .json({ message: "User created Successfully", data: users });
    case "PUT":
      return res.status(404).json({ message: "Method Not Allowed" });
    case "Delete":
      return res.status(404).json({ message: "Method Not Allowed" });
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
};
