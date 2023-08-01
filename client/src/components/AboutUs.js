import { Col, Container, Row } from "react-bootstrap";

export function AboutUs() {
    return (
        <>
            <Row className="m-0">
                <Col lg={12}>
                    <img src="https://www.genusitsolution.com/assets/images/abouts.jpg" alt="" style={{ height: '100%', width: '100%' }} />
                </Col>
            </Row>
            <Container style={{ fontFamily: 'Times New Roman' }}>
                <Container className="mt-5">

                    <Row>
                        <Col lg={6} className="mt-4">
                            <img src="https://www.colelawgrouppc.com/blog/wp-content/uploads/2022/05/pexels-pixabay-269077.jpg" alt="" style={{ height: '90%', width: '90%' }} />
                        </Col>
                        <Col lg={6} className="pt-4">
                            <h2>The Company</h2>
                            <p>
                                Founded in 2014, VenueLook.com is a product of TENXT SOLUTIONS PVT LTD, an Indian internet company. VenueLook team is making it easier to find and book venues and vendors across 30+ cities in India. We are a young team that loves to find all kinds of trendy, chic, professional, or unique venues and vendors. We are building a product that showcases the amazing spaces and event professionals we come across and at the same time, we aim to help event organizers save time and effort when looking for their kind of venues and event partners. The ultimate objective is to connect the right people to the right kind of venues and vendors, bridging the gap and delivering value!
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">

                    <Row>

                        <Col lg={6} className="mt-3">
                            <h2 id="pid" className="text-center">The Team</h2>
                            <p>
                                VenueLook has a passionate, committed woman founder at its helm with some sharpest, experienced brains behind it as angel advisors. As with any great team, VenueLook is a good mix of sharp, intelligent, focused, hard-working team. We're young, we're enthusiastic and yes, we love hunting down the coolest venues and event vendors around.
                            </p>
                        </Col>
                        <Col lg={6} className="mt-4">
                            <img src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg" alt="" style={{ height: '80%', width: '80%' }} />
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">

                    <Row>

                        <Col lg={6} className="mt-4">
                            <img src="https://media.bizj.us/view/img/8190162/istock000050895978medium*1024xx1784-1001-0-73.jpg" alt="" style={{ height: '80%', width: '80%' }} />
                        </Col>
                        <Col lg={6} className="mt-3">
                            <h2 id="pid" className="text-center">Join Our Team</h2>
                            <p>
                                We believe that even though we're so often communicating and socialising online, it’s those offline weddings, social and corporate events and activities that are most important. So we are starting off by making it easier for people to organise offline weddings, social and corporate events and find venues, artists, decorators, entertainers etc. for the same. What we have created is a web-based venue and vendor discovery platform that links event-organisers with the best function venues and vendors across India.
                            </p>
                            <p>
                                If you want to contribute towards our big hairy audacious goal to make it easier for Indians to create social experiences, you should definitely join us! You can send in your resume at: info@tenxt.com
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>

    );
}