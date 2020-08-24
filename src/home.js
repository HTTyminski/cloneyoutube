import React from 'react';
import { 
    makeStyles, 
    AppBar, 
    Toolbar, 
    IconButton,
    Drawer,
    Button,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText, 
    ListSubheader,
    Box,
    Grid,
    Hidden,
    Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

import { useTheme } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
    root:{
        height:'100vh',
        backgroundColor:theme.palette.background.dark,
    },
    logo:{
        height:25,
    },
    appBar:{
        boxShadow:'none',
        zIndex:theme.zIndex.drawer + 1,
    },
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawerPaper:{
        width:240,
        borderRight:'none',
    },
    MenuIcon:{
        paddingRight:theme.spacing(5),
        paddingLeft:theme.spacing(6),
    },
    icons:{
        paddingRight:theme.spacing(2),
    },
    grow:{
        flexGrow:'1',
    },
    listItemText:{
        fontSize: 14,
        fontWeight:400,
    },
    listItem:{
        paddingTop:4,
        paddingBottom:4,
    },
    subheader:{
        textTransform:'uppercase',
    },
  }));
 
  const videos=[
    {
    id:1,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:2,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:3,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:4,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:5,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:6,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:7,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },
    {
    id:8,
    titles:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core  #29',
        channel:'HTT',
        view:'11 mi de visulizações ',
        date:'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb:'/images/you.png',
    },

    
]


function Home({ darkMode, setDarkMode }){
    const classes = useStyles();
    const theme = useTheme();
    
    return(
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                        edge='start' 
                        className={classes.icons}
                        color='inherit' 
                        aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    <img 
                        src={
                        theme.palette.type === 'dark' 
                        ? '/images/branco.png' 
                        : '/images/preto.png'
                        }
                        alt="logo preta"
                        className={classes.logo}    
                    />
                    <div className={classes.grow}/>

                    <Switch 
                        defaultChecked
                        color="default"
                        value={darkMode} 
                        onChange={() => setDarkMode(!darkMode)}
                        className={classes.icons}
                    />

                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    <Hidden mdDown>
                        <Button startIcon={<AccountCircle/>} variant='outlined' color="secondary">
                            Fazer Login
                        </Button>
                    </Hidden>
                </Toolbar>
            </AppBar>

            <Box display='flex'>
            
            <Hidden mdDown>
               
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                 <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary:classes.listItemText,
                                }}
                                primary={'Início'}
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<Whatshot/>}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary:classes.listItemText,
                                }}
                                primary={'Em alta'}
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<Subscriptions/>}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary:classes.listItemText,
                                }}
                                primary={'Inscrições'}
                            />
                        </ListItem>
                    </List>
                    
                    <Divider/>

                    <List>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<VideoLibrary/>}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary:classes.listItemText,
                                }}
                                primary={'Início'}
                            />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>{<History/>}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary:classes.listItemText,
                                }}
                                primary={'Em alta'}
                            />
                        </ListItem>
                    </List>    
                    
                    <Box p={4}>
                        <Typography variant='body2'>
                            Faça Login para curtir vídeos,comentar e se inscrever.
                        </Typography>
                        
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color='secundary'
                                startIcon={<AccountCircle/>}
                            >
                            Fazer Login
                            </Button>
                        </Box>
                    </Box>

                    <Divider/>

                    <List
                        component='nav'
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader 
                                component='div' 
                                id='nested-list-subheader' 
                                className={classes.subheader}
                            >
                                O mundo do YouTube
                            </ListSubheader>
                        }
                    >
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={'Musica'}
                            />
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Esporte'}
                            />
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Jogos'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Filmes'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Notícias'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Musica'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Ao vivo'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Destaques'}/>
                        </ListItem>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon><AddCircle/></ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Videos 360'}/>
                        </ListItem>
                        
                        <Divider/>

                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon>
                                <AddCircle/>
                            </ListItemIcon>
                            <ListItemText       
                                classes={{
                                    primary:classes.listItemText,
                                }} primary={'Procurar mais'}/>
                        </ListItem>

                        <Divider/>

                  
                </List>
                </div>
            </Drawer>
            
            </Hidden>

            <Box p={8}>
                <Toolbar/>
                <Typography
                variant='h5'
                color='textPrimary'
                style={{ fontWeght:600 }}
            >
                Recomendados
                </Typography>
                <Grid container spacing={2}>
                {videos.map((item,index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box>
                        <img
                            style={{width:'100%'}}
                            alt={item.title}
                            src={item.thumb}
                        />
                        <Box>
                            <Typography
                                style={{ fontWeight:600 }}
                                gutterBottom
                                variant='body1'
                                color='textPrimary'
                            >
                                {item.title}
                            </Typography>  

                            <Typography
                                display='block'
                                variant='body2'
                                color='textSecondary'
                            >
                                {item.channel}
                            </Typography>

                            <Typography 
                                variant='body2'
                                color='textSecondary'    
                            >
                                {`${item.view} . ${item.date}`}
                            </Typography>
                        </Box>
                    </Box>
                    </Grid>
                    ))
                }
                   
                </Grid>
            </Box>
            </Box>
        </div>
    
    );
}

export default Home;