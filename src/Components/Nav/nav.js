import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { connect, useDispatch } from "react-redux"
import { logoutUser } from '../../Redux/actions'
import CreateQuestion from "../CreateQuestion/CreateQuestion"
import SignIn from "../SignIn/SignIn";
import Leaderboard from "../Leaderboard/Leaderboard"
import Home from "../Home/Home"

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${index}` }
            aria-labelledby={ `simple-tab-${ index }` }
            {...other}
        >
            { value === index && (
                <Box p={3}>
                    <Typography>{ children }</Typography>
                </Box>
            )}
        </div>
    )
}
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// }

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

const SimpleTabs = ({ auth }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0)

    console.log('AUTH USER', auth)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleLogout = () =>
        dispatch(logoutUser())

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="New Question" {...a11yProps(1)} />
                    <Tab label="Leaderboard" {...a11yProps(2)} />
                    { auth.isAuthenticated &&
                        <div style={{ display: 'flex' }}>
                            <img alt={`avatar of ${auth.user.name}`} src={ auth.user.avatarURL } style={{ width: '40px' }}/>
                            <Typography>{auth.user.name}</Typography>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    }
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                { auth.isAuthenticated
                    ? <Home />
                    : <SignIn />
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                { auth.isAuthenticated
                    ? <CreateQuestion />
                    : <SignIn />
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                { auth.isAuthenticated
                    ? <Leaderboard />
                    : <SignIn />
                }
            </TabPanel>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(SimpleTabs)
