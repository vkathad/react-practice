import React, { Suspense, useState } from 'react';
import LoginForm from '../componets/LoginForm';
import RegisterForm from '../componets/RegisterForm';
import Layout from './Layout';
import AlertUi from '../componets/UI/AlertUi';
import AccordionUi from '../componets/UI/AccordionUi';
import { Card, Row } from 'react-bootstrap';
import Cardimage from '../componets/UI/Cardimage';
import CarouselsUI from '../componets/UI/CarouselsUI';
import { Await, defer, useLoaderData, json } from 'react-router-dom';




function Home() {
    const [show, setShow] = useState(true);
    const { events } = useLoaderData();
    console.log(events);
    events.then(resolvedValue => {
        console.log('callback invoked');
        console.log(resolvedValue);
       
    }).catch(error => console.log(error));
    
    return (

        <>

            <Card>
                <CarouselsUI />
                {/* <AccordionUi/> */}
                {/* <AlertUi/> */}
                {/* <Cardimage image='logo192.png' title="First" text="First Text" /> */}
                <Row>
                    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                        <Await resolve={events}>
                            {(loadedEvents) =>
                                loadedEvents.map((event) => (
                                    <Cardimage key={event.id} image={event.image} title={event.title} text={event.date} />
                                ))
                            }
                        </Await>
                    </Suspense>
                </Row>
                {/* <RegisterForm/> */}
            </Card>

        </>

    );
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //   status: 500,
        // });
        throw json(
            { message: 'Could not fetch events.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();

        return resData.events;
    }
}
export async function loader() {
    return defer({
        events: loadEvents(),
    });
}

export default Home;
