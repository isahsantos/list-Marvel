import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'955px',
    marginLeft:'69px',
    marginRight:'53px',
    marginBottom:'60px'
  },
  text:{
      width: '431px',
      height: '58px',
      color: 'red',
      fontSize:''
    
  }
}));
