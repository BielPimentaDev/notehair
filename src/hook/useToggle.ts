import { useState } from 'react';
export const useToggle = () => {
	const [status, setStatus] = useState(false);

	const changeStatus = () => {
		setStatus((state) => !state);
	};

	return { status, changeStatus };
};
