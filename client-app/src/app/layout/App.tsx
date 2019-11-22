import React, { Component, useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IActivity } from '../models/activities';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([])

    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities/').then(response => {
            setActivities(response.data)
        });
    }, [])

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard activities={activities} />
            </Container>
        </Fragment>
    );
}

export default App;
