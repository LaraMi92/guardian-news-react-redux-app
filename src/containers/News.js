import { connect } from 'react-redux';

import News from 'src/components/News';

import { loadMoreData } from 'src/store/actions';

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  infiniteScroll: (value) => {
    dispatch(loadMoreData(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
