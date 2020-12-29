import { connect } from 'react-redux';

import News from 'src/components/News';

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps)(News);
