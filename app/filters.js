//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('splitAddress', (address) => {
    if (!address) return '';
    const addressParts = address.split(',');
    return addressParts.join('<br>');
});

