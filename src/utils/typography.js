import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '22px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Lato', 'Arial', 'sans-serif'],
    headerWeight: 900,
    bodyFontFamily: ['Lato', 'serif'],
    googleFonts: [
        {
          name: 'Lato',
          styles: [
            '400',
            '900'
          ],
        },
      ],
  })

export const { scale, rhythm, options } = typography
export default typography