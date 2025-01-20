//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const config = require('./config.json');

// Add your routes here

router.get('/', (req, res) => {
    res.render('dashboard',
        {
            caseNumber: config.caseNumber,
            claimantName: config.claimantName,
            propertyAddress: config.propertyAddress,
            defendantName1: config.defendantName1,
            claimFee: config.claimFee,
        }
    );
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

router.get('/pay-fee', (req, res) => {
    res.render('pay-fee',
        {
            caseNumber: config.caseNumber,
            propertyAddress: config.propertyAddress,
            claimFee: config.claimFee,
        }
    );
});