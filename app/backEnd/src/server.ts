import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

new app().start(PORT);