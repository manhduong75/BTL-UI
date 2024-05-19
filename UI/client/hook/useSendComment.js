import { useState, useCallback } from "react";
import { useUser } from "@clerk/clerk-expo";
import instance from "../utils/axios";

const useSendComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useUser();

  const sendComment = useCallback(
    async (commentText, parentId = null) => {
      setIsLoading(true);
      setError(null);

      const data = {
        commentText,
        userId: user.id,
        parentId, // Giữ nguyên parentId, có thể là null cho bình luận gốc hoặc có giá trị cho bình luận con
      };

      try {
        const response = await instance.post("/comments", data); // Sử dụng cùng một endpoint cho cả bình luận gốc và con
        console.log("Comment posted successfully:", response);
        // Bạn có thể cần cập nhật UI tại đây, ví dụ: thông báo thành công, cập nhật danh sách bình luận...
      } catch (error) {
        console.error(
          "Error posting comment:",
          error.response ? error.response.data : error.message
        );
        setError(error.response ? error.response.data : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    },
    [user.id]
  );

  return { sendComment, isLoading, error };
};

export default useSendComment;
