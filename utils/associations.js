/*
All the realtions between tables has to be declared and defined in this file
*/
const Sequelize=require("sequelize");
const sequelize = require("../utils/db_connection");
const db={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user_profile = require("../models/user_profile")(sequelize, Sequelize);
db.credentials = require("./models/credentials")(sequelize, Sequelize);
db.user_activity = require("../models/user_activity")(sequelize, Sequelize);
db.sessions = require("./models/sessions")(sequelize, Sequelize);
//user_profile --- {one-one}-----credentials
db.user_profile.hasOne(credentials,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
db.credentials.belongsTo(user_profile, {
    foreignKey:{
        name:'user_id',
        allowNull: false
    }
});

//user_profile --- {many-one}-----sessions
db.user_profile.hasMany(sessions,{
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
db.sessions.belongsTo(user_profile,{
    foreignKey:{
        name:'user_id',
        allowNull: false
    }
});

//sessions --- {one-one}-----user_activity
db.sessions.hasOne(user_activity,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
db.user_activity.belongsTo(sessions,{
    foreignKey:{
        name:'session_id',
        allowNull: false
    }
});

module.exports=db;


  

