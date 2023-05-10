import React, { useContext } from 'react';
import { ColorsModalStyled } from '../styles';
import { SketchContext } from '../../../context/SketchContext';
import {
	PressableColor,
	PressableStroke,
	StyledWraper,
} from './styles/colorsModalStyles';
import {
	colorsToBeSelected,
	strokeWidthToBeSelected,
} from './helpers/colorModalHelpers';

interface ColorsModalProps {
	setShowColorModal: any;
	showColorModal: any;
}

export default function ColorsModal(props: ColorsModalProps) {
	const {
		setColorPicked,
		colorPicked,
		setShowColorModal,
		showColorModal,
		setStrokePicked,
	} = useContext(SketchContext);

	const colorPickHandler = (colorCode: string) => {
		setColorPicked && setColorPicked(colorCode);
		setShowColorModal(false);
	};

	const strokePickHandler = (stroke: number) => {
		setStrokePicked && setStrokePicked(stroke);
		setShowColorModal(false);
	};

	return (
		<ColorsModalStyled style={{ elevation: 2 }}>
			<>
				{/* <StyledWraper>
					{strokeWidthToBeSelected.map((stroke, index) => {
						return (
							<PressableStroke
								size={stroke.size}
								key={index}
								onPress={() => strokePickHandler(stroke.size)}
							/>
						);
					})}
				</StyledWraper> */}
				<StyledWraper style={{ flexWrap: 'wrap' }}>
					{colorsToBeSelected.map((item, index) => {
						const colorCode = Object.values(item)[0];

						return (
							<PressableColor
								color={Object.values(item)[0]}
								colorPicked={colorPicked}
								onPress={() => colorPickHandler(colorCode)}
								key={index}
							/>
						);
					})}
				</StyledWraper>
			</>
		</ColorsModalStyled>
	);
}
