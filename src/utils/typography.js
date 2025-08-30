import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '22px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Nunito Sans', 'Arial', 'sans-serif'],
    headerWeight: 900,
    bodyFontFamily: ['Montserrat', 'serif'],
    googleFonts: [
        {
            name: 'Lato',
            styles: ['400', '900'],
        },
        {
            name: 'Nunito Sans',
            styles: ['400', '700', '900'],
        },
        {
            name: 'Montserrat',
            styles: ['400', '700'],
        },
    ],
})

export const { scale, rhythm, options } = typography
export default typography
