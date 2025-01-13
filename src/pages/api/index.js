export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res
        .status(200)
        .json({ message: "Welcome to Next js api Route feature" });
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
    case "POST":
      return res.status(200).json({ message: "POST request received" });
    case "PUT":
      return res.status(200).json({ message: "PUT request received" });
    case "DELETE":
      return res.status(200).json({ message: "DELETE request received" });
  }
}
