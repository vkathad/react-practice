import { Suspense, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Await, useActionData, useLoaderData } from "react-router-dom";
import AddEventForm from "../componets/AddEventForm";
import LoginForm from "../componets/LoginForm";
import Cardimage from "../componets/UI/Cardimage";
import EventModal from "../componets/UI/EventModal";


function EventListPage() {
    const { events } = useLoaderData();
    const [show, setShow] = useState(false);
    const data = useActionData();
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => {
    //       setShow(true)

    //    };

    return (
        <>
            <Card>
                <Button variant="primary" onClick={() => setShow(true)}>
                    Add Event
                </Button>

                <EventModal show={show} formId='my-form' onHide={() => setShow(false)} title="Message"><AddEventForm /></EventModal>

            </Card>

            <Card>
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
    )
}
export default EventListPage;