import React from 'react';
import Summary from '../Summary';
import TransactionTable from '../TransactionsTable';
import { Container } from './styles';

function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}

export default Dashboard;
