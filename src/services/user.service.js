import User from '../config/firestore.js'

import { producerFn } from '../kafka/producer.js';

//get all users
export const getAllUsers = async () => {
  const res = await User.get();
  const result = res.docs.map((value) =>
    ({ id: value.id, ...value.data() })
  )
  await producerFn(result)
  return result;

};

//create new user
export const newUser = async (body) => {
  const docRef = await User.add(body);
  let id = docRef.id

  // Retrieve the added data
  const docSnapshot = await docRef.get();
  const addedData = docSnapshot.data();
  const result = { id, ...addedData }

  await producerFn(result)

  // Return the added data or perform any desired actions here
  return result;


};

//update single user
export const updateUser = async (_id, body) => {
  // let docRef = await User.doc(_id).update(body)

  const userRef = User.doc(_id);
  await userRef.update(body);
  const userSnapshot = await userRef.get();
  const updatedData = userSnapshot.data();
  updatedData.id = userSnapshot.id;

  // Return the updated data or perform any desired actions here
  return updatedData;
};

//delete single user
export const deleteUser = async (id) => {
  await User.doc(id).delete();
  return '';
};

//get single user
export const getUser = async (id) => {
  // const res = await User.doc(id).get();
  const userRef = User.doc(id);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    throw new Error('User not found');
  }

  const userData = userSnapshot.data();


  // Include the ID in the returned object
  userData.id = userSnapshot.id;

  // Return the retrieved data with the ID or perform any desired actions here
  return userData;

};
