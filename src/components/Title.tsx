import React from 'react'
import { Typography} from "@mui/material";

type Props = {
    children: string
}

export default function Title({children}:Props) {
  return (
    <Typography fontWeight={700} fontFamily={'inherit'} variant="h5" component="h5">
        {children}
    </Typography>
  )
}

