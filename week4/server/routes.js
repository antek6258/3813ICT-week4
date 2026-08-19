class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }

}

const users = [
    new User(
        "Anna",
        "1999-12-28",
        26,
        "anna@test.com",
        "1234",
        true
    ),

    new User(
        "Otter",
        "1901-05-15",
        125,
        "otter@email.com",
        "password",
        true
    ),

    new User(
        "Admin",
        "1990-10-20",
        35,
        "admin@test.com",
        "admin",
        true
    )
];

function authRoute(app) {

    app.post("/api/auth", (req, res) => {

        const { email, password } = req.body;

        const user = users.find(
            user =>
                user.email === email &&
                user.password === password
        );

        if (user) {

            res.json({
                username: user.username,
                birthdate: user.birthdate,
                age: user.age,
                email: user.email,
                valid: true
            });

        } else {

            res.json({
                valid: false
            });

        }

    });

}

export { authRoute };