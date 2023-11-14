import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'ieeeorange': '#FFC72C',
        'ieeeyellow': '#FFA300',
        'ieeegray': 'white',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;