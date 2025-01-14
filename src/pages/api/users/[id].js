import { users } from "../auth";

const handler = (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const selectedUser = users.find((user) => user.id === +id);
    if (!selectedUser) {
      return res
        .status(404)
        .json({ message: `User with id : ${id} not found` });
    }
    return res.status(200).json(selectedUser);
  }
};

export default handler;
