import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'

const Course = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.INTEGER
    },
    idProfessor: {
        type: DataTypes.INTEGER
    }
})

export default Course;