module.exports =
[
	...require('@isnotdefined/eslint-config/common'),
	...require('@isnotdefined/eslint-config/jest'),
	...
	[
		{
			'plugins':
			{
				'@typescript-eslint': require('@typescript-eslint/eslint-plugin')
			},
			'rules':
			{
				'@typescript-eslint/ban-ts-comment': 'warn'
			}
		}
	]
]
