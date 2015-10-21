(function() {
	'use strict';

	module.exports = {
		"lint": {
			"rules": {
				"html": {
					"gateway": {
						"doctype-first": true,
						"tag-pair": true,
						"tag-self-close": true,
						"id-unique": true,
						"attr-lowercase": true,
						"doctype-html5": true,
						"head-script-disabled": true
					},
					"templates": {
						"doctype-first": false,
						"tag-pair": true,
						"tag-self-close": true,
						"id-unique": true,
						"attr-lowercase": true,
						"doctype-html5": false,
						"head-script-disabled": true
					}
				},
				"css": {
					"ids": false,
					"overqualified-elements": false,
					"important": false,
					"adjoining-classes": false,
					"known-properties": false,
					"box-sizing": false,
					"box-model": false,
					"display-property-grouping": false,
					"bulletproof-font-face": false,
					"compatible-vendor-prefixes": false,
					"regex-selectors": false,
					"errors": false,
					"duplicate-background-images": false,
					"duplicate-properties": false,
					"empty-rules": false,
					"selector-max-approaching": false,
					"gradients": false,
					"fallback-colors": false,
					"font-sizes": false,
					"font-faces": false,
					"floats": false,
					"star-property-hack": false,
					"outline-none": false,
					"import": false,
					"underscore-property-hack": false,
					"rules-count": false,
					"qualified-headings": false,
					"selector-max": false,
					"shorthand": false,
					"text-indent": false,
					"unique-headings": false,
					"universal-selector": false,
					"unqualified-attributes": false,
					"vendor-prefix": true,
					"zero-units": false
				},
				"js": {
					"indent": [2, 4, {
						"SwitchCase": 1
					}],
					"block-spacing": 2,
					"brace-style": [2, "1tbs"],
					"camelcase": [2, {
						"properties": "never"
					}],
					"callback-return": [2, ["cb", "callback", "next"]],
					"comma-spacing": 2,
					"comma-style": [2, "last"],
					"consistent-return": 2,
					"curly": [2, "all"],
					"default-case": 2,
					"dot-notation": [2, {
						"allowKeywords": true
					}],
					"eol-last": 2,
					"eqeqeq": 2,
					"func-style": [2, "declaration"],
					"guard-for-in": 2,
					"key-spacing": [2, {
						"beforeColon": false,
						"afterColon": true
					}],
					"new-cap": 2,
					"new-parens": 2,
					"no-alert": 2,
					"no-array-constructor": 2,
					"no-caller": 2,
					"no-console": 0,
					"no-delete-var": 2,
					"no-empty-label": 2,
					"no-eval": 2,
					"no-extend-native": 2,
					"no-extra-bind": 2,
					"no-fallthrough": 2,
					"no-floating-decimal": 2,
					"no-implied-eval": 2,
					"no-invalid-this": 2,
					"no-iterator": 2,
					"no-label-var": 2,
					"no-labels": 2,
					"no-lone-blocks": 2,
					"no-loop-func": 2,
					"no-mixed-spaces-and-tabs": [2, false],
					"no-multi-spaces": 2,
					"no-multi-str": 2,
					"no-native-reassign": 2,
					"no-nested-ternary": 2,
					"no-new": 2,
					"no-new-func": 2,
					"no-new-object": 2,
					"no-new-wrappers": 2,
					"no-octal": 2,
					"no-octal-escape": 2,
					"no-process-exit": 2,
					"no-proto": 2,
					"no-redeclare": 2,
					"no-return-assign": 2,
					"no-script-url": 2,
					"no-sequences": 2,
					"no-shadow": 2,
					"no-shadow-restricted-names": 2,
					"no-spaced-func": 2,
					"no-trailing-spaces": 2,
					"no-undef": 2,
					"no-undef-init": 2,
					"no-undefined": 2,
					"no-underscore-dangle": 2,
					"no-unused-expressions": 2,
					"no-unused-vars": [2, {
						"vars": "all",
						"args": "after-used"
					}],
					"no-use-before-define": 2,
					"no-useless-concat": 2,
					"no-with": 2,
					"quotes": [2, "double"],
					"radix": 2,
					"require-jsdoc": 2,
					"semi": 2,
					"semi-spacing": [2, {
						"before": false,
						"after": true
					}],
					"space-after-keywords": [2, "always"],
					"space-before-blocks": 2,
					"space-before-function-paren": [2, "never"],
					"space-infix-ops": 2,
					"space-return-throw-case": 2,
					"space-unary-ops": [2, {
						"words": true,
						"nonwords": false
					}],
					"spaced-comment": [2, "always", {
						"exceptions": ["-"]
					}],
					"strict": [2, "global"],
					"valid-jsdoc": [2, {
						"prefer": {
							"return": "returns"
						}
					}],
					"wrap-iife": 2,
					"yoda": [2, "never"]
				},
				"jscs": {
					"disallowMultipleVarDecl": false,
					"disallowSpacesInsideObjectBrackets": true
				}
			}
		},
		"build": {
			"rules": {
				"html": {
					"collapseWhitespace": true
				}
			}
		}
	};
})();