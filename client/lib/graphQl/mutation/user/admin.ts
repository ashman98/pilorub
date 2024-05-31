import {gql} from '@apollo/client'

const CREATE_ADMIN = gql`
    mutation CreateAdmin($id: ID) {
        add_admin(id: $id) {
            username,
        }
    }
`

export {CREATE_ADMIN}