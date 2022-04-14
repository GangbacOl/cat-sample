import axios from 'axios';

import { baseURL } from '@contants/url';

const instance = axios.create({ baseURL });

export default instance;
