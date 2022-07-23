//let userInput: unknown; //For Testing purposes

enum Role { ADMIN, USER, READ_ONLY } // Default roles

const person = {
    name: "John",
    age: 30,
    role: Role.ADMIN
}

function generateError(message: string, code: number) {
    if (typeof person.name === "undefined" || typeof person.age === "undefined" || typeof person.role === "undefined") {
        throw {message: message, errorcode: code}
    } else {
        if (person.role === Role.ADMIN) {
            console.log(person);
            console.log("is admin");
        } else {
            if (person.role === Role.USER) {
                console.log(person);
                console.log("is user");
            } else {
                if (person.role === Role.READ_ONLY) {
                    console.log(person);
                    console.log("is read only");
                }
            }
        }
    }
}

generateError("An Error has occurred", 500);
