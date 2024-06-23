import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("6676e464000ffebb94a4"); // Your project ID

const account = new Account(client);
export const databases = new Databases(client, "66771de10035ca26b1de");
export { client, account, ID };