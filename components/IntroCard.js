import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: `${1}fr ${3}fr`,
        justifyItems: "center",
        alignItems: "center",
        maxWidth: 600,
    },
    media: {
        height: 144,
        width: 144,
        borderRadius: 9999,
        justifySelf: "center",
        alignSelf: "start"
    },
    card: {

    }
 }));
  
export default function IntroCard() {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardMedia image="/images/profile.jpg" className={classes.media} title="profile picture" />
                <CardContent>
                    <Typography variant='h2'>Jacob Tingling</Typography>
                    <Typography variant='h5'>Web Developer</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </CardContent>
            </Card>
    )
}