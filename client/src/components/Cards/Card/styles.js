import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    cardContent:{
        height: '15rem',
        position:'relative'

    },
    buttons:{
        position: 'absolute',
        bottom: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },

    card :{
        margin: '1rem'
        
    },


    description: {
        overflowX : 'hidden',
        overflowy : 'scroll'

    }

}))