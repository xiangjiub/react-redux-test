import {INCREMENT} from '/@/redux/constant';
import {createIncrementAct,createDecrementAct,createIncrementAsyncAct} from '/@/redux/count_action';

//引入UI组件
import CountUI from '/@/components/Count';

//引入store
import store from '/@/redux/store';

// 链接ui与store
import {connect} from 'react-redux';

function mapStateToProps(state:any) {
    return {count:state}
}

function mapDispatchToProps(dispatch:any){
    return{
        jia:(number:number)=>dispatch(createIncrementAct(number)),
        jian:(number:number)=>dispatch(createDecrementAct(number)),
        jiaAsync:(number:number,time:any)=>dispatch(createIncrementAsyncAct(number,time))
    }
}
const CountContainer:any = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer