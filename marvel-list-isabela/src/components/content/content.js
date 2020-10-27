import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from "./styles";
import { obterHerois } from "../../actions/marvel";
import ContentHeroi from '../ContentHerois/ContentHeroi'
export default function Content() {
  const classes = useStyles();
  const [result, setResult ] = React.useState(null)
  const bull = <span className={classes.bullet}>•</span>;
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 50,
  
  });

  const handleChange = (event, page) => {
    setPagination({...pagination,page:page})
  }

  useEffect(() => {
    obterHerois(pagination).then((res) => {
      console.log("res => ", res);
      setResult(res)
    });
  }, [pagination]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
    

          <Paper className={classes.paper}>
          
          { console.log("page",result)}
          {result && result.resultados.map(heroi =>( <ContentHeroi name={heroi.name}
          desc="x"
          actor = "y"
          img="z"
        >
          </ContentHeroi>))
          
          }
          <Pagination count={10} page={pagination.page} onChange={handleChange} />
          </Paper>

        </Grid>
      </Grid>
    </div>
  );
}
