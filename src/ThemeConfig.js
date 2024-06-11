import { extendTheme } from "@chakra-ui/react"
import "@fontsource/montserrat";

export const ThemeConfig = extendTheme(
	{
		//colors: {...},
		fonts: {
			base: `'Montserrat', sans-serif`,
			body: `'Montserrat', sans-serif`,
			heading: `'Montserrat', sans-serif`,
			mono: `'Montserrat', sans-serif`,
		},
	}
)

export default ThemeConfig