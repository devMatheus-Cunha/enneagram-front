import {
  Tooltip,
  IconButton as IconButtonChakra,
  IconButtonProps,
} from '@chakra-ui/react'
import React from 'react'

interface IIconButtonProps extends IconButtonProps {
  tooltip?: string
}

export default function IconButton({ tooltip, ...props }: IIconButtonProps) {
  return (
    <Tooltip
      bg="gray.500"
      fontSize="13px"
      color="white"
      hasArrow
      label={tooltip}
    >
      <IconButtonChakra {...props} />
    </Tooltip>
  )
}
