module.exports = {
    content: ["./*.{html,js,vue}", "./src/**/*.{html,js,vue}"],
    theme: {
      extend: {
        animation: {
          tilt: 'tilt 0.5s 1',
          grow: 'grow 0.5s 1'
        },
        keyframes: {
          tilt: {
            '0%, 100%': {
              transform: 'rotate(7deg)'
            },
            '50%': {
              transform: 'rotate(-7deg)'
            }
          },
          grow: {
            '100%': {
              transform: 'scale(1.2)'
            }
          }
        }
      },
    },
    plugins: [],
    darkMode: 'class'
  }
  