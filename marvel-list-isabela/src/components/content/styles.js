import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "auto",
    height: "1040px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px 0 rgba(69, 91, 99, 0.08)",
    backgroundColor: "ffffff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
