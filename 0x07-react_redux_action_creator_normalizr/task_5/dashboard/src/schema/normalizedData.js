import { normalize } from 'normalizr';
import { notification } from './notifications';

// Sample data
const data = [
  {
    id: '5debd7642e815cd350407777',
    author: '5debd764f8452ef92346c772',
    context: '3068c575-d619-40af-bf12-dece1ee18dd3',
  },
  // add other notifications...
];

// Normalize the data
const normalizedData = normalize(data, [notification]);

export default normalizedData;
