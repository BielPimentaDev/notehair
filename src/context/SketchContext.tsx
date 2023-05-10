import { SkPath, useCanvasRef } from '@shopify/react-native-skia';
import React, {
	createContext,
	ReactNode,
	useState,
	useEffect,
	useRef,
} from 'react';
import { useSharedValue } from 'react-native-reanimated';

export interface contextType {
	children: React.ReactNode;
}

interface IPath {
	segments: string;
	color?: string;
	type?: string;
	strokeWidth: number;
}

interface valueInterface {
	colorPicked: string;
	setColorPicked: React.Dispatch<React.SetStateAction<string>>;

	typePicked: string;
	setTypePicked: React.Dispatch<React.SetStateAction<string>>;

	imageScale: number;
	setImageScale: React.Dispatch<React.SetStateAction<number>>;

	positionZommablePictureX: number;
	setPositionZommablePictureX: React.Dispatch<React.SetStateAction<number>>;
	positionZommablePictureY: number;
	setPositionZommablePictureY: React.Dispatch<React.SetStateAction<number>>;

	currentScale: number;
	setCurrentScale: React.Dispatch<React.SetStateAction<number>>;

	strokePicked: number;
	setStrokePicked: React.Dispatch<React.SetStateAction<number>>;

	isPopUpModalOpen: boolean;
	setIsPopUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

	showColorModal: boolean;
	setShowColorModal: React.Dispatch<React.SetStateAction<boolean>>;

	zoomIsOn: boolean;
	setZoomIsOn: React.Dispatch<React.SetStateAction<boolean>>;

	paths: IPath[];
	setPaths: React.Dispatch<React.SetStateAction<IPath[]>>;

	poppeds: IPath[];
	setPoppeds: React.Dispatch<React.SetStateAction<IPath[]>>;
	currentPointX: any;
	currentPointY: any;

	currentImageRef: any;
	currentPath: any;
	offSetScale: any;
	offSetFocalX: any;
	offSetFocalY: any;
}

export const SketchContext = createContext<valueInterface>(
	{} as valueInterface
);

export function SketchContextProvider({ children }: contextType) {
	const [typePicked, setTypePicked] = useState('normal');
	const [colorPicked, setColorPicked] = useState('black');
	const [strokePicked, setStrokePicked] = useState(4);
	const offSetScale = useSharedValue(1);
	const offSetFocalX = useSharedValue(1);
	const offSetFocalY = useSharedValue(1);
	const [poppeds, setPoppeds] = useState<IPath[]>([]);
	const [paths, setPaths] = useState<IPath[]>([]);
	const [isPopUpModalOpen, setIsPopUpModalOpen] = useState(false);
	const [showColorModal, setShowColorModal] = useState(false);
	const [zoomIsOn, setZoomIsOn] = useState(false);
	const [imageScale, setImageScale] = useState(0.6);
	const currentPointX = useSharedValue(1);
	const currentPointY = useSharedValue(1);
	const [positionZommablePictureY, setPositionZommablePictureY] = useState(1);
	const [positionZommablePictureX, setPositionZommablePictureX] = useState(1);
	const [currentScale, setCurrentScale] = useState(1);
	const currentPath = useRef<SkPath | null>(null);
	const currentImageRef = useCanvasRef();

	return (
		<SketchContext.Provider
			value={{
				currentScale,
				setCurrentScale,
				offSetScale,
				offSetFocalY,
				offSetFocalX,
				currentPath,
				zoomIsOn,
				setZoomIsOn,
				positionZommablePictureY,
				setPositionZommablePictureY,
				positionZommablePictureX,
				setPositionZommablePictureX,
				currentPointX,
				currentPointY,
				colorPicked,
				setColorPicked,
				typePicked,
				setTypePicked,
				setPaths,
				paths,
				poppeds,
				setPoppeds,
				currentImageRef,
				showColorModal,
				setShowColorModal,
				isPopUpModalOpen,
				setIsPopUpModalOpen,
				imageScale,
				setImageScale,
				strokePicked,
				setStrokePicked,
			}}>
			{children}
		</SketchContext.Provider>
	);
}
