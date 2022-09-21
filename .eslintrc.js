module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: ["plugin:vue/recommended", "eslint:recommended"], // Utilise par défaut les règles recommandées de vue (eslint) et eslint

	rules: {
		"vue/no-unused-components": "off",
		"no-var": "error", // Pas de var
		"semi": "error", // point virgule en fin de ligne obligatoire
		"no-unused-vars": ["error", { args: "after-used" }], // Pas de variable inutilisée, les arguments doivent être utilisés sauf si ils précèdent un argument utilisé dans la définition de la méthode
		"array-bracket-spacing": ["error", "never"], // Pas d'espace autour des crochets des tableaux
		"block-spacing": ["error", "always"], // Toujours des espaces autour des accolades
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		"comma-spacing": "error",
		"computed-property-spacing": "error",
		"func-call-spacing": "error",
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "windows"],
		"one-var-declaration-per-line": "error",
		"quotes": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"no-multi-spaces": "error",
		//il doit y avoir un saut de ligne après une déclaration --fix
		"newline-after-var": 2,
		//espacement entre les mot clef et accolade
		"keyword-spacing": ["error", { "before": true, "after": true }]
	},

	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 8,
		sourceType: "module"
	},

	ignorePatterns: ["dist/*"],
};
