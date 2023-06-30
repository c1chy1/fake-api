import { gql } from "graphql-tag";

export const categories = gql`
    query Categories {

        categories {
            id
            name
            image
        }
    }
    
`;

