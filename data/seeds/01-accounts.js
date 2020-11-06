
exports.seed = async function(knex) {
   await knex('accounts').insert([
      { name: 'account-01', owner: 'owner-01', balance: 4000.05 },
      { name: 'account-02', owner: 'owner-02', balance: 206.75 },
      { name: 'account-03', owner: 'owner-03', balance: 6789.76 },
      { name: 'account-04', owner: 'owner-04', balance: 199.99 },
      { name: 'account-05', owner: 'owner-05', balance: 22.34 },
      { name: 'account-06', owner: 'owner-06', balance: 300.12 },
      { name: 'account-07', owner: 'owner-07', balance: 7000.43 },
      { name: 'account-08', owner: 'owner-08', balance: 78800.32 },
      { name: 'account-09', owner: 'owner-09', balance: 3030.41 },
      { name: 'account-10', owner: 'owner-10', balance: 191.56 },
   ])
}