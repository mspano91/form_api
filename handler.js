const prisma = require("../client/prisma/db");

const handlerUser = async (req, res) => {
  try {
    const data = req.body;
    if (!data) return res.status(400).json("Faltan datos");

    // Guardar la información en la base de datos utilizando Prisma
    const newUser = await prisma.User.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect(); // Cerrar la conexión al finalizar
  }
};

const handlerGetUsers = async (req, res) => {
  try {
    // Recuperar todos los usuarios de la base de datos utilizando Prisma
    const allUsers = await prisma.user.findMany();

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect(); // Cerrar la conexión al finalizar
  }
};

module.exports = { handlerUser, handlerGetUsers };
