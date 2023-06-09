import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Task {
  id?: string;
  title: string;
  insensitiveTitle?: string;
  description: string;
  todoBefore?: Timestamp;
  createdAt?: Timestamp;
  userId?: string;
}
