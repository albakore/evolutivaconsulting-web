import { extendTheme } from "@chakra-ui/react"
import "@fontsource/montserrat";

export const themeConfig = extendTheme(
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