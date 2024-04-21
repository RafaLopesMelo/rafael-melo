import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                main: {
                    400: '#2dd4bf',
                    500: '#14b8a6'
                }
            }
        },
        animation: {
            scaleIn: 'scaleIn 200ms ease',
            scaleOut: 'scaleOut 200ms ease',
            fadeIn: 'fadeIn 200ms ease',
            fadeOut: 'fadeOut 200ms ease'
        }
    },

    plugins: [
        plugin(({ matchUtilities }) => {
            matchUtilities({
                perspective: (value) => ({
                    perspective: value
                })
            });
        })
    ]
};
export default config;
