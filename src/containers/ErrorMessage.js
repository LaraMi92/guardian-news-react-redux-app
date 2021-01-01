import { connect } from 'react-redux';

import ErrorMessage from 'src/components/ErrorMessage';

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps)(ErrorMessage);
