const { PrismaClient } = require("@prisma/client");
const { clerkClient } = require("@clerk/clerk-sdk-node");

prisma = new PrismaClient();

class userController {
  async fetchUser(req, res) {
    try {
      const data = await prisma.user.findMany({});
      console.log(data);
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        errorCode: 1,
        msg: "Server" + error.message,
      });
    }
  }

  async createUser(req, res) {
    try {
      const { id, name } = req.body;
      console.log(id, name);
      const existingUser = await prisma.user.findMany({
        where: {
          id: id,
        },
      });
      if (!existingUser) {
        const newUser = await prisma.user.create({
          data: {
            id: id,
            name: name,
          },
        });
        res.status(201).json(newUser);
      } else {
        res.status(409).json({ message: "User already exists" });
      }
    } catch (error) {
      res.status(500).json({
        errorCode: 1,
        msg: "Server error: " + error.message,
      });
    }
  }
}

module.exports = new userController();
