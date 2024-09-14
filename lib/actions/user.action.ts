'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";

export const signIn = async () => {
    try {
        
    } catch (error) {
        console.log('error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        const {account} = await createAdminClient();
        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`
        );
        const session = await account.createSession(email, password);

        cookies().set('appwrite-session', session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
    } catch (error) {
        console.log('error', error);
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        return null;
    }
}
