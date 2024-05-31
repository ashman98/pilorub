import {gql} from '@apollo/client'

const GET_ADMIN_BY_ID = gql`
    query GetAdminById($id: ID) {
        admin(id: $id) {
            username
        }
    }
`

export {GET_ADMIN_BY_ID}