import axios from 'axios';

import { baseURL } from '~constants/url';

const instance = axios.create({ baseURL });

export default instance;
