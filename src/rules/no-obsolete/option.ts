import { Options } from './option.interface';

export const defaultOptions : Options =
{
	obsoletes:
	[
		{
			property:
			{
				search: 'clip',
				replace: 'clip-path'
			}
		},
		{
			property:
			{
				search: 'grid-gap',
				replace: 'gap'
			}
		},
		{
			property:
			{
				search: 'grid-column-gap',
				replace: 'column-gap'
			}
		},
		{
			property:
			{
				search: 'grid-row-gap',
				replace: 'row-gap'
			}
		},
		{
			property:
			{
				search: 'text-decoration'
			},
			value:
			{
				search: 'blink'
			}
		},
		{
			property:
			{
				search: 'word-break'
			},
			value:
			{
				search: 'break-word',
				replace: 'break-all'
			}
		}
	]
};