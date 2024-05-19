import { useState, useEffect } from "react";
import instance from "../utils/axios";

const useFetchComments = (reloadComments) => {
  const [listOfComments, setListOfComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await instance.get("/comments");
        const fetchedComments = response;
        // Cập nhật trạng thái với dữ liệu đã được định dạng sẵn từ server
        setListOfComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, [reloadComments]);

  return listOfComments;
};

export default useFetchComments;
