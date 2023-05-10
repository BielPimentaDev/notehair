import { SketchContext } from '../../../context/SketchContext';
import { useState, useContext } from 'react';

export function useDrawHandler() {
	const { setPoppeds, setPaths, poppeds, paths } = useContext(SketchContext);
	const unDoDrawHandler = () => {
		const newPaths = [...paths];
		const poppedPath = newPaths.pop();
		if (!poppedPath) return;
		setPoppeds([...poppeds, poppedPath]);
		setPaths(newPaths);
	};

	const reDoDrawHandler = () => {
		const newPopped = [...poppeds];
		const poppedPath = newPopped.pop();
		const newPaths = [...paths];
		if (!poppedPath) return;
		newPaths.push(poppedPath);
		setPoppeds(newPopped);
		setPaths(newPaths);
	};

	return { unDoDrawHandler, reDoDrawHandler };
}
