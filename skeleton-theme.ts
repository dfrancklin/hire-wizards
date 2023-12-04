import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const defaultTheme: CustomThemeConfig = {
	name: 'default-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #00529e
		'--color-primary-50': '217 229 240', // #d9e5f0
		'--color-primary-100': '204 220 236', // #ccdcec
		'--color-primary-200': '191 212 231', // #bfd4e7
		'--color-primary-300': '153 186 216', // #99bad8
		'--color-primary-400': '77 134 187', // #4d86bb
		'--color-primary-500': '0 82 158', // #00529e
		'--color-primary-600': '0 74 142', // #004a8e
		'--color-primary-700': '0 62 119', // #003e77
		'--color-primary-800': '0 49 95', // #00315f
		'--color-primary-900': '0 40 77', // #00284d
		// secondary | #6e01b7
		'--color-secondary-50': '233 217 244', // #e9d9f4
		'--color-secondary-100': '226 204 241', // #e2ccf1
		'--color-secondary-200': '219 192 237', // #dbc0ed
		'--color-secondary-300': '197 153 226', // #c599e2
		'--color-secondary-400': '154 77 205', // #9a4dcd
		'--color-secondary-500': '110 1 183', // #6e01b7
		'--color-secondary-600': '99 1 165', // #6301a5
		'--color-secondary-700': '83 1 137', // #530189
		'--color-secondary-800': '66 1 110', // #42016e
		'--color-secondary-900': '54 0 90', // #36005a
		// tertiary | #dddddd
		'--color-tertiary-50': '250 250 250', // #fafafa
		'--color-tertiary-100': '248 248 248', // #f8f8f8
		'--color-tertiary-200': '247 247 247', // #f7f7f7
		'--color-tertiary-300': '241 241 241', // #f1f1f1
		'--color-tertiary-400': '231 231 231', // #e7e7e7
		'--color-tertiary-500': '221 221 221', // #dddddd
		'--color-tertiary-600': '199 199 199', // #c7c7c7
		'--color-tertiary-700': '166 166 166', // #a6a6a6
		'--color-tertiary-800': '133 133 133', // #858585
		'--color-tertiary-900': '108 108 108', // #6c6c6c
		// success | #186313
		'--color-success-50': '220 232 220', // #dce8dc
		'--color-success-100': '209 224 208', // #d1e0d0
		'--color-success-200': '197 216 196', // #c5d8c4
		'--color-success-300': '163 193 161', // #a3c1a1
		'--color-success-400': '93 146 90', // #5d925a
		'--color-success-500': '24 99 19', // #186313
		'--color-success-600': '22 89 17', // #165911
		'--color-success-700': '18 74 14', // #124a0e
		'--color-success-800': '14 59 11', // #0e3b0b
		'--color-success-900': '12 49 9', // #0c3109
		// warning | #eb7d00
		'--color-warning-50': '252 236 217', // #fcecd9
		'--color-warning-100': '251 229 204', // #fbe5cc
		'--color-warning-200': '250 223 191', // #fadfbf
		'--color-warning-300': '247 203 153', // #f7cb99
		'--color-warning-400': '241 164 77', // #f1a44d
		'--color-warning-500': '235 125 0', // #eb7d00
		'--color-warning-600': '212 113 0', // #d47100
		'--color-warning-700': '176 94 0', // #b05e00
		'--color-warning-800': '141 75 0', // #8d4b00
		'--color-warning-900': '115 61 0', // #733d00
		// error | #c40808
		'--color-error-50': '246 218 218', // #f6dada
		'--color-error-100': '243 206 206', // #f3cece
		'--color-error-200': '240 193 193', // #f0c1c1
		'--color-error-300': '231 156 156', // #e79c9c
		'--color-error-400': '214 82 82', // #d65252
		'--color-error-500': '196 8 8', // #c40808
		'--color-error-600': '176 7 7', // #b00707
		'--color-error-700': '147 6 6', // #930606
		'--color-error-800': '118 5 5', // #760505
		'--color-error-900': '96 4 4', // #600404
		// surface | #222222
		'--color-surface-50': '222 222 222', // #dedede
		'--color-surface-100': '211 211 211', // #d3d3d3
		'--color-surface-200': '200 200 200', // #c8c8c8
		'--color-surface-300': '167 167 167', // #a7a7a7
		'--color-surface-400': '100 100 100', // #646464
		'--color-surface-500': '34 34 34', // #222222
		'--color-surface-600': '31 31 31', // #1f1f1f
		'--color-surface-700': '26 26 26', // #1a1a1a
		'--color-surface-800': '20 20 20', // #141414
		'--color-surface-900': '17 17 17' // #111111
	}
};
