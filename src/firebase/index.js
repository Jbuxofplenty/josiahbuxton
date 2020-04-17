import { devConfig } from './config';
import firebase from 'firebase';

var fire = firebase.initializeApp(devConfig);
export default fire;
