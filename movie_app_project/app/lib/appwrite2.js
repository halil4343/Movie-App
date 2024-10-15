import { Avatars, Client, Databases } from 'react-native-appwrite';
import {Account, ID} from "react-native-appwrite"

export const config = {
    endpoint : "https://cloud.appwrite.io/v1",
    platform:"com.ze.m_series",
    projectIId:"66ffd35900269beb79d5",
    databaseId:"66ffd53800374af7874c",
    userCollectionId:"66ffd5750001d142ed63",
    productId:"66ffd9bc00293152d252",
    storage:"66ffda1a0026dc9b1bd4",
}

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectIId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const databases = new Databases(client);
export async function createUser(email,username,password){
    try {
        
      const newAccount = await account.create(
        ID.unique(),
        email,
        password, 
        username 
    );
    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
        }
      )} catch (error) {
        throw(error)
      } 
      return newUser;
}