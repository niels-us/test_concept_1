const modelProceso = require('../models/procesos');

const controller = {

    get: (req, res) => {

        modelProceso.find(function (error, data) {
            if (error)
                res.status(500).send("error : " + error);
            res.json(data);
        })


    },

    post: (req, res) => {

        const proceso = new modelProceso();
        const data = req.body;

        proceso.nombre = data.nombre;
        proceso.fecha_inicio = data.fecha_inicio;
        proceso.fecha_cierre = data.fecha_cierre;
        proceso.tipo_proceso = data.tipo_proceso;
        proceso.usuario_creacion = data.usuario_creacion;
        proceso.fecha_actualizacion = data.fecha_actualizacion;
        proceso.fecha_creacion = data.fecha_creacion;
        proceso.usuario_actualizacion = data.usuario_actualizacion;
        proceso.estado_proceso = data.estado_proceso;

        proceso.save(function (error) {
            if (error)
                res.status(500).send("error :" + error);
            res.json({ mensaje: "proceso registrado" });
        })
    },

    put: async (req, res) => {
        try {
            const proceso = await modelProceso.findOne({ _id: req.params.id })

            if (req.body.nombre) {
                proceso.nombre = req.body.nombre
            }
            if (req.body.fecha_inicio) {
                proceso.fecha_inicio = req.body.fecha_inicio;
            }
            if (req.body.fecha_cierre) {
                proceso.fecha_cierre = req.body.fecha_cierre;
            }
            if (req.body.tipo_proceso) {
                proceso.tipo_proceso = req.body.tipo_proceso;
            }
            if (req.body.usuario_creacion) {
                proceso.usuario_creacion = req.body.usuario_creacion;
            }
            if (req.body.fecha_actualizacion) {
                proceso.fecha_actualizacion = req.body.fecha_actualizacion;
            }
            if (req.body.fecha_creacion) {
                proceso.fecha_creacion = req.body.fecha_creacion;
            }
            if (req.body.usuario_actualizacion) {
                proceso.usuario_actualizacion = req.body.usuario_actualizacion;
            }
            if (req.body.estado_proceso) {
                proceso.estado_proceso = req.body.estado_proceso;
            }

            await proceso.save()
            res.json({ mensaje: "proceso actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "proceso no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelProceso.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "proceso eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "proceso no existe" })
        }

    }
}

module.exports = controller;