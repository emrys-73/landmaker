/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { getImageURL } from '$lib/utils.ts';

export const load = async ({ locals, params }) => {
    const getUser = async () => {
        try {
            const user = await locals.pb.collection('landmaker').getFirstListItem(`id="${params.userId}"`)

            user.cover_url = user.cover ?  getImageURL(user.collectionId, user.id, user.cover) : undefined

            return user;

        } catch (error) {
            console.log("Error retrieving user")
        }
    }

    return {
        user: await getUser(),
    }
}
