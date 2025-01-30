import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Change for self-hosted
    .setProject("679af274003ae9af3888"); // Your Project ID

const account = new Account(client);

export { client, account };
