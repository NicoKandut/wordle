const compactFormatter = Intl.NumberFormat('en', { notation: 'compact' });

export const compact = (value: unknown) =>
	typeof value === 'number' ? compactFormatter.format(value) : null;
