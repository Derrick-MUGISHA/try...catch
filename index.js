// try {
    
// } catch (error) {
    
// } these is a Asynchronous function or operation


// async / await 


class User {
    constructor(id, name, username, email, city, street, phone, website) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {city: city, street: street};
        this.phone = phone;
        this.website = website;
    }
}

async function fetchUser() {
    try {

        // ======== Fetching ==========
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error : ${response.status}`);
        }
        const data = await response.json();
        
        
        //  ===== Construct Data from the Api ========
        const constructedData = data.map(user => {
            return new User(
                user.id,
                user.name,
                user.username,
                user.email,
                user.address.city,
                user.address.street,
                user.phone,
                user.website,
            );
        });

        return constructedData;        
    } catch (error) {
        console.error('Error fetching user:', error.message);
    }
}


//  ======== destructuring ======
async function displayUsers() {
    const users = await fetchUser();

    for (const user of users) {
        const { name, email, city, phone, website } = user;  // destructuring

        console.log('----- User INFO -----');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`City: ${city}`);
        console.log(`Phone: ${phone}`);
        console.log(`Website: ${website}`);
        console.log('---');
    }
}

displayUsers();