const dbConfig = {
    development: {
       
        user: 'rest',
        password: 'password',
        server: 'BBCDBMSR163', 
        port: '64598',
        database: 'Proteusdev',
        
        
    },
    production: {
        user: 'rest',
        password: 'password',
        server: 'GETHIN', 
        database: 'Proteus'
    }
    };
    module.exports = dbConfig;