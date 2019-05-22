import React from 'react';
import ReactDOM from 'react-dom';
import { Seed } from './seed';
import 'semantic-ui-css/semantic.min.css';
import Product from './product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  // Inside `ProductList`
  handleProductUpVote(productId) {
    const { products } = this.state;
    const nextProducts = products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      }
      return product;
    });
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    const { products } = this.state;
    products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map(product => (
      <Product
        key={`product-${product.id}`}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

ReactDOM.render(<ProductList />, document.getElementById('content'));
