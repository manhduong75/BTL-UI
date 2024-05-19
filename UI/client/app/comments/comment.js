import { useAuth, useUser } from "@clerk/clerk-expo";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import useFetchComments from "../../hook/useFetchComments";
import useSendComment from "../../hook/useSendComment";

class CommentManager {
  constructor() {
    this.comments = {};
  }

  generateUUID() {
    let d = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  getNewComment(commentValue, isRootNode = false, parentNodeId) {
    return {
      id: this.generateUUID(),
      commentText: commentValue,
      childCommments: [],
      isRootNode,
      parentNodeId,
    };
  }

  addComment(parentId, newCommentText) {
    let newComment = null;
    if (parentId) {
      newComment = this.getNewComment(newCommentText, false, parentId);
      this.comments[parentId] = {
        ...this.comments[parentId],
        childCommments: [
          ...this.comments[parentId].childCommments,
          newComment.id,
        ],
      };
    } else {
      newComment = this.getNewComment(newCommentText, true, null);
    }
    this.comments[newComment.id] = newComment;
  }

  commentMapper(comment) {
    return {
      ...comment,
      childCommments: comment.childCommments
        .map((id) => this.comments[id])
        .map((comment) => this.commentMapper(comment)),
    };
  }

  getEnhancedComments() {
    return Object.values(this.comments)
      .filter((comment) => !comment.parentNodeId)
      .map((comment) => this.commentMapper(comment));
  }
}
function CommentItem({ comment, addComment }) {
  const [showChildren, setShowChildren] = useState(false);
  const { user } = useUser();
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [childComment, setChildComment] = useState("");

  const toggleChildrenVisibility = () => {
    setShowChildren(!showChildren);
  };

  const onAddChildComment = () => {
    if (addComment && typeof addComment === "function") {
      addComment(comment.id, childComment); // Sử dụng addComment ở đây
    }
    setChildComment("");
    setShowAddComponent(false);
  };

  return (
    <View style={styles.comment}>
      <View style={styles.userHeader}>
        <View>
          <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        </View>
        <Text style={styles.userName}>{user.fullName}</Text>
      </View>
      <View style={styles.commentHeader}>
        <Text style={styles.textIndent}>{comment.message}</Text>
        {comment.children && comment.children.length > 0 && (
          <TouchableOpacity
            style={styles.arrowDown}
            onPress={toggleChildrenVisibility}
          >
            <SimpleLineIcons
              name={showChildren ? "arrow-up" : "arrow-down"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        )}
      </View>
      {showAddComponent ? (
        <View style={styles.commentsContainerChild}>
          <TextInput
            style={styles.inputChild}
            value={childComment}
            onChangeText={setChildComment}
            placeholder="Thêm bình luận"
          />
          <Pressable title="Bình luận" onPress={onAddChildComment}>
            <MaterialIcons name="send" size={30} color="grey" />
          </Pressable>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setShowAddComponent(true)}>
          <View style={styles.reply}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={18}
              color="grey"
            />
            <Text style={styles.addReplyText}>Trả lời</Text>
          </View>
        </TouchableOpacity>
      )}
      {showChildren && comment.children && comment.children.length > 0 && (
        <View style={styles.childComments}>
          {comment.children.map((childComment) => (
            <CommentItem key={childComment.id} comment={childComment} />
          ))}
        </View>
      )}
    </View>
  );
}
function App() {
  const { user } = useUser();
  const [commentManager] = useState(new CommentManager());
  const [rootComment, setRootComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reloadComments, setReloadComments] = useState(false);
  const listOfComments = useFetchComments(reloadComments);
  const { sendComment, isLoading, error } = useSendComment();

  const onAdd = async () => {
    if (!rootComment.trim()) {
      console.log("Cannot add an empty comment.");
      return;
    }
    try {
      const newComment = await sendComment(rootComment);
      setComments([...comments, newComment]);
      setRootComment("");
      setReloadComments(!reloadComments);
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };
  const handleAddComment = async (parentId, commentText) => {
    try {
      const newComment = await sendComment(commentText, parentId); // Assuming sendComment can handle parentId for child comments
      setComments((prevComments) => {
        // Find the parent comment and add the new comment to its children
        const updatedComments = prevComments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              children: [...(comment.children || []), newComment],
            };
          }
          return comment;
        });
        return updatedComments;
      });
      setReloadComments(!reloadComments); // Optionally reload comments to reflect the changes
    } catch (error) {
      console.error("Error adding child comment:", error);
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.header}>Thảo luận</Text>
      <View style={styles.commentsContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        <TextInput
          style={styles.input}
          value={rootComment}
          onChangeText={setRootComment}
          placeholder="Viết bình luận..."
        />
        <Pressable title="Bình luận" onPress={onAdd}>
          <MaterialIcons name="send" size={30} color="grey" />
        </Pressable>
      </View>
      <ScrollView style={styles.comments}>
        {Array.isArray(listOfComments) &&
          listOfComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              addComment={handleAddComment}
            />
          ))}
      </ScrollView>
    </View>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  app: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  commentsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: "#d1d1d1",
  },
  commentsContainerChild: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: "#d1d1d1",
    marginLeft: 15,
  },
  input: {
    flex: 1,
    marginHorizontal: 15,
    padding: 3,
    paddingLeft: 12,
    borderRadius: 30,
    backgroundColor: "#d2d4d2",
  },
  inputChild: {
    flex: 1,
    marginRight: 15,
    padding: 3,
    borderRadius: 30,
    backgroundColor: "#d2d4d2",
  },
  comments: {
    marginBottom: 150,
  },
  comment: {
    marginBottom: 10,
    paddingLeft: 30,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -30,
  },
  userName: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "grey",
    fontSize: 16,
    paddingBottom: 2,
  },
  textIndent: {
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 5,
    marginRight: 50,
  },
  reply: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },

  addReplyText: {
    color: "#257de8",
    fontSize: 13,
    marginLeft: 5,
    paddingBottom: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "grey",
  },
  arrowDown: {
    position: "absolute",
    right: 10,
    top: -22,
  },
});

export default App;
