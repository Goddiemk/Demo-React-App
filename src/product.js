import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    const { onVote, id } = this.props;
    onVote(id);
  }

  render() {
    const { productImageUrl, votes, url, title, description, submitterAvatarUrl } = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} alt="" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <button type="button" onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </button>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={submitterAvatarUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  submitterAvatarUrl: PropTypes.string.isRequired,
  productImageUrl: PropTypes.string.isRequired,
  onVote: PropTypes.func.isRequired,
};
