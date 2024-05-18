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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
const generateUUID = () => {
  let d = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const getNewComment = (commentValue, isRootNode = false, parentNodeId) => {
  return {
    id: generateUUID(),
    commentText: commentValue,
    childCommments: [],
    isRootNode,
    parentNodeId,
  };
};

const initialState = {};

function App() {
  const { user } = useUser();
  const [comments, setComments] = useState(initialState);
  const [rootComment, setRootComment] = useState("");
  const addComment = (parentId, newCommentText) => {
    let newComment = null;
    if (parentId) {
      newComment = getNewComment(newCommentText, false, parentId);
      setComments((comments) => ({
        ...comments,
        [parentId]: {
          ...comments[parentId],
          childCommments: [...comments[parentId].childCommments, newComment.id],
        },
      }));
    } else {
      newComment = getNewComment(newCommentText, true, null);
    }
    setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
  };
  const commentMapper = (comment) => {
    return {
      ...comment,
      childCommments: comment.childCommments
        .map((id) => comments[id])
        .map((comment) => commentMapper(comment)),
    };
  };
  const enhancedComments = Object.values(comments)
    .filter((comment) => !comment.parentNodeId)
    .map(commentMapper);
  const onAdd = () => {
    addComment(null, rootComment);
    setRootComment("");
  };
  return (
    <View style={styles.app}>
      <Text style={styles.header}>Bình luận</Text>
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
      <View style={styles.comments}>
        {enhancedComments.map((comment, key) => (
          <Comment key={key} comment={comment} addComment={addComment} />
        ))}
      </View>
    </View>
  );
}

const Comment = ({ comment, addComment }) => {
  const { commentText, childCommments, id } = comment;
  const [childComment, setChildComment] = useState("");
  const [show, setShow] = useState(true);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const { user } = useUser();
  const onAddChildComment = () => {
    addComment(id, childComment);
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
        <Text style={styles.textIndent}>{commentText}</Text>
        {childCommments.length > 0 && (
          <TouchableOpacity
            style={styles.arrowDown}
            title={show ? "Ẩn" : "Hiện"}
            onPress={() => setShow(!show)}
          >
            <SimpleLineIcons name="arrow-down" size={20} color="grey" />
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
      {show &&
        childCommments.map((childCommentEl, key) => (
          <Comment key={key} comment={childCommentEl} addComment={addComment} />
        ))}
    </View>
  );
};

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
  comments: {},
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
