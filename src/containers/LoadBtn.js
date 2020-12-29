import { connect } from 'react-redux';

import LoadBtn from 'src/components/LoadBtn';

import { getNews } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  getNews: (value) => {
    dispatch(getNews(value));
  },
});

export default connect(null, mapDispatchToProps)(LoadBtn);
