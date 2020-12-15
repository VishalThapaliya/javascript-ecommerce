import { getProduct } from '../js/api';
import { hideLoading, parseRequestUrl, showLoading } from '../js/utils';
import Rating from '../components/Rating';

const ProductScreen = {
    after_render: () => {
        const request = parseRequestUrl();
        document.getElementById('add-button').addEventListener('click', () => {
            document.location.hash = `/cart/${request.id}`;
        })
    },
    render: async () => {
        showLoading();
        const request = parseRequestUrl();
        const product = await getProduct(request.id);

        if(product.error) {
            return `<div>${product.error}</div>`;
        }
        hideLoading();
        return `
            <div class="content">
                <div class="back-to-result">
                    <a href="/#/">Back</a>
                </div>
                <div class="details">
                    <div class="details-image">
                        <img src="${product.image}" alt="${product.name}"/>
                    </div>
                    <div class="details-info">
                        <ul>
                            <li>
                                <h1>${product.name}</h1>
                            </li>
                            <li>
                                ${Rating.render({
                                    value: product.rating,
                                    text: `${product.numReviews} reviews`
                                })}
                            </li>
                            <li>
                                Price: <strong>$${product.price}</strong>
                            </li>
                            <li>
                                Description: 
                                <div>
                                    ${product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="details-action">
                        <ul>
                                <li>
                                    Price: ${product.price}
                                </li>
                                <li>
                                    Status: ${product.countInStock > 0 
                                        ? `<span class="success">In stock</span>` 
                                        : `<span class="error">Unavailable</span>`
                                    }
                                </li>
                                <li>
                                    <button class="fw primary" id="add-button">Add to Cart</button>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
};
export default ProductScreen;