import { SketchContext } from './../../../context/SketchContext';

import { useContext } from 'react';

export function unDoDraw() {
	const { setPoppeds, poppeds, setPaths, paths } = useContext(SketchContext);
	const newPaths = [...paths];
	const poppedPath = newPaths.pop();
	if (!poppedPath) return;
	setPoppeds([...poppeds, poppedPath]);
	setPaths(newPaths);

	return;
}
