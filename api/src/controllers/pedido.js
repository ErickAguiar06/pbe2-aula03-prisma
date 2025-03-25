const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const pedido = await prisma.pedido.create({
        data: req.body
    });
    res.status(201).json(pedido).end();
};

const read = async (req, res) => {
    const pedidos = await prisma.pedido.findMany({});
    res.json(pedidos);
};

const update = async (req, res) => {
    const { id } = req.params;
    const pedido = await prisma.pedido.update({
        where: { id: parseInt(id) },
        data: req.body
    });
    res.status(200).json(pedido).end();
};

const remove = async (req, res) => {
    const { id } = req.params;
    await prisma.pedido.delete({
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