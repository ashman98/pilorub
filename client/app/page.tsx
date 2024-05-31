'use client'
import {useQuery} from "@apollo/client";
import {GET_ADMIN_BY_ID} from "@/lib/graphQl/query/user/admin";
import Banner from "@/src/component/Banner/Banner";
import React from "react";
import jf from "../src/Assets/download.jpg"

export default function Home() {
    // const { loading, error, data } = useQuery(GET_ADMIN_BY_ID, {
    //     variables: { id: '663806ef66d0829c5da5f324' }
    // });
    //
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      Home <br/>
        Home <br/>
        Home <br/>
      <Banner imgSrc={jf} containerName={'placeholder'} rows={5} columns={5} margin={2.5} animTime={0.3} />

    </div>
  )
}
