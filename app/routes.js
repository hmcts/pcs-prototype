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
            defendantName1: config.defendantName1
        }
    );
});