import Firebase from 'firebase';
import config from './config';

const firebase = Firebase.initializeApp(config);
export default firebase;