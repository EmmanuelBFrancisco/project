import '../App.css'
import Leftside from './Leftside';
import MainCo from './mainco';
import Right from './right';

function Exit(){
    return(
        <div className='ext'>
            <Leftside/>
            <MainCo/>
        <Right/>
        </div>
    )
}
export default Exit;