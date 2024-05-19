const { PrismaClient } = require("@prisma/client");

prisma = new PrismaClient();

class commentController {
  async fetchComments(req, res) {
    try {
      // Lấy tất cả comments không có parentId, tức là các comment gốc
      const comments = await prisma.comment.findMany({
        where: {
          parentId: null, // Chỉ lấy những comments không có parentId, tức là comment gốc
        },
        include: {
          children: {
            include: {
              children: true, // Đệ quy để lấy children của children nếu có
            },
          },
          user: true, // Include thông tin người dùng nếu bạn muốn hiển thị
          // Bạn có thể thêm các trường khác bạn muốn include ở đây
        },
      });

      if (comments.length === 0) {
        // Nếu không có comment nào, trả về response phù hợp
        // Ví dụ: trả về một mảng rỗng hoặc không trả về gì cả
        return res.status(204).send(); // 204 No Content
      }

      res.json(comments); // Trả về các comments đã tìm được
    } catch (error) {
      res.status(500).json({ error: error.message }); // Trả về lỗi nếu có
    }
  }
  async addComment(req, res) {
    try {
      const { commentText, userId, parentId } = req.body;

      // Kiểm tra xem userId có tồn tại không
      const userExists = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!userExists) {
        return res.status(404).json({ error: "User not found" });
      }

      const comment = await prisma.comment.create({
        data: {
          message: commentText,
          userId: userId,
          parentId: parentId,
        },
      });

      res.status(201).json(comment);
    } catch (error) {
      console.error("Error creating comment:", error);
      res.status(400).json({ error: error.message });
    }
  }
}
module.exports = new commentController();
