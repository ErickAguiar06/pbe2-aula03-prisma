const { PrismaClient } = require('@prisma/client');
const { del } = require('./pedido');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const cliente = await prisma.cliente.create({
        data: req.body
    });
    res.status(201).json(cliente).end();
};

const read = async (req, res) => {
    const clientes = await prisma.cliente.findMany({});
    res.json(clientes);
};

const update = async (req, res) => {
    const { id } = req.params;
    const cliente = await prisma.cliente.update({
        where: { id: parseInt(id) },
        data: req.body
    });
    res.status(200).json(cliente).end();
};

const remove = async (req, res) => {
    const { id } = req.params;
    await prisma.cliente.delete({
        where: { id: parseInt(id) }
    });
    res.status(204).end();
};

module.exports = {
    create,
    read,
    update,
    remove
};