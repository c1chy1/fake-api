



import { gql } from "graphql-tag";


export const products = gql`
    query products($categoryId : Float! )  {
        products (categoryId: $categoryId){

            title
            id
            price
            images
            description
            category {
                id
                name
                image
            }
        }
    }
`
;

