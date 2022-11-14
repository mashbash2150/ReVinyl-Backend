require('dotenv').config()
module.exports={

  development: {
    database: 'revinyl_development',
    dialect: 'postgres'
  },
  test: {
    database:'revinyl_test',
    dialect: 'postgres'
  },
  production: {
    database: 'revinyl_production',
    dialect: 'postgres',
    dialectOptions:{
      ssl:{
        rejectUnauthorized:false,
        require:true
      }
    }
    
  }
}
