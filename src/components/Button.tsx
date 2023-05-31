import { Button} from "@mui/material";
import { CreateIcon } from "../assets/icons";

type Props = {
    callback: () => Promise<void> | void
    icon?: any
    children: string
}

export default function GenericButton({callback, icon, children} : Props) {
  return (
    <Button onClick={callback} variant="outlined" startIcon={icon || CreateIcon} style={{color:'rgb(0, 0, 0)', border: 'rgb(0, 0, 0) solid'}}>
        {children}
    </Button>
  )
}
