
interface UserProps {
    id: number;
    name: string;
}

const FetchPage = async() => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: {
            revalidate: 10 // Runs this very 10 second
        },
        // cache: "no-store" // Doesn't store data in the browser
    });
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