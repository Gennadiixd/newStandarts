let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = employers.filter((el) => el.length > 0)

employersNames = employersNames.map((el) => el.toLowerCase().trim())

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

calcCash = ({
    own = 0,
    sponsorsCash = 0
} = {}) => {
    let total = own;
    for (let i = 0; i < sponsorsCash.length; i++) {
        total += +sponsorsCash[i];
    }
    return total;
}

let money = calcCash({ sponsorsCash: sponsors.cash });

makeBusiness = ({
    director = 'Victor',
    owner,
    cash,
    emp,
} = {}) => {
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
        emp);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}

makeBusiness({ owner: 'Sam', cash: money, emp: employersNames });


function connect({ path = 'path', user = 'admin' } = {}) {
    console.log(user)
}

connect({ user: 'lll' })