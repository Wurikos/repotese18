import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "300px",
	"height": "300px",
	"background": "#1e1ee0"
};
const overrides = {};

const Daas = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Daas, { ...Box,
	defaultProps,
	overrides
});
export default Daas;