const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  // SELECT * FROM posts;
  // return db('posts')
  // SELECT id, title, contents FROM posts;
  return db()
    .from('posts')
    .select('id as post_id', 'title', 'contents')
}

function getById(id) {
  // SELECT * FROM posts WHERE id = 1;
  // return db('posts').where({ id })
  return db('posts').where('id', id).first()
}

function create() {
  return Promise.resolve('create wired')
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
