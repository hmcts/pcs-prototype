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


addFilter('date', (relativeDays = 0) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + relativeDays);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return currentDate.toLocaleDateString('en-GB', options);
});

addFilter('longDate', (relativeDays = 0) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + relativeDays);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString('en-GB', options);
});

addFilter('numericDate', (relativeDays = 0) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + relativeDays);
    const options = { day: '2-digit', month: 'numeric', year: 'numeric' };
    return currentDate.toLocaleDateString('en-GB', options);
});
