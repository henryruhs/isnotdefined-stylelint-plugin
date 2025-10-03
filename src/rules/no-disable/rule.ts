import type { Options } from './option.interface';
import type { Root } from 'postcss';
import type { Rule, PostcssResult } from 'stylelint';

import stylelint from 'stylelint';

import { wording } from '../wording';

import { defaultOptions } from './option';

const { utils, createPlugin } : typeof stylelint = stylelint;
const ruleName : string = '@isnotdefined/no-disable';

function validateOptions(result : PostcssResult, options : Options)
{
	return utils.validateOptions(result, ruleName,
	{
		actual: options,
		// @ts-ignore
		possible:
		{
			commands: value => value
		}
	});
}

function rule(primaryOptions : Options)
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			root.walkComments(comment =>
			{
				if (options.commands.includes(comment.text.split(' ').at(0)))
				{
					utils.report(
					{
						message: wording.unexpected + ' "' + comment.text + '" ' + wording.comment,
						node: comment,
						result,
						ruleName,
						word: comment.text
					});
				}
			});
		}
	};
}

export default createPlugin(ruleName, rule as unknown as Rule);
