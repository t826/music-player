export async function handle({ request, resolve }) {
	request.locals.user = {
        username: "",
        password: ""
    };
	request.locals.musicListJson = {data: ""};

	return await resolve(request);
}

export function getSession(request) {
	return {
		user: request.locals.user,
		musicListJson: request.locals.musicListJson
	};
}