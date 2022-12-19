export type Curve = {
	name: string,
	startY: number,
	midX: number,
	midY: number,
	endX: number,
}

export type RenderedCurve = {
	color: string,
	startX: number,
	startY: number,
	midX: number,
	midY: number,
	endX: number,
	endY: number,
}

export const enum PointType {
	Start,
	Mid,
	End,
}
