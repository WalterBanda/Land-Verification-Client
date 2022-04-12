

export function requireAuthentication(serverProps) {
    return async (context) => {
        const {req} = context;

        const authenticated = fetch("/api/token", {
            headers: {
                Authorization: req.headers.authorization,
            }
        }).then((response) => {
            if (response.statusCode === 200) {
                return JSON.parse(response.body.toString())
            }
        }).catch((error) => {
            return { error: error }
        });

        if (!authenticated.verified || authenticated.error ) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/auth',
                },
            };
        }

        return await serverProps(context);
    };
}