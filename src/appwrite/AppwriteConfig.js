import { Client, Account, Databases } from "appwrite";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67083849003e370eb59f")
export const account= new Account(client)
export const databases=new Databases(client,"67083da30024a0ef3bcb")