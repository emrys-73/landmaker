/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'


export const load = async ({ locals }) => {

    if (!locals.user) {
        throw redirect(303, '/login')
    }

    const getUsers = async () => {
        try {
            const users = await locals.pb.collection('2_lm_prospects').getFullList({
                sort: '-created',
            })

            return users;

        } catch (error) {
            console.log("Error retrieving users")
        }

    }


    return {
        userList: await getUsers(),
    }
}
