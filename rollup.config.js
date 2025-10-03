import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

import PACKAGE from './package.json' with { type: 'json' };

export default
{
	input: 'src/index.ts',
	output:
	[
		{
			file: 'build/' + PACKAGE.main,
			format: 'esm'
		}
	],
	plugins:
	[
		del(
		{
			targets: 'build'
		}),
		typescript(
		{
			compilerOptions:
			{
				rootDir: 'src',
				declaration: false
			}
		}),
		copy(
		{
			targets:
			[
				{
					src: 'package.json',
					dest: 'build'
				},
				{
					src: 'README.md',
					dest: 'build'
				}
			]
		})
	]
};
