const prisma = require('../prisma/prismaClient');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class Rider {
  async login(req, res) {}
  async register(req, res) {}
}

module.exports = new Rider();
