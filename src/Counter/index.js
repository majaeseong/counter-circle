import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../Reducer/reducer';
import Presenter from './presenter';

function mapStateToProps(state){
    const{counters} = state;
    return{
        counters
    }
}

function mapDispatchToProps(dispatch){
                //action to Reducer  
    return{
        create: bindActionCreators(actionCreators.create,dispatch),
        remove: bindActionCreators(actionCreators.remove,dispatch),
        add :  bindActionCreators(actionCreators.add,dispatch),
        sub : bindActionCreators(actionCreators.sub, dispatch),
        change : bindActionCreators(actionCreators.change, dispatch )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Presenter);