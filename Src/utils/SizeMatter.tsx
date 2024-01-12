import { moderateScale, s, scale, verticalScale } from "react-native-size-matters"


const FontSizeResponsive = (size:number) => {
	return s(size)
}

const SpaceResponsive = (size:number) => {
return moderateScale(size)
}

const WidthResponsive = (size:number) => {
	return scale(size)	
}

const HeightResponsive = (size:number) => {
	return verticalScale(size)
}

export {FontSizeResponsive, SpaceResponsive, WidthResponsive, HeightResponsive}