



import { gql } from "graphql-tag";





export const product = gql`
            query product($id : ID! )  {
                product (id: $id) {
                    title
                    id
                    price
                    images
                    description
                }
            }
    `
;


