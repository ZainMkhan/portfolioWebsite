/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      background: '#C8D3D5',
    },
    screens: {
      nav:{
        'max' : '700px',
      },
      phone: {
        'min': '505px',
        'max': '1182px',
     },
     smPhone: {
      'max' : '505px'
     }
    },
    extend: {},
  },
  plugins: [],
}

