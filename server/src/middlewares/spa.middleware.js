const path = require('path');

const spaHandler = (req, res, next) => {
    // Only handle GET requests that aren't for API or Admin
    if (req.method === 'GET' && !req.url.startsWith('/api') && !req.url.startsWith('/admin')) {
        const indexPath = path.resolve(__dirname, '../../', '../client/dist', 'index.html');
        return res.sendFile(indexPath, (err) => {
            if (err) {
                // If it's not production or index.html missing, just continue
                next();
            }
        });
    }
    next();
};

module.exports = spaHandler;
