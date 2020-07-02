import React from 'react';
import {Card,Typography,CardContent,Grid} from "@material-ui/core";
import CountUp from 'react-countup';

import './Cards.css';
const Cards =({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    // console.log(props);
    if(!confirmed){
        return "loading....";
    }
    return(
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recoverd
                        </Typography>
                        <Typography variant="h5"> REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5"> REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths Causes by Covid-19</Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;