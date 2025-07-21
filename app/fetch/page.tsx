
interface UserProps {
    id: number;
    name: string;
}

const FetchPage = async() => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return (
        <>
            <h1>Fetched Users:</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchPage;