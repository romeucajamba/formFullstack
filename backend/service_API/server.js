const fastify = require("fastify");

const server = fastify({ logger: true });

server.register(require('@fastify/mysql'), {
    connectionString: 'mysql://root:root@localhost:3306/gscformtest'
});

server.register(require('@fastify/cors'), {
    origin: '*',
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Accept",
        "Content-Type",
        "Autorization",
    ],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"]
})

server.post('/login', (request, reply) => {
    const { email, nickname } = request.body;
    server.mysql.query(`SELECT id FROM signup WHERE email = ? AND nickname = ?`, [email, nickname],
        function sendData(error, result) {
            if (error) {
                reply.send(error);
            } else {
                reply.send( 'usuario existe', result);
            }
        }
    );
});

server.post('/signup', (request, reply) => {
    
    server.mysql.query(`INSERT INTO signup(name, nickname, password, email) 
                        VALUES('${request.body.name}', '${request.body.nickname}', '${request.body.password}', '${request.body.email}')`, 
        function sendData(error, result) {
            if (error) {
                reply.send(error);
            } else {
                reply.send(result);
            }
        }
    );
});

server.get('/users', (request, reply) => {
    server.mysql.query('SELECT * FROM signup',
        function responseQuery(error, result) {
            if (error) {
                reply.send(error);
            } else {
                reply.send(result);
            }
        }
    );
});

server.listen({ port: 3000 });
