const helmet = require('helmet');
const cors = require('cors');

const configureSecurity = (app) => {
    // Helmet CSP Configuration
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                "default-src": ["'self'"],
                "script-src": ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://startbootstrap.github.io"],
                "style-src": ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://fonts.googleapis.com", "https://startbootstrap.github.io"],
                "font-src": ["'self'", "https://cdnjs.cloudflare.com", "https://fonts.gstatic.com"],
                "img-src": ["'self'", "data:", "https://source.unsplash.com", "https://images.unsplash.com"],
                "connect-src": ["'self'"],
            },
        },
    }));

    // CORS Configuration
    app.use(cors({
        origin: process.env.FRONTEND_HOST || 'http://localhost:5173',
        credentials: true
    }));
};

module.exports = configureSecurity;
