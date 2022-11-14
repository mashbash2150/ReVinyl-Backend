require('dotenv').config()
module.exports = {
  development: {
    database: 'revinyl_development',
    dialect: 'postgres'
  },
  test: {
    database: 'revinyl_development',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}








// require('dotenv').config()
// module.exports={

//   development: {
//     database: 'revinyl_development',
//         // "host": "127.0.0.1",
//     dialect: 'postgres'
//   },
//   test: {
//     database:'revinyl_test',
//     dialect: 'postgres'
//   },
//   production: {
//     database: 'revinyl_production',
//     dialect: 'postgres',
//     dialectOptions:{
//       ssl:{
//         rejectUnauthorized:false,
//         require:true
//       }
//     }
    
//   }
// }
