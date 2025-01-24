//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const config = require('./config.json');

// Add your routes here

router.get('/switch', (req, res) => {
    res.render('switch');
});

router.get('/', (req, res) => {
    res.render('dashboard',
        {
            caseNumber: config.caseNumber,
            claimantName: config.claimantName,
            propertyAddress: config.propertyAddress,
            defendantName1: config.defendantName1,
            defendantName2: config.defendantName2,
            claimFee: config.claimFee,
            applicationType: req.session.data['applicationType']
        }
    );
});

router.post('/update-prototype', (req, res) => {
    req.session.data['applicationType'] = req.body.applicationType;
    res.redirect('/');
});

router.get('/view-claimant', (req, res) => {
    res.render('view-information-about-the-claimant',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
            claimantName: config.claimantName,
            claimantAddress: config.claimantAddress
        }
    );
});

router.get('/view-the-claim', (req, res) => {
    res.render('view-the-claim',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress
        }
    );
});


router.get('/view-orders', (req, res) => {
    res.render('view-orders-and-notices',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress
        }
    );
});

router.get('/view-hearings', (req, res) => {
    res.render('view-hearings',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
        }
    );
});

router.get('/feedback', (req, res) => {
    res.render('feedback',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress
        }
    );
});

router.get('/pay-fee', (req, res) => {
    res.render('pay-fee',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
            claimFee: config.claimFee,
        }
    );
});

router.get('/upload-your-documents', (req, res) => {
    res.render('upload-documents',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
        }
    );
});

router.get('/select-your-documents', (req, res) => {
    res.render('select-your-documents',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
        }
    );
});

router.get('/submit-application-start', (req, res) => {
    res.render('submit-application-start');
});

router.get('/submit-application-language', (req, res) => {
    res.render('submit-application-language');
});

router.get('/submit-application-task-list', (req, res) => {
    res.render('submit-application-task-list');
});

router.get('/raise-query', (req, res) => {
    res.render('raise-a-query',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
            claimFee: config.claimFee,
        }
    );
});

router.get('/review-query-details', (req, res) => {
    res.render('review-query-details',
        {
            caseNumber: config.caseNumber,
            claimantName: config.claimantName,
            defendantName1: config.defendantName1,
        }
    );
});
