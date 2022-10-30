/*
All the realtions between tables has to be declared and defined in this file
*/

//user_profile --- {one-one}-----credentials
user_profile.hasOne(credentials,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
credentials.belongsTo(user_profile, {
    foreignKey:{
        name:'user_id',
        allowNull: false
    }
});

//user_profile --- {many-one}-----sessions
user_profile.hasMany(sessions,{
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});
sessions.belongsTo(user_profile,{
    foreignKey:{
        name:'user_id',
        allowNull: false
    }
});

//sessions --- {one-one}-----user_activity
sessions.hasOne(user_activity,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
user_activity.belongsTo(sessions,{
    foreignKey:{
        name:'session_id',
        allowNull: false
    }
});




  

