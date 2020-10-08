import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.baseFontSize = '18px'
const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography