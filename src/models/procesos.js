const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcesoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        fecha_inicio: {
            type: Date,
            required: true
        },
        fecha_cierre: {
            type: Date,
            required: true
        },
        tipo_proceso: {
            type: String,
            required: true
        },
        usuario_creacion: {
            type: String,
            required: true
        },
        fecha_actualizacion: {
            type: Date,
            required: true
        },
        fecha_creacion: {
            type: Date,
            required: true
        },
        usuario_actualizacion: {
            type: String,
            required: true
        },
        estado_proceso: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('proceso', ProcesoSchema);
