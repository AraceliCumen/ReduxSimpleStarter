import { connect } from 'react-redux';
import Section from '../components/Section';

function mapStateToProps(state){
  return { person : state.person }
}

export default connect(mapStateToProps)(Section)