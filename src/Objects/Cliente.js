
class Client {
    clients = []

    constructor (id, name, email, pass, address) {
        this.id = id
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.address = address;
    }

    StoreClient(client) {
        this.clients.push(client)
        console.log('Cliente Cadastrado com Sucesso!')
    }

    ClientLogin(email, pass) {
        const account = this.clients.find((client) => client.email == email && client.pass == pass);
        console.log(account);
    }

    ShowClients() {
        return this.clients
    }

}

export default Client