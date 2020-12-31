module.exports = {
  future: 'all',
  experimental: 'all',
  purge: ['./src/**/*.tsx'],
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.4'),
          maxWidth: theme('screens.sm'),

          // Breakpoints
          '@screen sm': {
            maxWidth: theme('screens.sm'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
          },
        },
      })
    },
  ],
}
