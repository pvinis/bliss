module.exports = {
    env: {
        'es6': true,
        'node': true
    },
    parser: '@typescript-eslint/parser',
    'parserOptions': {
        project: './tsconfig.json',
        'ecmaFeatures': {
            'jsx': true
        },
    },
    'plugins': [
        '@typescript-eslint',
        'react' 
    ],
    extends: ['plugin:@typescript-eslint/recommended'],
    'rules': {
        '@typescript-eslint/indent': ['error', 4],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
