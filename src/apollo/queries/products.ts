



import { gql } from "graphql-tag";





export const products = gql`
    query Products ($id: ID!) {
        products {
            id
            title
            category(id: $id) {
                name
                image
                id
            }
        }
    }
`
;


/*


import { gql } from "graphql-tag";

export const products = gql`
    query getProducts {
        categoryList  {
            products {
                items {
                    name
                    image{
                        url
                    }

                    price_range {
                        maximum_price {

                            final_price {
                                value
                            }
                        }
                    }
                }
            }
            uid
        
        }
     
    }
`;
*/
