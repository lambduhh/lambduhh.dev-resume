/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
    theme: {
        extend: {
            colors: {
                'white': {
                    DEFAULT: '#FFFFFF',
                    100: '#333333',
                    200: '#666666',
                    300: '#999999',
                    400: '#cccccc',
                    500: '#ffffff',
                    600: '#ffffff',
                    700: '#ffffff',
                    800: '#ffffff',
                    900: '#ffffff'
                },
                'star': {
                    DEFAULT: '#FDD887',
                    100: '#4c3501',
                    200: '#996902',
                    300: '#e59e03',
                    400: '#fcbf3a',
                    500: '#fdd887',
                    600: '#fedf9f',
                    700: '#fee7b7',
                    800: '#feefcf',
                    900: '#fff7e7'
                },
                'pink': {
                    DEFAULT: '#E380B1',
                    100: '#3b0d24',
                    200: '#751a47',
                    300: '#b0276b',
                    400: '#d7478f',
                    500: '#e380b1',
                    600: '#e99bc2',
                    700: '#eeb4d1',
                    800: '#f4cde0',
                    900: '#f9e6f0'
                },
                'blue1': {
                    DEFAULT: '#0289D5',
                    100: '#001b2a',
                    200: '#013655',
                    300: '#01517f',
                    400: '#026caa',
                    500: '#0289d5',
                    600: '#15a8fd',
                    700: '#4fbdfd',
                    800: '#8ad3fe',
                    900: '#c4e9fe'
                },
                'purple1': {
                    DEFAULT: '#8758B8',
                    100: '#1b1026',
                    200: '#35204c',
                    300: '#503172',
                    400: '#6b4197',
                    500: '#8758b8',
                    600: '#9e79c5',
                    700: '#b69ad4',
                    800: '#cebce2',
                    900: '#e7ddf1'
                },
                'purple2': {
                    DEFAULT: '#3F2672',
                    100: '#0d0817',
                    200: '#1a0f2e',
                    300: '#261745',
                    400: '#331f5c',
                    500: '#3f2672',
                    600: '#5e38a8',
                    700: '#825ec9',
                    800: '#ac94db',
                    900: '#d5c9ed'
                },
                'blue2': {
                    DEFAULT: '#010B7D',
                    100: '#000219',
                    200: '#010532',
                    300: '#01074c',
                    400: '#010965',
                    500: '#010b7d',
                    600: '#0213ca',
                    700: '#1c2ffd',
                    800: '#6874fd',
                    900: '#b3bafe'
                },
                'indigo': {
                    DEFAULT: '#020047',
                    100: '#00000e',
                    200: '#01001d',
                    300: '#01002b',
                    400: '#020039',
                    500: '#020047',
                    600: '#05009f',
                    700: '#0800f7',
                    800: '#5550ff',
                    900: '#aaa7ff'
                },
                'mauve': {
                    DEFAULT: '#960A5F',
                    100: '#1e0213',
                    200: '#3b0425',
                    300: '#590638',
                    400: '#77084a',
                    500: '#960a5f',
                    600: '#d70e86',
                    700: '#f239a8',
                    800: '#f77bc5',
                    900: '#fbbde2'
                },
            },
            fontFamily: {
                'beaumont': ['TAN-BEAUMONT', 'serif'],
                'playfair': ['PlayfairDisplay', 'serif'],
                'custom-sans': ['system-ui', 'sans-serif'],
                'mono': ['Jetbrains Mono', 'monospace'],                
            }
        },
    },
    plugins: [],
};
