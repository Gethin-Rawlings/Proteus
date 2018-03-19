const dbConfig = {
    development: {
       
        user: 'rest',
        password: 'Password01',
        server: '172.17.0.1', 
        
        database: 'Proteustraining',

        
        
    },
    production: {
        user: 'rest',
        password: 'password',
        server: 'GETHIN', 
        database: 'Proteus'
    }
    };
    module.exports = dbConfig;