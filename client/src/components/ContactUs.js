import { Col, Container, Row } from "react-bootstrap";

export function ContactUs() {
    return (
        <>
            <Container style={{ fontFamily: 'Times New Roman' }}>
                <Container className="mt-1">

                    <Row>
                        <Col lg={6} className="mt-4">
                            <img src="https://ramdhanu.in/wp-content/uploads/2021/08/reachus.jpg" alt="" style={{ height: '100%', width: '100%' }} />
                        </Col>
                        <Col lg={6} className="pt-4">
                            <h1>Contact Us</h1>
                            <br></br>
                            <h3>Registered Office:</h3>
                            <p>1619 Sector-7E, Faridabad, Haryana 121006</p>
                            <br></br>
                            <h3>Operating Offices:</h3>
                            <br></br>
                            <h4>Noida</h4>
                            <p>VenueLook.com (TENXT SOLUTIONS PVT LTD)</p>
                            <p>D-188, Ground Floor,</p>
                            <p>Sector 10, Noida - 201301</p>
                            <p>Phone: +91-8470804805</p>
                            <p>Email: info@venuelook.com</p>
                            <br></br>
                            <h4>Mumbai</h4>
                            <p>VenueLook.com (TENXT SOLUTIONS PVT LTD)</p>
                            <p>C/O Moglix, Brady Glady's Plaza,</p>
                            <p>Unit No. 1, Senapati Bapat Road,</p>
                            <p>Lower Parel West, Mumbai - 400013</p>
                            <p>Phone: +91-8470804805</p>
                            <p>Email: info@venuelook.com</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>

    );
}