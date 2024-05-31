'use client'

import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    from,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";
import {ErrorResponse, onError} from "@apollo/client/link/error";
import {GraphQLFormattedError} from "graphql/error";
import React from "react";

const ClientApolloProvider = function({children}: { children: React.ReactNode }) {
    const errorLink:ApolloLink = onError(({graphQLErrors, networkError}: ErrorResponse): void =>{
        if (graphQLErrors){
            graphQLErrors.map(({message, locations,path}: GraphQLFormattedError): void=>{
                alert(`Graphql error ${message}`)
            })
        }
        if (networkError) {
            console.error(`Network error ${networkError}`);
        }
    })
    const link:ApolloLink = from([
        errorLink,
        new HttpLink({uri: process.env.BACKEND})
    ])

    const client:ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache: new InMemoryCache(),
        link: link
    });

    return(
        <ApolloProvider client={client}>{children}</ApolloProvider>
    );
}


export default ClientApolloProvider