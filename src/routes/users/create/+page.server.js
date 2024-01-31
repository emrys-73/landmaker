/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit';
const { randomBytes } = await import('node:crypto')

export const load = ({ locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login')
    }
}

const generateUsername = (/** @type {string | any[]} */ name) => {
    const id = randomBytes(2).toString('hex')
    if (name.length > 3 ) {
        return `${name.slice(0, 5)}${id}`
    } else {
        return `${name}${id}`
    }
}

export const actions = {
    

    createUser: async ({ request, locals, params }) => {
        const data = Object.fromEntries(await request.formData()); 

        const username = generateUsername(data.full_name);

        let newUser_path = "/users"

        try {
            
            const newUser = {
                "full_name": data.full_name,
                "username": username,
                "email": undefined,
                "stage": "backlog",
                "bg_color": undefined,
                "bio": data.bio,
                "links": undefined,
                "darkMode": true,
                "lm_user": undefined,
                "astraltaID": undefined,
            };
            
            const record = await locals.pb.collection('2_lm_prospects').create(newUser);

            newUser_path = `/users/${record.id}/edit`

        

        } catch (error) {
            console.log(error)
        }

        throw redirect(303, newUser_path);

    }




}