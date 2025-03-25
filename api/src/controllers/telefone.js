const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const telefone = await prisma.telefone.create({
        data: req.body
    });
    res.status(201).json(telefone).end();
};

const read = async (req, res) => {
    const telefones = await prisma.telefone.findMany({});
    res.json(telefones);
};

const update = async (req, res) => {
    const { id } = req.params;
    const telefone = await prisma.telefone.update({
        where: { id: parseInt(id) },
        data: req.body
    });
    res.status(200).json(telefone).end();
};

const remove = async (req, res) => {
    const { id } = req.params;
    await prisma.telefone.delete({
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