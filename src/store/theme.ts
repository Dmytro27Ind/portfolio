import { createSlice } from '@reduxjs/toolkit'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
console.log('defaultTheme: ' + defaultTheme)

const themeSlice = createSlice({
    name: 'theme',
    initialState: { theme: localStorage.getItem('theme') || defaultTheme },
    reducers: {
        setDark(state) {
            state.theme = 'dark'
            localStorage.setItem('theme', 'dark')
        },
        setLight(state) {
            state.theme = 'light'
            localStorage.setItem('theme', 'light')
        },
    },
})

const { actions, reducer: themeReducer } = themeSlice

export const { setDark, setLight } = actions
export default themeReducer