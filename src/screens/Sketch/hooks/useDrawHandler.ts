import { SketchContext } from '../../../context/SketchContext';
import { useState, useContext } from 'react';
import { pathsAtom, poppedPathsAtom } from '../../../store';
import { useRecoilState } from 'recoil';

export function useDrawHandler() {
	const [poppeds, setPoppeds] = useRecoilState<any>(poppedPathsAtom);
	const [paths, setPaths] = useRecoilState<any>(pathsAtom);
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
