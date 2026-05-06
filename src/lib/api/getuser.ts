export type NikobotUser = {
    id: string;
    username: string;
    global_name: string;
    description: string;
    avatar: string;
};

export async function getUser(
    useSSR: boolean = true,
    session?: string,
): Promise<NikobotUser | null> {
    const url = `${import.meta.env.PUBLIC_API_URL}/users/v1/@me`;

    const fetchOptions: any = useSSR ? {headers: { cookie: session ?? "", }} : {credentials: "include"};

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
        return null;
    }

    return (await res.json()) as NikobotUser;
}

export async function getBot(): Promise<NikobotUser | null> {
    const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/users/v1/bot`);

    if (!res.ok) {
        return null;
    }

    return (await res.json()) as NikobotUser;
}
