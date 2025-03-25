import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
     
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      
      semi: ['error'],
       
      quotes: ['error', 'single'],
       
      'prefer-template': ['error'],
      
      'prefer-arrow-callback': ['error'],
 
      'consistent-return': 'error',
      
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
       
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
    },
  }),
];

export default eslintConfig;
