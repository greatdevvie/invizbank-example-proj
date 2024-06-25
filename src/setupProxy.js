import * as express from 'express';
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use('/apiGecko', createProxyMiddleware({
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api/v3/simple/price?ids=bitcoin,ethereum,monero,the-open-network,litecoin&vs_currencies=usd',
        },
        onProxyReq: (proxyReq, req, res) => {
            proxyReq.setHeader('Origin', 'https://api.coingecko.com');
        },
    })
);