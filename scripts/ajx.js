const userURI = 'https://jsonplaceholder.typicode.com/users'

let i = 0;

// fetch information
const getUser = async () => {
    try {
        const response = await fetch(userURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${(obj[i])}`);
        let user = obj[i];
        i++;
        i > 10 ? i = 0 : false;
        // return JSON.stringify(obj[0]);
        return user;

    } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithUser = async (event) => {
    try {
        document.querySelector('#result1').innerHTML = ''
        const answer = await getUser()
        document.querySelector('#result1').innerHTML = answer.name;
    } catch (error) { console.error(error) }
}

