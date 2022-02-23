import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { connect, useDispatch } from "react-redux"
import { logoutUser } from '../../Redux/actions'
import { useNavigate } from "react-router-dom"

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
                    <h3>{ children }</h3>
                </Box>
            )}
        </div>
    )
}

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
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleLogout = () => dispatch(logoutUser())

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={ handleChange } aria-label="simple tabs example" centered>
                    <Tab label="Home" {...a11yProps(0)}
                         onClick={ () => navigate("/", { replace: true }) }
                    />
                    <Tab label="New Question" {...a11yProps(1)}
                         onClick={ () => navigate("/add", { replace: true }) }
                    />
                    <Tab label="Leaderboard" {...a11yProps(2)}
                         onClick={ () => navigate("/leaderboard", { replace: true }) }
                    />
                    { auth.isAuthenticated &&
                        <div style={{ display: 'flex' }}>
                            <img alt={`avatar of ${auth.user.name}`} src={ auth.user.avatarURL } style={{ width: '40px' }}/>
                            <h4 style={{ margin: 'auto 1em' }}>{auth.user.name}</h4>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    }
                </Tabs>
            </AppBar>
                <TabPanel value={value} index={0} />
                <TabPanel value={value} index={1} />
                <TabPanel value={value} index={2} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(SimpleTabs)
