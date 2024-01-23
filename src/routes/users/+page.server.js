/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


export const load = async ({ locals }) => {
    const getUsers = async () => {
        try {
            const users = await locals.pb.collection('landmaker').getFullList({
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