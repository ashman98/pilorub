import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ADMIN } from '../lib/graphql/queries/getAdmin';
import { isAuthenticated } from '../lib/auth';

const Dashboard = () => {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_ADMIN);

    if (!isAuthenticated()) {
        // Redirect to login if not authenticated
        router.push('/login');
        return null;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { admin } = data;

    return (
        <div>
            <h1>Welcome to the Dashboard, {admin.name}!</h1>
            <p>Your role: {admin.role}</p>
        </div>
    );
};

export default Dashboard;