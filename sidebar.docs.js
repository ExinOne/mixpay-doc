module.exports = {
  docs: [
    "introduction",
    {
      label: 'Getting started',
      type: 'category',
      collapsed: false,
      items: [
        'started/getting_started',
        'started/create_transfer',
        'started/on_chain_transfer',
        'started/get_payment_result',
        'started/all_assets',
        'started/all_valuation_method',
      ]
    },
    {
      label: 'Easier Way?',
      type: 'category',
      collapsed: false,
      items: [
        'easier_way/easier_way',
        'easier_way/qr_code',
        'easier_way/get_short_link',
      ]
    },
    {
      label: 'Global Error',
      type: 'category',
      collapsed: false,
      items: [
        'global_error/response',
        'global_error/memo',
      ]
    },
    "withdrawal",
  ]
};
