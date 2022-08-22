let app = require("../src/index.js");
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {name: "Maurício", email: "maurrici@gmail.com", password: "123456"};

beforeAll(() => {
    return request.post("/user").send(mainUser)
    .then(res => {})
    .catch(error => console.log(error));
});

afterAll(() => {
    return request.delete(`/user/${mainUser.email}`)
    .then(res => {})
    .catch(error => console.log(error));
});

describe("Cadastro de Usuário", () => {
    test("Deve cadastrar um usuário com sucesso", () => {
        let email = Date.now() + "@gmail.com";
        let user = {name: "Victor", email, password: "123456"}

        return request.post("/user").send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch(error => {
            fail(error);
        });
    });

    test("Deve impedir o cadastro com dados vazios", () => {
        let user = {name: "", email: "", password: ""}

        return request.post("/user").send(user)
        .then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(error => {
            throw new Error(error);
        });
    });

    test("Deve impedir que um usuário seja cadastrado com um email já existente", () => {
        let email = Date.now() + "@gmail.com";
        let user = {name: "Maurício", email, password: "123456"}

        return request.post("/user").send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);

            return request.post("/user").send(user)
            .then(res => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.message).toEqual("Email já cadastrado!");
            })
            .catch(error => {
                throw new Error(error);
            });
        }).catch(error => {
            throw new Error(error);
        });
    });
});

describe("Autenticação de Usuário", () => {
    test("Deve me retornar um token ao se logar", () => {
        return request.post("/login").send({email: mainUser.email, password: mainUser.password})
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.token).toBeDefined();
        })
        .catch(error => {
            throw new Error(error);
        })
    });

    test("Deve impedir que um usuário não cadastrado se logue", () => {
        return request.post("/login").send({email: "teste", password: "teste"})
        .then(res => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.message).toEqual("Email não cadastrado!");
        })
        .catch(error => {
            throw new Error(error);
        });
    });

    test("Deve impedir que um usuário se logue com uma senha inválida", () => {
        return request.post("/login").send({email: mainUser.email, password: "teste"})
        .then(res => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.message).toEqual("Senha incorreta!");
        })
        .catch(error => {
            throw new Error(error);
        });
    });
});