const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

router.get('/test', (req, res) => res.send('Тест'));

router.get('/', (req, res) => {
  Post.find()
    .then(posts=> res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'пост не найден' }));
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'пост не найден' }));
});

router.post('/', (req, res) => {
  Post.create(req.body)
    .then(post => res.json({ msg: 'пост создан' }))
    .catch(err => res.status(400).json({ error: 'невоможно добавить' }));
});

router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => res.json({ msg: 'отредактировано' }))
    .catch(err =>
      res.status(400).json({ error: 'невозможно отредактировать' })
    );
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, req.body)
    .then(post => res.json({ mgs: 'пост удален' }))
    .catch(err => res.status(404).json({ error: 'такого поста не существует' }));
});

module.exports = router;