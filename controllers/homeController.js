const homeController = {
    index: (req, res) => {
        let servicos = [{
                nome: 'Desenvolvimento Web',
                imagem: '/imagens/undraw_dev_focus.svg'
            },
            {
                nome: 'Marketing Digital',
                imagem: '/imagens/undraw_social_dashboard.svg'
            },
            {
                nome: 'Consultoria UX',
                imagem: '/imagens/undraw_mobile_apps.svg'
            }
        ];

        let banners = [
            '/imagens/banner2.jpg',
            '/imagens/fullstack-logo.jpg'
        ];
        res.render('index', {
            title: 'Home',
            listaServicos: servicos,
            listaBanners: banners
        });
    },
    contato: (req, res) => {
        let {
            nome,
            email,
            mensagem
        } = req.body;

        res.render('contato', {
            nome,
            email,
            mensagem,
            title: 'Contato'
        });
    },
    newsletter: (req, res) => {
        let {
            nome,
            email
        } = req.body;

        res.render('newsletter', {
            nome,
            email,
            title: 'Newslettter'
        });
    }
};

module.exports = homeController;