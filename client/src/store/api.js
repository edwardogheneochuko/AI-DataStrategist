

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.diadata.org/v1/assetQuotation'
});
