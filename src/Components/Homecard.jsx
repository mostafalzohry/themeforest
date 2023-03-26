
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Homecard(props) {
  return (
    <Card sx={{ mt :3}}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold"  }}>
        {props.headofcard}
        </Typography>
        <Typography variant="caption" component="div" sx= {{fontSize: 16}}>
          everything you need to know to get started
        </Typography>
        <Typography variant="caption"     sx={{ display: "flex", alignItems: "center" , fontSize: 16 }}> 
          see all 11 artircles <ArrowRightAltIcon   />
        </Typography>
      </CardContent>
    </Card>
  );
}
