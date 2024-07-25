import { schema } from 'normalizr';

// Define user schema
const user = new schema.Entity('users');

// Define message schema
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export { user, message, notification };
