export const tokensDark = {
    blue: {
        50: "#fffffff",
        100: "#e3e8ff",
        200: "#c8d1fe",
        300: "#acb9fe",
        400: "#91a2fd",
        500: "#3b5bfc",
        600: "#5e6fca",
        700: "#465398",
        800: "#2f3865",
        900: "#171c33"
    },

    primary: {
        100: "#edf1ff",
        200: "#a7afff",
        300: "#7c86ff",
        400: "#505eff",
        500: "#2436ff",
        600: "#1d2bcc",
        700: "#162099",
        800: "#0e1666",
        900: "#070b33"
    },
    secondary: {
        100: "#fff7cc",
        200: "#ffee99",
        300: "#ffe666",
        400: "#ffdd33",
        500: "#ffd500",
        600: "#ccaa00",
        700: "#998000",
        800: "#665500",
        900: "#332b00"
    }

}

const reverseTokens = (token) => {
    const reversedTokens = {}
    Object.entries(token).forEach(([key, val]) => {
        const keys = Object.keys(val)
        const values = Object.values(val)
        const reversedObject = {}
        for (let i = 0; i < keys.length; i++) {
            reversedObject[keys[i]] = values[keys.length - i - 1]
        }
        reversedTokens[key] = reversedObject
    });
    return reversedTokens
}

export const tokensLight = reverseTokens(tokensDark)

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark')
                ? {
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[100],
                        light: tokensDark.primary[400]
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[500]
                    },
                    background: {
                        default: tokensDark.primary[900]
                    }
                } : {
                    primary: {
                        ...tokensLight.primary,
                        main: tokensLight.primary[200],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensLight.secondary[500]
                    },
                    background: {
                        default: tokensDark.primary[50]
                    }
                }
        }
    }
}