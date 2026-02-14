class HomeController {
    async getInfo(req, res) {
        res.json({
            status: 'success',
            message: 'LifeLine + API is running',
            data: {
                name: 'LifeLine +',
                version: '1.0.0'
            }
        });
    }
}

module.exports = new HomeController();
