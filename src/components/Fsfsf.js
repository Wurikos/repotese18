import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {};

const Fsfsf = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Fsfsf, { ...Box,
	defaultProps,
	overrides
});
export default Fsfsf;