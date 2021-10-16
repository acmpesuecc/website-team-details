import React from 'react';
import TeamMemberList from './Components/TeamMemberList/TeamMemberList';
import './App.css';
import Heading from './Components/Heading/Header';
import Navigationbar from './Components/NavigationBar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navigationbar />
                <Heading />
                <TeamMemberList />
            </div>
        </QueryClientProvider>
    );
}

export default App;
