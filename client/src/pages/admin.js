import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import "./pages.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  useEffect(() => {
    axios.get("/api/feedback").then((res) => {
      setFeedbacks(res.data);
    });
  }, ["/api/feedback"]);

  console.log(feedbacks);

  const deleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`/api/feedback/${feedbackId}`);
      axios.get("/api/feedback").then((res) => {
        setFeedbacks(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="booking-container">
        <center>
          <h2>Admin Page</h2>
        </center>
      </div> */}
      <div style={{ marginLeft: 36 }}>
        {feedbacks !== null ? (
          <div>
            {feedbacks.map((feedback) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body key={feedback.id}>
                      <Card.Title>{feedback.name}</Card.Title>
                      <Card.Text>{feedback.comments}</Card.Text>
                      {/* <Link to='/update-feed'><Button variant="primary">Update</Button></Link> */}
                      <Button
                        variant="primary"
                        onClick={() => deleteFeedback(feedback.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                  <br />
                  <br />
                </>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>Feedback Loading...</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPage;
