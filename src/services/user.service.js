
import User from '../config/firestore.js'
import userModel from '../model/user.model.js'

// import { producerFn } from '../kafka/producer.js';

//get all users
export const getAllUsers = async () => {
  const res = await User.get();
  const result = res.docs.map((value) =>
    ({ id: value.id, ...value.data() })
  )
  // await producerFn(result)
  return result;

};

export async function newUser(id, name, age, email, interests) {
  try {
    const user = userModel.createUser(id, name, age, email, interests);

    // Add user data to Firestore

    const docRef = await User.add(user.toFirestore());

    // Retrieve the added user data
    const docSnapshot = await docRef.get();
    const addedUser = userModel.getUserFromFirestore(docSnapshot);

    return addedUser;
  } catch (error) {
    throw error;
  }
}


//update single user
export const updateUser = async (_id, body) => {
  await User.doc(_id).update(body)
  const docSnapshot = await User.doc(_id).get();
  const updatedUser = userModel.getUserFromFirestore(docSnapshot);
  return updatedUser;
};

//delete single user
export const deleteUser = async (id) => {
  await User.doc(id).delete();
  return '';
};

//get single user
export const getUser = async (id) => {
  const docSnapshot = await User.doc(id).get();

  if (!docSnapshot.exists) {
    throw new Error('User not found....');
  }
  const user = userModel.getUserFromFirestore(docSnapshot);
  return user;

};
