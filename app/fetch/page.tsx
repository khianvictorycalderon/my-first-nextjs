
interface UserProps {
    id: number;
    name: string;
}

const FetchPage = async() => {
    
    const res = await fetch("http://localhost:3000/api/users", {
        next: {
            revalidate: 10 // Runs this very 10 second
        },
        // Adding this forces this page to be rendered on the server side
        cache: "no-store" // Doesn't store data in the browser
    });
    const users: UserProps[] = await res.json();

    return (
        <>
            <h1>Fetched Users:</h1>
            <p>{new Date().toLocaleTimeString()}</p>
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